import { Application } from "@hotwired/stimulus";
window.Stimulus = Application.start();

import Reveal from "stimulus-reveal-controller";
Stimulus.register("reveal", Reveal);

import ScrollTo from "stimulus-scroll-to";
Stimulus.register("scroll-to", ScrollTo);

import { FakeNewsController } from "./fake-news-controller";
Stimulus.register("fake-news", FakeNewsController);

import { MacyController } from "./macy-controller";
Stimulus.register("macy", MacyController);

import { NavController } from "./nav-controller";
Stimulus.register("nav", NavController);

import { SlickController } from "./slick-controller";
Stimulus.register("slick", SlickController);
