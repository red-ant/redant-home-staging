// This apps script is a copy of what is used to handle sending the response 
// emails and is associated with the following spreadsheet:
// https://docs.google.com/spreadsheets/d/13_bBBpQ0j5T_abcjLYd_cgG-U7ibbPG5I-W7rSXp9-c/edit#gid=0

/******************************************************************************
 * This tutorial is based on the work of Martin Hawksey twitter.com/mhawksey  *
 * But has been simplified and cleaned up to make it more beginner friendly   *
 * All credit still goes to Martin and any issues/complaints/questions to me. *
 ******************************************************************************/

// if you want to store your email server-side (hidden), uncomment the next line
// var TO_ADDRESS = "info@redant.com.au";
var REPLY_TO_ADDRESS = "info@redant.com.au";

// spit out all the keys/values from the form in HTML for email
// uses an array of keys if provided or the object to determine field order
function formatMailBody(obj, order) {
  var result = "";
  var data = "";

  if (!order) {
    order = Object.keys(obj);
  }
  
  // loop over all keys in the ordered form data
  for (var idx in order) {
    var key = order[idx];
    // result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + sanitizeInput(obj[key]) + "</div>";
    // for every key, concatenate an `<h4 />`/`<div />` pairing of the key name and its value, 
    // and append it to the `result` string created at the start.
    if (key === 'answers') {
      data += sanitizeInput(obj[key]);
    }
  }

  var key = order['answers'];
  
  result += '<body style="background-color: #f5f9fc; padding: 20px;"><table align="center" border="0" cellpadding="0" cellspacing="0" width="550" bgcolor="white" style="border-radius: 15px;"><tbody><tr><td align="center"><table align="center" border="0" cellpadding="0" cellspacing="0" class="col-550" width="550"><tbody><tr><td align="center" style="height: 50px; padding: 20px;"><a href="https://redant.com.au" style="text-decoration: none;"><img    class="logo" src="https://redant.com.au/assets/images/logo.svg" alt="Red Ant logo"/></a></td></tr></tbody></table></td></tr><tr style="height: 100px;"><td align="center" style="border: none; border-top: 1px solid #f7f7f7; border-bottom: 1px solid #f7f7f7; padding-right: 20px; padding-left:20px; padding"><p style="font-weight: bolder; font-size: 22px; letter-spacing: 0.025em; color: black;">Your Stripe payment<br/>maturity assessment results.</p></td></tr><tr style="display: inline-block;"><td style="height: 150px; padding: 20px; background-color: white;"><p class="data"style="text-align: justify-all; align-items: center; font-size: 15px; padding-bottom: 12px;">We’ve crunched the numbers and have come up with key points you could imprive your product.</p><p><a href="https://redant.com.au/assessment/results?r=';
  result += encodeURIComponent(data);
  result+= '" style="color:black;">Click here to view and download your results.</a></p></td></tr><tr><td style="font-family: Arial, sans-serif; font-size:11px; line-height:18px; color:#999999; background-color: #343a40; padding: 15px; border-radius: 0 0 15px 15px;" valign="top" align="center"><a href="https://redant.com.au/privacy-policy" target="_blank" style="color:#999999; text-decoration:underline;">Privacy Policy</a> | <a href="tel:+61292678300" target="_blank" style="color:#999999; text-decoration:underline;">+61 2 9267 8300</a><br>© Red Ant</td></tr></tbody></table></body>';

  return result; // once the looping is done, `result` will be one long string to put in the email body
}

// sanitize content from the user - trust no one 
// ref: https://developers.google.com/apps-script/reference/html/html-output#appendUntrusted(String)
function sanitizeInput(rawInput) {
   var placeholder = HtmlService.createHtmlOutput(" ");
   placeholder.appendUntrusted(rawInput);
  
   return placeholder.getContent();
 }

function doPost(e) {

  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    record_data(e);
    
    // shorter name for form data
    var mailData = e.parameters;

    // names and order of form elements (if set)
    var orderParameter = e.parameters.formDataNameOrder;
    var dataOrder;
    if (orderParameter) {
      dataOrder = JSON.parse(orderParameter);
    }
    
    // determine recepient of the email
    // if you have your email uncommented above, it uses that `TO_ADDRESS`
    // otherwise, it defaults to the email provided by the form's data attribute
    var sendEmailTo = (typeof TO_ADDRESS !== "undefined") ? TO_ADDRESS : mailData.formGoogleSendEmail;
    
    // send email if to address is set
    if (sendEmailTo) {
      MailApp.sendEmail({
        to: String(sendEmailTo),
        subject: "Contact form submitted",
        replyTo: REPLY_TO_ADDRESS, // This is optional and reliant on your form actually collecting a field named `email`
        htmlBody: formatMailBody(mailData, dataOrder)
      });
    }

    return ContentService    // return json success results
          .createTextOutput(
            JSON.stringify({"result":"success",
                            "data": JSON.stringify(e.parameters) }))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(error) { // if error return this
    Logger.log(error);
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": error}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * record_data inserts the data received from the html form submission
 * e is the data received from the POST
 */
function record_data(e) {
  var lock = LockService.getDocumentLock();
  lock.waitLock(30000); // hold off up to 30 sec to avoid concurrent writing
  
  try {
    Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it
    
    // select the 'responses' sheet by default
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = e.parameters.formGoogleSheetName || "responses";
    var sheet = doc.getSheetByName(sheetName);
    
    var oldHeader = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var newHeader = oldHeader.slice();
    var fieldsFromForm = getDataColumns(e.parameters);
    var row = [new Date()]; // first element in the row should always be a timestamp
    
    // loop through the header columns
    for (var i = 1; i < oldHeader.length; i++) { // start at 1 to avoid Timestamp column
      var field = oldHeader[i];
      var output = getFieldFromData(field, e.parameters);
      row.push(output);
      
      // mark as stored by removing from form fields
      var formIndex = fieldsFromForm.indexOf(field);
      if (formIndex > -1) {
        fieldsFromForm.splice(formIndex, 1);
      }
    }
    
    // set any new fields in our form
    for (var i = 0; i < fieldsFromForm.length; i++) {
      var field = fieldsFromForm[i];
      var output = getFieldFromData(field, e.parameters);
      row.push(output);
      newHeader.push(field);
    }
    
    // more efficient to set values as [][] array than individually
    var nextRow = sheet.getLastRow() + 1; // get next row
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

    // update header row with any new data
    if (newHeader.length > oldHeader.length) {
      sheet.getRange(1, 1, 1, newHeader.length).setValues([newHeader]);
    }
  }
  catch(error) {
    Logger.log(error);
  }
  finally {
    lock.releaseLock();
    return;
  }

}

function getDataColumns(data) {
  return Object.keys(data).filter(function(column) {
    return !(column === 'formDataNameOrder' || column === 'formGoogleSheetName' || column === 'formGoogleSendEmail' || column === 'honeypot');
  });
}

function getFieldFromData(field, data) {
  var values = data[field] || '';
  var output = values.join ? values.join(', ') : values;
  return output;
}