import { Controller } from "@hotwired/stimulus";

export class Image extends Controller {
  connect() {
    this.element.src = this.src;
  }

  get src() {
    return this.element.dataset.imageSrc;
  }
}
