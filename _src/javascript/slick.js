import $ from "jquery";
import "slick-carousel";

// Compiles into bundle/index.css
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const init = $(function () {
  let $slick = $(".slick-redant");

  if ($slick.length) {
    $slick.slick({
      lazyLoad: "ondemand",
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
      slidesToShow: 1,
    });
  }
});

export default init;
