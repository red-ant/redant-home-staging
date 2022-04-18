import { Controller } from "@hotwired/stimulus";
import "slick-carousel";

export class SlickController extends Controller {
  static values = {
    style: { type: String, default: "testimonal" },
  };

  static targets = ["slider"];

  connect() {
    this.$el.slick(this.config).addClass(`slick--${this.style}`);
  }

  slideTo(event) {
    this.$el
      .slick("slickGoTo", event.currentTarget.dataset.slickIndex || 0)
      .resize();
  }

  get $el() {
    if (this.hasSliderTarget) {
      return $(this.sliderTarget);
    } else {
      return $(this.element);
    }
  }

  get style() {
    return this.styleValue;
  }

  get config() {
    return this[this.style];
  }

  get gallery() {
    return {
      dots: false,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 4000,
      initialSlide: 0,
      slidesToScroll: 1,
    };
  }

  get testimonal() {
    return {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
      slidesToShow: 1,
    };
  }
}
