import { Controller } from "@hotwired/stimulus";
import { random } from "../utils";

export class RandomController extends Controller {
  static targets = ["item"];

  static values = {
    count: { type: Number, default: 0 },
    updateKey: String,
  };

  connect() {
    if (this.countValue > 0) {
      this.randomise();
    }

    if (this.updateKey) {
      this.update();
    }
  }

  randomise() {
    const items = random(this.items).slice(0, this.count);
    const parent = this.items[0].parentElement;

    this.items.forEach((item, i) => {
      const node = items[i];

      if (node) {
        parent.append(node.cloneNode(true));
      }

      item.remove();
    });
  }

  update() {
    const els = document.querySelectorAll(`[data-random-${this.updateKey}]`);

    for (let el of els) {
      el[this.updateKey] = el.dataset[this.dataSetKey]
    }
  }

  get count() {
    return this.countValue;
  }

  get dataSetKey() {
    return `random${this.updateKey.replace(/\w{1}/, (w) => w.toUpperCase())}`;
  }

  get items() {
    return this.itemTargets;
  }

  get updateKey() {
    return this.updateKeyValue;
  }
}
