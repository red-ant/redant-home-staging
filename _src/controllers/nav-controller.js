import { Controller } from "@hotwired/stimulus";

export class NavController extends Controller {
  static targets = ["item"];

  static values = {
    activeClass: { type: String, default: "active" },
  };

  connect() {
    if (!this.items) return;
    this.toggleActive();
  }

  toggleActive() {
    this.items
      .filter(this.isActive.bind(this))
      .forEach(this.setActive.bind(this));
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

  get items() {
    return this.itemTargets;
  }
}
