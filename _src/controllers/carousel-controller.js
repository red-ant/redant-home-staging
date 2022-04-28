import { Controller } from "@hotwired/stimulus";
import Carousel from "stimulus-carousel";
import { random } from "../utils";
import "swiper/css/bundle";

export class CarouselController extends Carousel {
  static targets = ["slide"];

  static values = {
    random: { type: Boolean, default: false },
    count: { type: Number, default: 0 },
  };

  connect() {
    if (this.randomValue) {
      this.randomise();
    }

    if (this.slides.length > this.countValue) {
      this.removeSlides();
    }

    super.connect();
  }

  randomise() {
    const slides = [...random(this.slides)];

    this.slides.forEach((item, i) => {
      item.replaceWith(slides[i]);
    });
  }

  removeSlides() {
    this.slides.forEach((item, i) => {
      if (i >= this.countValue) {
        item.remove();
      }
    });
  }

  get defaultOptions() {
    return {
      speed: 750,
      spaceBetween: 35,
      slidesPerView: 1.7,
      centeredSlides: true,
      centeredSlidesBounds: true,
      loop: true,
      autoplay: true,
    }
  }

  get slides() {
    return this.slideTargets;
  }
}
