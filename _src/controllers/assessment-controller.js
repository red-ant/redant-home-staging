import { Controller } from "@hotwired/stimulus";

export class AssessmentController extends Controller {
  static targets = [
    "answer",
    "contact",
    "email",
    "question",
    "results",
    "resume",
    "section",
    "section-title"
  ];

  connect() {
    if (location.pathname === "/assessment/") {
      this.checkIncomplete();
    } else {
      // this.setActiveSection();
      this.setActiveQuestion();
    }
  }

  // setActiveSection() {
  //   // this.sectionTarget.classList.add("border-gradient");
  // }

  setActiveQuestion() {
    const params = this.getParams();
    const question = params.has('q') ? parseInt(params.get('q')) - 1 : 0;

    this.questionTargets[question].classList.remove("d-none");
  }

  submit() {
    // to do: capture data and email address
  }
  
  calculate() {
    // to do: calculate, insert data into html table
    this.clearAnswers();
  }

  download() {
    window.print();
  }

  checkIncomplete() {
    const answers = this.getAnswers();

    if (answers !== null) {
      this.resumeTarget.classList.remove("d-none");
    }
  }
  
  clearAnswers() {
    localStorage.removeItem("answers");
  }

  getAnswers() {
    const answers = localStorage.getItem("answers");
    return answers === 'null' || answers === null ? {} : JSON.parse(answers);
  }

  getParams() {
    return new Map(location.search.slice(1).split('&').map(kv => kv.split('=')));
  }

  resume() {
    const answers = this.getAnswers();
    const section = Object.keys(answers)[Object.keys(answers).length - 1];
    const question = answers[section].length;
    
    location.href += `/${section}?q=${question}`;
  }

  select(event) {
    this.setAnswer(event.params.answer);
    location.href = event.params.href;
  }

  setAnswer(data) {
    // data format: "section-slug,question-number,answer-number,answer-weight"
    var answer = data.split(',');
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
}
