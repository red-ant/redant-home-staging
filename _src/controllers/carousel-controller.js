import { Controller } from "@hotwired/stimulus";

export class CarouselController extends Controller {
  static targets = ["carousel", "inner", "item"];

  static values = {
    activeClass: { type: String, default: "active" },
    isNormalised: { type: Boolean, default: false },
    slides: { type: Number, default: 0 },
  };

  connect() {
    if (this.isNormalised) {
      this.normalise();
    }

    if (this.isMultiple) {
      this.multiple();
    }
  }

  normalise() {
    const height = this.height;

    this.items.forEach((el) => {
      el.style.height = `${height}px`;
    });
  }

  multiple() {
    this.items.forEach((el) => {
      let next = el.nextElementSibling;

      for (let i = 1; i < this.slidesValue; i++) {
        if (!next) {
          next = this.items[0];
        }

        const cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);

        next = next.nextElementSibling;
      }
    });
  }

  get isMultiple() {
    return this.slidesValue > 1;
  }

  get isNormalised() {
    return this.isNormalisedValue;
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

  get inner() {
    return this.innerTarget;
  }

  get items() {
    return this.itemTargets;
  }

  get activeClass() {
    return this.activeClassValue;
  }
}
