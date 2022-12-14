var screensaver = (function () {
  // https://github.com/bryanbraun/after-dark-css
  // http://bryanbraun.github.io/after-dark-css/

  var timer,
    delay = 60000,
    id = "screensaver",
    el;

  function init() {
    var frag = document.createDocumentFragment();

    var container = document.createElement("div");
    container.id = "screensaver";
    container.className = "hide";
    frag.appendChild(container);

    var movingParts = [
      // First group of objects
      "toaster t1 p6",
      "toaster t3 p7",
      "toast tst1 p8",
      "toaster t3 p9",
      "toaster t1 p11",
      "toaster t3 p12",
      "toaster t2 p13",
      "toast tst3 p14",
      "toast tst2 p16",
      "toaster t1 p17",
      "toast tst2 p19",
      "toast tst3 p20",
      "toaster t2 p21",
      "toast tst1 p24",
      "toaster t1 p22",
      "toast tst2 p26",
      "toaster t1 p28",
      "toast tst2 p30",
      "toaster t2 p31",
      "toaster t1 p32",
      "toast tst3 p33",
      // wave 1 of (fast delayed) objects
      "toaster t4 p27",
      "toaster t4 p10",
      "toaster t4 p25",
      "toaster t4 p29",
      // wave 2 of (delayed) objects
      "toaster t5 p15",
      "toaster t5 p18",
      "toaster t5 p22",
      // wave 3 of (delayed) objects
      "toaster t6 p6",
      "toaster t6 p11",
      "toaster t6 p15",
      "toaster t6 p19",
      "toaster t6 p23",
      // wave 5 of (delayed) objects
      "toast tst4 p10",
      "toast tst4 p23",
      "toast tst4 p15",
      "toaster t7 p7",
      "toaster t7 p12",
      "toaster t7 p16",
      "toaster t7 p20",
      "toaster t7 p24",
      // wave 6 of (delayed) objects
      "toaster t8 p8",
      "toaster t8 p13",
      "toaster t8 p17",
      "toaster t8 p25",
      // wave 7 of (delayed) objects
      "toaster t9 p14",
      "toaster t9 p18",
      "toaster t9 p21",
      "toaster t9 p26",
    ];
    movingParts.forEach(function (c) {
      var div = document.createElement("div");
      div.setAttribute("class", c);
      container.appendChild(div);
    });

    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = [
      "#" + id + "{position:absolute;top:0;left:0;width:100%;height:100%}",
      "#" + id + ".hide{display:none}",
      ".toaster{position:absolute;width:64px;height:64px;background-image:url(data:image/gif;base64,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)}",
      ".toast{position:absolute;width:64px;height:64px;background-image:url(data:image/gif;base64,R0lGODlhQABAAKIGAP/MZsyZM5lmAGYzAMxmAP//mTMzMwAAACH5BAEAAAYALAAAAABAAEAAAAP/aLrc/jDKSau9OOvNu/9gKI5kaZ5oqq5s675wLM/0Atx1de97/hQFXgAw7PkMu6GSeCviZknmctk0voJVZWC7lfKsKSCWqBVwzVym92kCfsncLTpdpIJB4qQ2bu4H5nRTdxtuX3tnf38CfnFdVE4dY2RSe4t+l2iAdoMWklN8mH2iiY5eTmydQqZyioqWr4mapW8YWHVwpK+6urmOs18XnpSIoruLsY1rbwAWA7aryMXGx42Cp6gSBM6qjdJyltHWk8sFFQPaz5+xsMfg1ePLN+UU2uhjh6zhyMrxOwUCFQjUO3dvUjVWstL0IwJkAEB6As8RVLOnCSlEv24xCVJguYDDhxPORdQ2kWIWPoHUkOvo0SPIkPUGSjI1zJeTUxxbflyEQSJJAoWiwBnGT15DnQI+ZhDpc1sXbjTfHNW58+UFpjJVQb0GYCpSSx4EDiQZdKFRllRfhcCKtaxJeVQduuQ5QmTEpkGdTE36cScKu2OdSTqatHDVFR7FNgUqxrDcwnRdAL77ky/kyDBaih2ZlMAivz7s+jSMObRikkqPNEg8cIDqCDpfy55Nu7bt27hz697Nu7fvBwkAADs=)}",
      ".t1{-webkit-animation:flap .2s steps(4) infinite alternate,fly 10s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate,fly 10s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate,fly 10s linear infinite;-o-animation:flap .2s steps(4) infinite alternate,fly 10s linear infinite;animation:flap .2s steps(4) infinite alternate,fly 10s linear infinite}",
      ".t2{-webkit-animation:flap .2s steps(4) infinite alternate-reverse,fly 16s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate-reverse,fly 16s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate-reverse,fly 16s linear infinite;-o-animation:flap .2s steps(4) infinite alternate-reverse,fly 16s linear infinite;animation:flap .2s steps(4) infinite alternate-reverse,fly 16s linear infinite}",
      ".t3{-webkit-animation:flap .2s steps(4) infinite alternate,fly 24s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate,fly 24s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate,fly 24s linear infinite;-o-animation:flap .2s steps(4) infinite alternate,fly 24s linear infinite;animation:flap .2s steps(4) infinite alternate,fly 24s linear infinite}",
      ".t4{-webkit-animation:flap .2s steps(4) infinite alternate,fly 10s 5s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate,fly 10s 5s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate,fly 10s 5s linear infinite;-o-animation:flap .2s steps(4) infinite alternate,fly 10s 5s linear infinite;animation:flap .2s steps(4) infinite alternate,fly 10s 5s linear infinite}",
      ".t5{-webkit-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 4s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 4s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 4s linear infinite;-o-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 4s linear infinite;animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 4s linear infinite}",
      ".t6{-webkit-animation:flap .2s steps(4) infinite alternate,fly 24s 8s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate,fly 24s 8s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate,fly 24s 8s linear infinite;-o-animation:flap .2s steps(4) infinite alternate,fly 24s 8s linear infinite;animation:flap .2s steps(4) infinite alternate,fly 24s 8s linear infinite}",
      ".t7{-webkit-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 12s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 12s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 12s linear infinite;-o-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 12s linear infinite;animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 12s linear infinite}",
      ".t8{-webkit-animation:flap .2s steps(4) infinite alternate,fly 24s 16s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate,fly 24s 16s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate,fly 24s 16s linear infinite;-o-animation:flap .2s steps(4) infinite alternate,fly 24s 16s linear infinite;animation:flap .2s steps(4) infinite alternate,fly 24s 16s linear infinite}",
      ".t9{-webkit-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 20s linear infinite;-moz-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 20s linear infinite;-ms-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 20s linear infinite;-o-animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 20s linear infinite;animation:flap .2s steps(4) infinite alternate-reverse,fly 24s 20s linear infinite}",
      ".tst1{-webkit-animation:fly 10s linear infinite;-moz-animation:fly 10s linear infinite;-ms-animation:fly 10s linear infinite;-o-animation:fly 10s linear infinite;animation:fly 10s linear infinite}",
      ".tst2{-webkit-animation:fly 16s linear infinite;-moz-animation:fly 16s linear infinite;-ms-animation:fly 16s linear infinite;-o-animation:fly 16s linear infinite;animation:fly 16s linear infinite}",
      ".tst3{-webkit-animation:fly 24s linear infinite;-moz-animation:fly 24s linear infinite;-ms-animation:fly 24s linear infinite;-o-animation:fly 24s linear infinite;animation:fly 24s linear infinite}",
      ".tst4{-webkit-animation:fly 24s 12s linear infinite;-moz-animation:fly 24s 12s linear infinite;-ms-animation:fly 24s 12s linear infinite;-o-animation:fly 24s 12s linear infinite;animation:fly 24s 12s linear infinite}",
      ".p6{right:-2%;top:-10%}.p7{right:10%;top:-12%}.p8{right:20%;top:-18%}.p9{right:30%;top:-13%}.p10{right:40%;top:-17%}.p11{right:50%;top:-11%}.p12{right:60%;top:-20%}.p13{right:-10%;top:10%}.p14{right:-13%;top:20%}.p15{right:-17%;top:30%}.p16{right:-15%;top:50%}.p17{right:-20%;top:70%}.p18{right:0;top:-26%}.p19{right:10%;top:-20%}.p20{right:20%;top:-36%}.p21{right:30%;top:-24%}.p22{right:40%;top:-33%}.p23{right:60%;top:-40%}.p24{right:-26%;top:10%}.p25{right:-36%;top:30%}.p26{right:-29%;top:50%}.p27{right:0;top:-46%}.p28{right:10%;top:-56%}.p29{right:20%;top:-49%}.p30{right:30%;top:-60%}.p31{right:-46%;top:10%}.p32{right:-56%;top:20%}.p33{right:-49%;top:30%}",
      "@-webkit-keyframes flap{from{background-position:0}to{background-position:-256px}}",
      "@-moz-keyframes flap{from{background-position:0}to{background-position:-256px}}",
      "@-o-keyframes flap{from{background-position:0}to{background-position:-256px}}",
      "@keyframes flap{from{background-position:0}to{background-position:-256px}}",
      "@-webkit-keyframes fly{from{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-o-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}to{-webkit-transform:translate(-1600px, 1600px);-moz-transform:translate(-1600px, 1600px);-o-transform:translate(-1600px, 1600px);-ms-transform:translate(-1600px, 1600px);transform:translate(-1600px, 1600px)}}",
      "@-moz-keyframes fly{from{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-o-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}to{-webkit-transform:translate(-1600px, 1600px);-moz-transform:translate(-1600px, 1600px);-o-transform:translate(-1600px, 1600px);-ms-transform:translate(-1600px, 1600px);transform:translate(-1600px, 1600px)}}",
      "@-o-keyframes fly{from{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-o-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}to{-webkit-transform:translate(-1600px, 1600px);-moz-transform:translate(-1600px, 1600px);-o-transform:translate(-1600px, 1600px);-ms-transform:translate(-1600px, 1600px);transform:translate(-1600px, 1600px)}}",
      "@keyframes fly{from{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-o-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}to{-webkit-transform:translate(-1600px, 1600px);-moz-transform:translate(-1600px, 1600px);-o-transform:translate(-1600px, 1600px);-ms-transform:translate(-1600px, 1600px);transform:translate(-1600px, 1600px)}}",
    ].join("");
    frag.appendChild(style);
    document.body.appendChild(frag);

    el = document.getElementById(id);
    timer = setTimeout(trigger, delay);

    // reset on user interaction
    document.body.addEventListener("mousemove", reset, false);
    document.body.addEventListener("touchstart", reset, false);
  }

  function reset() {
    if (el) {
      el.className = "hide";
      clearTimeout(timer);
      timer = setTimeout(trigger, delay);
    }
  }

  function trigger() {
    if (el) {
      el.className = "";
    }
  }

  return {
    init: init,
    reset: reset,
    trigger: trigger,
  };
})();

window.addEventListener(
  "load",
  function () {
    screensaver.init();
  },
  false
);
