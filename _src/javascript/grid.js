import $ from "jquery";
import Macy from "macy";

const init = $(function () {
  function init() {
    if ($("#macy-container").length) {
      var columns = $("#macy-container").data("columns");
      var columnsSmall = $("#macy-container").data("columns-small");
      Macy({
        container: "#macy-container",
        columns: columns,
        margin: 20,
        breakAt: {
          768: {
            columns: parseInt(columnsSmall),
          },
          576: {
            columns: 1,
          },
        },
      });
    }
  }

  init();
});

export default init;
