import { Controller } from "@hotwired/stimulus";

export class AssessmentController extends Controller {
  static targets = [
    "answer",
    "answersInput",
    "answerSection",
    "emailInput",
    "form",
    "invalidEmail",
    "question",
    "response",
    // "results",
    "resume",
    "section",
    "submitButton"
  ];

  static values = {
    sections: {type: Array, default: ["current", "your-team", "owner", "technology"]}
  }

  connect() {
    if (location.pathname === "/assessment/") {
      this.checkIncomplete();
    } else if (location.pathname === "/assessment/submit") {
      const answers = this.getAnswers();

      if (Object.entries(answers).length > 0) {
        this.answersInputTarget.value = JSON.stringify(this.getAnswers());
      } else {
        this.navigateTo();
      }
    } else if (location.pathname === "/assessment/results") {
      this.calculate();
    } else {
      this.setActiveSections();
      this.setActiveQuestions();
      this.setActiveAnswer();
    }
  }

  calculate() {
    const params = this.getParams();
    const responses = params.has('r') ? decodeURIComponent(params.get('r')) : {};
    // to do: calculate & insert data into html table
  }

  checkIncomplete() {
    const answers = this.getAnswers();

    if (Object.entries(answers).length > 0) {
      this.resumeTarget.classList.toggle("d-none");
    }
  }
  
  clearAnswers() {
    localStorage.removeItem("answers");
  }

  clearErrors() {
    if (!this.invalidEmailTarget.classList.contains("d-none")) {
      this.invalidEmailTarget.classList.toggle("d-none")
    }
  }

  download() {
    window.print();
  }

  getAnswers() {
    const answers = localStorage.getItem("answers");
    return answers === 'null' || answers === null ? {} : JSON.parse(answers);
  }

  getFormData() {
    const elements = this.formTarget.elements;
    var honeypot;
    var formData = {};
    var email = "";

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

      if (elements[name].name === "email") {
        email = formData[name];
      }

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
    formData.formGoogleSendEmail = email;

    return {data: formData, honeypot: honeypot};
  }

  getParams() {
    return new Map(location.search.slice(1).split('&').map(kv => kv.split('=')));
  }
  
  getQuestionIndexFromUrlParams() {
    const params = this.getParams();
    return params.has('q') ? parseInt(params.get('q')) - 1 : 0;
  }

  navigateTo(href = '') {
    location.href = `/assessment/${href}`;
  }

  submit() {
    if (this.validateEmail() === false) {
      this.invalidEmailTarget.classList.toggle("d-none");
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
        self.formTarget.classList.toggle("d-none");
        self.responseTarget.classList.toggle("d-none");
        self.responseTarget.classList.toggle("d-flex");
      }
    };

    var encoded = Object.keys(formData.data).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(formData.data[k]);
    }).join('&');

    xhr.send(encoded);
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
    if (event.params.answer) {
      this.setAnswer(event.params.answer);
    }

    this.navigateTo(event.params.href);
  }

  setActiveAnswer() {
    const answers = this.getAnswers();
    const currentQuestionIndex = this.getQuestionIndexFromUrlParams();

    if (Object.entries(answers).length > 0) {
      for (const i in this.sectionsValue) {
        if (
          location.pathname.includes(this.sectionsValue[i]) && 
          answers[this.sectionsValue[i]] && 
          answers[this.sectionsValue[i]][currentQuestionIndex]) {
          // The answerIndex constant doesn't make sense?
          // See comment on saved data format in setAnswer()
          const answerIndex = answers[this.sectionsValue[i]][currentQuestionIndex][0] - 1;

          this.answerTargets[answerIndex].classList.toggle("border-light");
          this.answerTargets[answerIndex].classList.toggle("active-purple");
        }
      }
    }
  }

  setActiveQuestions() {
    const index = this.getQuestionIndexFromUrlParams();

    this.answerSectionTargets[index].classList.toggle("d-none");
    this.questionTargets[index].classList.toggle("border-light");
    this.questionTargets[index].classList.toggle("active-purple");

    for (const i in this.questionTargets) {
      if (i > index) {
        this.questionTargets[i].setAttribute("disabled", true);
        this.questionTargets[i].classList.toggle("opacity-25");
      }
    }
  }
  
  setActiveSections() {
    const answers = this.getAnswers();

    if (Object.entries(answers).length > 0) {
      const sections = Object.keys(answers);
    
      for (const i in this.sectionsValue) {
        const slug = this.sectionsValue[i];

        if (location.pathname.includes(slug) || sections.find(section => section === slug)) {
          this.sectionTargets[i].removeAttribute("disabled");
          this.sectionTargets[i].classList.remove("opacity-25");
        }
      }
    }
  }

  setAnswer(data) {
    // Data format: "section-slug,question-number,answer-number,answer-weight"
    const answer = data.split(',');
    var answers = this.getAnswers();

    if (answers[answer[0]]) {
      if (answers[answer[0]][answer[1] - 1]) {
        answers[answer[0]][answer[1] - 1] = [parseInt(answer[2]), parseInt(answer[3])];
      } else {
        answers[answer[0]].push([parseInt(answer[2]), parseInt(answer[3])]);
      }
    } else {
      answers[answer[0]] = [[parseInt(answer[2]), parseInt(answer[3])]];
    }

    // Saved data format: {"sectionName": [["answerNumber", "answerWeightNumber"], ["answerNumber", "answerWeightNumber"]]}
    // The answer positions in the setionName array correspond to the question number
    localStorage.setItem("answers", JSON.stringify(answers));
  }

  validateEmail() {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexp.test(this.emailInputTarget.value.toLowerCase());
  }
}
