import { Controller } from "@hotwired/stimulus";

export class AssessmentController extends Controller {
  static targets = [
    "answersInput",
    "emailInput",
    "form",
    "invalidEmail",
    "question",
    "response",
    "results",
    "resume",
    "section",
    "sectionTile",
    "submitButton"
  ];

  static values = {
    answers: Object
  }

  connect() {
    if (location.pathname === "/assessment/") {
      this.checkIncomplete();
    } else if (location.pathname === "/assessment/submit") {
      this.answersInputTarget.value = JSON.stringify(this.getAnswers());
    } else if (location.pathname === "/assessment/result") {
      // to do: check to see the verified param exists and show results
      this.calculate();
    } else {
      this.setActiveQuestion();
    }
  }

  calculate() {
    // to do: calculate, insert data into html table
    this.clearAnswers();
  }

  checkIncomplete() {
    const answers = this.getAnswers();

    if (Object.entries(answers).length > 0) {
      this.resumeTarget.classList.remove("d-none");
    }
  }
  
  clearAnswers() {
    localStorage.removeItem("answers");
  }

  clearErrors() {
    if (!this.invalidEmailTarget.classList.contains("d-none")) {
      this.invalidEmailTarget.classList.add("d-none")
    }
  }

  download() {
    window.print();
  }

  getAnswers() {
    const answers = localStorage.getItem("answers");
    return answers === 'null' || answers === null ? {} : JSON.parse(answers);
  }

  getParams() {
    return new Map(location.search.slice(1).split('&').map(kv => kv.split('=')));
  }

  getFormData() {
    const elements = this.formTarget.elements;
    var honeypot;
    var formData = {};

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    fields.forEach(function(name) {
      const element = elements[name];
      formData[name] = element.value;

      if (element.length) {
        var data = [];
        
        for (var i = 0; i < element.length; i++) {
          const item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = this.formTarget.dataset.sheet || "responses";
    formData.formGoogleSendEmail = this.formTarget.dataset.email || "";

    return {data: formData, honeypot: honeypot};
  }

  submit() {
    if (this.validateEmail() === false) {
      this.invalidEmailTarget.classList.remove("d-none");
      return false;
    }

    const formData = this.getFormData();
    const url = this.formTarget.action;
    const self = this;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    this.submitButtonTarget.setAttribute('disabled', '');

    var xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        self.formTarget.reset();
        self.clearAnswers();
        self.formTarget.classList.add("d-none");
        self.responseTarget.classList.remove("d-none");
      }
    };

    var encoded = Object.keys(formData.data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(formData.data[k]);
    }).join('&');

    xhr.send(encoded);
  }

  readyStateChange(xhr) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      this.formTarget.reset();
      this.formTarget.classList.add("d-none");
      this.responseTarget.classList.remove("d-none");
    }
  }

  resume() {
    const answers = this.getAnswers();
    
    if (Object.entries(answers).length > 0) {
      const section = Object.keys(answers)[Object.keys(answers).length - 1];
      const question = answers[section].length;
      location.href += `/${section}?q=${question}`;
    }
  }

  select(event) {
    this.setAnswer(event.params.answer);
    location.href = `/assessment/${event.params.href}`;
  }

  setActiveQuestion() {
    const params = this.getParams();
    const question = params.has('q') ? parseInt(params.get('q')) - 1 : 0;

    this.questionTargets[question].classList.remove("d-none");
  }

  setAnswer(data) {
    // data format: "section-slug,question-number,answer-number,answer-weight"
    const answer = data.split(',');
    var answers = this.getAnswers();

    if (answers[answer[0]]) {
      if (answers[answer[0]][answer[1] - 1]) {
        answers[answer[0]][answer[1] - 1] = [answer[2], answer[3]];
      } else {
        answers[answer[0]].push([answer[2], answer[3]]);
      }
    } else {
      answers[answer[0]] = [[answer[2], answer[3]]];
    }

    localStorage.setItem("answers", JSON.stringify(answers));
  }

  validateEmail() {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexp.test(this.emailInputTarget.value.toLowerCase());
  }
}
