import { Controller } from "@hotwired/stimulus";

export class AssessmentController extends Controller {
  static targets = [ "section", "question", "answer", "resume" ];

  connect() {
    this.checkIncomplete();
    this.setActiveQuestion();
  }

  setActiveQuestion() {
    const params = this.getParams();
    const question = params.has('q') ? parseInt(params.get('q')) - 1 : 0;

    this.questionTargets[question].classList.remove("d-none");
  }
  
  calculate() {}

  checkIncomplete() {
    const answers = this.getAnswers();

    if (answers !== null) {
      // this.resumeTarget.classList.add("show");
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
    // to do: find the last answer and 
    // location.href = /assessment/section?q=answer;
  }

  select(event) {
    this.setAnswer(event.params.answer);
    location.href = event.target.href;
  }

  setAnswer(data) {
    // data format: "section-slug,question-number,answer-number,answer-weight"
    var answer = data.split(',');
    var answers = this.getAnswers();

    if (answers[answer[0]]) {
      if (answers[answer[0]][answer[1]]) {
        answers[answer[0]][answer[1]] = [answer[2], answer[3]];
      } else {
        answers[answer[0]].push([answer[2], answer[3]]);
      }
    } else {
      answers[answer[0]] = [[answer[2], answer[3]]];
    }

    localStorage.setItem("answers", JSON.stringify(answers));
  }
}
