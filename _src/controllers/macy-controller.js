import { Controller } from "@hotwired/stimulus";
import Macy from "macy";

export class MacyController extends Controller {
  static values = {
    columnsLg: { type: Number, default: 3 },
    columnsMd: { type: Number, default: 2 },
    columnsSm: { type: Number, default: 1 },
    margin: { type: Number, default: 20 },
  };

  connect() {
    this.element.classList.add("macy-container");
    Macy(this.config);
  }

  get config() {
    return {
      container: this.element,
      columns: this.columnsLg,
      margin: this.margin,
      breakAt: {
        768: { columns: this.columnsMd },
        576: { columns: this.columnsSm },
      },
    };
  }

  get columnsLg() {
    return this.columnsLgValue;
  }

  get columnsMd() {
    return this.columnsMdValue;
  }

  get columnsSm() {
    return this.columnsSmValue;
  }

  get margin() {
    return this.marginValue;
  }
}
