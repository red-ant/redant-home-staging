import AOS from "aos";

window.addEventListener("load", () => {
  AOS.init({
    dataAosAnchorPlacement: "center-bottom",
    easing: "ease-in-out",
    duration: 900,
  });
});

window.addEventListener("resize", () => {
  AOS.refresh();
});
