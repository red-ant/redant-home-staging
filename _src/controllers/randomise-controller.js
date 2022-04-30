import { Controller } from "@hotwired/stimulus";
import { random } from "../utils";

export class RandomiseController extends Controller {
  static targets = ["item"];

  static values = {
    count: { type: Number, default: 0 },
  };

  connect() {
    if (!this.count) return;
    random(this.items).map(this.remove.bind(this));
  }

  remove(item, i) {
    if (i < this.count) return;
    item.remove();
  }

  get count() {
    return this.countValue;
  }

  get items() {
    return this.itemTargets;
  }
}
