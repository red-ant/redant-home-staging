import { Controller } from "@hotwired/stimulus";
import { SwiperOptions } from "swiper";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export class Carousel extends Controller {
  static targets = ["container", "item"];

  static values = {
    options: Object,
  };

  connect() {
    this.setContainerClass();
    this.setItemsClass();

    this.swiper = new Swiper(this.element, {
      ...this.defaultOptions,
      ...this.optionsValue,
    });
  }

  disconnect() {
    this.swiper.destroy();
    this.swiper = undefined;
  }

  setContainerClass() {
    this.container.classList.add("swiper-wrapper");
  }

  setItemsClass() {
    this.items.forEach((el) => el.classList.add("swiper-slide"));
  }

  get defaultOptions() {
    const target = this.element;

    return {
      onAny(eventName, ...detail) {
        const event = new CustomEvent(`carousel:${eventName}`, { detail });
        target.dispatchEvent(event);
      },
    };
  }

  get container() {
    return this.containerTarget;
  }

  get items() {
    if (!this.itemTargets.length) {
      throw new Error(
        `Missing target elements "item" for "carousel" controller`
      );
    }

    return this.itemTargets;
  }
}
