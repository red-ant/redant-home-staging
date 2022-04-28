import { Controller } from "@hotwired/stimulus";
import { random } from "../utils";

export class CarouselController extends Controller {
  static targets = ["carousel", "inner", "item"];

  static values = {
    activeClass: { type: String, default: "active" },
    activateFirst: { type: Boolean, default: false },
    isNormalised: { type: Boolean, default: false },
    randomSlides: { type: Number, default: 0 },
    slides: { type: Number, default: 0 },
  };

  slides;

  connect() {
    if (this.isNormalised) {
      this.normalise();
    }

    if (this.isMultiple) {
      this.multiple();
    }

    if (this.activateFirstValue) {
      this.activateFirst();
    }
  }

  normalise() {
    const height = this.height;

    this.items.forEach((el) => {
      el.style.height = `${height}px`;
    });
  }

  activateFirst() {
    this.items[0].classList.add(this.activeClass);
    this.element.classList.remove("d-none");
  }

  multiple() {
    const slides = this.items;

    slides.forEach((el) => {
      let next = el.nextElementSibling;

      for (let i = 1; i < this.slidesValue; i++) {
        if (!next) {
          next = slides[0];
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
    if (this.slides) {
      return this.slides;
    }

    if (this.randomSlides > 0) {
      this.slides = random(this.itemTargets).slice(0, this.randomSlides);

      // remove unslected items
      this.itemTargets.forEach((item) => {
        if (!this.slides.includes(item)) {
          item.remove();
        }
      });

      return this.slides;
    }

    return this.itemTargets;
  }

  get activeClass() {
    return this.activeClassValue;
  }

  get randomSlides() {
    return this.randomSlidesValue;
  }
}
