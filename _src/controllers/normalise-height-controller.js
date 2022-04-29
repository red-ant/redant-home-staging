import { Controller } from "@hotwired/stimulus";

export class NormaliseHeightController extends Controller {
  static targets = ["item"];
  static values = {
    breakpoint: { type: Number, default: 768 },
  };

  boundSetHeights = () => this.setHeights();

  connect() {
    if (this.items.length) {
      window.addEventListener("resize", this.boundSetHeights);
      window.dispatchEvent(new Event("resize"));
    }
  }

  disconnect() {
    window.removeEventListener("resize", this.boundSetHeights);
  }

  setHeights() {
    const height = this.height;
    this.dispatch(height);
    this.items.forEach((el) => this.setHeight(el, height));
  }

  setHeight(el, height) {
    if (window.innerWidth < this.breakpoint) {
      el.style.height = null;
    } else {
      el.style.height = `${height}px`;
    }
  }

  dispatch(height) {
    const options = { detail: { height } };
    this.element.dispatchEvent(new CustomEvent("normalise:height", options));
  }

  get breakpoint() {
    return this.breakpointValue;
  }

  get height() {
    return Math.max(...this.heights);
  }

  get heights() {
    return this.items.map((el) => el.offsetHeight);
  }

  get items() {
    return this.itemTargets;
  }
}
