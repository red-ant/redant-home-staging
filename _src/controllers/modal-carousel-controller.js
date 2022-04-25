import { Controller } from "@hotwired/stimulus";
import Carousel from "bootstrap/js/dist/carousel.js";

export class ModalCarouselController extends Controller {
  static targets = ["modal", "carousel"];

  connect() {
    if (this.modal && this.carousel) {
      this.modal.addEventListener("show.bs.modal", (event) =>
        this.onShow(event)
      );
    }
  }

  onShow(event) {
    const { bsSlideTo } = event.relatedTarget.dataset;

    if (bsSlideTo) {
      Carousel.getInstance(this.carousel).to(bsSlideTo);
    }
  }

  get modal() {
    return this.modalTarget;
  }

  get carousel() {
    return this.carouselTarget;
  }
}
