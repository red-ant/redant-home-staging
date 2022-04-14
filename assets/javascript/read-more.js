import $ from "jquery";

import fake1 from "../images/fakenews/fake1.jpg";
import fake2 from "../images/fakenews/fake2.jpg";
import fake3 from "../images/fakenews/fake3.jpg";
import fake4 from "../images/fakenews/fake4.jpg";
import fake5 from "../images/fakenews/fake5.jpg";
import fake6 from "../images/fakenews/fake6.jpg";
import fake7 from "../images/fakenews/fake7.jpg";
import fake8 from "../images/fakenews/fake8.jpg";
import fake9 from "../images/fakenews/fake9.jpg";

const init = $(() => {
  const selector = `[data-read-more]`;

  const data = [
    {
      title: `You'll never believe this weight loss trick`,
      subtitle: `LifeHacks`,
      image: fake1,
      link: `/portfolio/12wbt/`,
    },
    {
      title: `Weird but true: How these Celebs look today`,
      subtitle: `Unbelievable but true`,
      image: fake2,
      link: `/portfolio/real-pet-matcher/`,
    },
    {
      title: `Every Australian born after 1905 should read this`,
      subtitle: `Tax for life`,
      image: fake3,
      link: `/portfolio/outdoor-automated-proposal-platform/`,
    },
    {
      title: `10 easy ways to silence a crying child`,
      subtitle: `Parenting tips`,
      image: fake4,
      link: `/portfolio/huggies/`,
    },
    {
      title: `See who has been checking you out on Facebook`,
      subtitle: `Modern Life`,
      image: fake5,
      link: `/portfolio/plando/`,
    },
    {
      title: `Hillary Clinton abducted my child and sacrificed it to an Alien master`,
      subtitle: `OMG`,
      image: fake6,
      link: `/portfolio/tribe-influencer-marketplace//`,
    },
    {
      title: `Doctors Shocked By Mum's Trick To Lose 12 Kg In 2 Weeks`,
      subtitle: `LifeHacks`,
      image: fake7,
      link: `/portfolio/12wbt-dynamic-video/`,
    },
    {
      title: `The one spy device every car owner should have`,
      subtitle: `OMG`,
      image: fake8,
      link: `/portfolio/project-summary-tool/`,
    },
    {
      title: `You'll Never Believe What She Did Next!`,
      subtitle: `OMG`,
      image: fake9,
      link: `/portfolio/voome-weekly/`,
    },
  ];

  function getUnique(items, count) {
    var tmp = items.slice(items);
    var ret = [];

    for (var i = 0; i < count; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      ret.push(removed[0]);
    }

    return ret;
  }

  function articlesToHTML(articles) {
    let html = ``;

    $.each(articles, (index, article) => {
      html += `
        <div class="col-md-3">
          <a href="${article.link}" class="card read-more-card">
            <div class="card-img-wrapper">
              <img class="card-img-top" src="/assets/bundle/${article.image}" alt="${article.title}" />
            </div>
            <div class="card-block py-3">
              <h4 class="card-title">${article.title}</h4>
              <p class="card-text">${article.subtitle}</p>
            </div>
          </a>
        </div>
      `;
    });

    return `
      <div class="container">
        <div class="row">
          ${html}
        </div>
      </div>
    `;
  }

  function init() {
    const $containers = $(selector);

    $containers.each((index, container) => {
      const articles = getUnique(data, 4);
      $(container).html(articlesToHTML(articles));
    });
  }

  init();
});

export default init;
