import { Controller } from "@hotwired/stimulus";

export class CarouselController extends Controller {
  static targets = ["carousel", "item"];

  static values = {
    normaliseHeight: { type: Boolean, default: false },
    activeClass: { type: String, default: "active" },
  };

  connect() {
    if (this.normaliseHeightValue) {
      this.normaliseHeight();
    }
  }

  normaliseHeight() {
    const height = this.height;

    this.items.forEach((el) => {
      el.style.height = `${height}px`;
    });
  }

  get height() {
    return Math.max(...this.heights);
  }

  get heights() {
    return this.items.map((el) => {
      let height = el.offsetHeight;

      if (!height) {
        el.classList.toggle(this.activeClass);
        height = el.offsetHeight;
        el.classList.toggle(this.activeClass);
      }

      return height;
    });
  }

  get carousel() {
    return this.carouselTarget;
  }

  get items() {
    return this.itemTargets;
  }

  get activeClass() {
    return this.activeClassValue;
  }
}
