import AOS from "aos";
import "aos/src/sass/aos.scss";

function onLoad() {
  AOS.init({
    dataAosAnchorPlacement: "center-bottom",
    easing: "ease-in-out",
    duration: 900,
  });
}

function onResize() {
  AOS.refresh();
}

window.addEventListener("load", onLoad);
window.addEventListener("resize", onResize);
