import { Controller } from "@hotwired/stimulus";

export class AssessmentController extends Controller {
  static targets = [ "section", "question", "content" ];

  connect() {
    this.setActiveSection();
    this.setActiveQuestion();
  }

  setActiveSection() {
    // this.section.classList.add("active");
  }

  setActiveQuestion() {
    // this.questions.forEach((el) => el.classList.add("active"));
  }

  select(question) {
    // this.outputTarget.textContent =
    //   `Hello, ${this.nameTarget.value}!`
  }
}
