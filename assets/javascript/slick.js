import $ from "jquery";
import "slick-carousel";

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
