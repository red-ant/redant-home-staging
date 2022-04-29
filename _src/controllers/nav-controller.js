import { Controller } from "@hotwired/stimulus";

export class NavController extends Controller {
  static values = {
    activeClass: { type: String, default: "active" },
  };

  static targets = ["link"];

  connect() {
    this.toggleActive();
  }

  toggleActive() {
    this.links
      .filter((link) => this.isActive(link))
      .forEach((link) => this.setActive(link));
  }

  isActive(link) {
    const { pathname } = window.location;

    return link.pathname === "/"
      ? pathname === "/"
      : pathname.indexOf(link.pathname) >= 0;
  }

  setActive(link) {
    link.classList.add(this.activeClass);
  }

  setHeight(event) {
    const { height } = event.detail || {};

    if (height) {
      this.element.style.height = `${height}px`;
    }
  }

  get activeClass() {
    return this.activeClassValue;
  }

  get links() {
    return this.linkTargets || [];
  }
}
