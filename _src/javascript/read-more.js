import $ from "jquery";

const init = $(() => {
  const selector = "[data-read-more]";

  const data = [
    {
      title: "You'll never believe this weight loss trick",
      subtitle: "LifeHacks",
      image: "/assets/images/fakenews/fake1.jpg",
      link: "/portfolio/12wbt/",
    },
    {
      title: "Weird but true: How these Celebs look today",
      subtitle: "Unbelievable but true",
      image: "/assets/images/fakenews/fake2.jpg",
      link: "/portfolio/real-pet-matcher/",
    },
    {
      title: "Every Australian born after 1905 should read this",
      subtitle: "Tax for life",
      image: "/assets/images/fakenews/fake3.jpg",
      link: "/portfolio/outdoor-automated-proposal-platform/",
    },
    {
      title: "10 easy ways to silence a crying child",
      subtitle: "Parenting tips",
      image: "/assets/images/fakenews/fake4.jpg",
      link: "/portfolio/huggies/",
    },
    {
      title: "See who has been checking you out on Facebook",
      subtitle: "Modern Life",
      image: "/assets/images/fakenews/fake5.jpg",
      link: "/portfolio/plando/",
    },
    {
      title:
        "Hillary Clinton abducted my child and sacrificed it to an Alien master",
      subtitle: "OMG",
      image: "/assets/images/fakenews/fake6.jpg",
      link: "/portfolio/tribe-influencer-marketplace/",
    },
    {
      title: "Doctors Shocked By Mum's Trick To Lose 12 Kg In 2 Weeks",
      subtitle: "LifeHacks",
      image: "/assets/images/fakenews/fake7.jpg",
      link: "/portfolio/12wbt-dynamic-video/",
    },
    {
      title: "The one spy device every car owner should have",
      subtitle: "OMG",
      image: "/assets/images/fakenews/fake8.jpg",
      link: "/portfolio/project-summary-tool/",
    },
    {
      title: "You'll Never Believe What She Did Next!",
      subtitle: "OMG",
      image: "/assets/images/fakenews/fake9.jpg",
      link: "/portfolio/voome-weekly/",
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
    let html = "";

    $.each(articles, (index, article) => {
      html += `
        <div class="col-md-3">
          <a href="${article.link}" class="card read-more-card">
            <div class="card-img-wrapper">
              <img class="card-img-top" src="${article.image}" alt="${article.title}" />
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
