# Red Ant Website

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The Red Ant Website based on [Jekyll + Webpack](https://github.com/red-ant/jekyll-webpack).

The app uses a standard Jekyll structure with javascript compiled via esbuild.

## Quick start with yarn :runner:

Ensure ruby & node are installed with the .ruby-version & .node-version included, and preferably have yarn installed otherwise use npm.

```
cd ~/src
git clone git@github.com:red-ant/redant-home.git
cd redant-home
bundle install && yarn install
yarn dev
open http://localhost:4000
```

Alternatively you can use the supplied docker-compose to get up and running, pass `--build` on the first run:

```
docker-compose up
```

## Updating portfolio order

In the file `/_data/portfolio.json` you can change the order of the projects shown in the portfolio page by changing the order of the slugs.

```
{
  "order": [
    "page-slug-1",
    "page-slug-2",
    "page-slug-3",
    "page-slug-4"
  ]
}
```

## Updating content

Use forestry.io -> https://redant.com.au/admin

**Project image sizes:** Project images for desktop on the project detail header might vary in size. The desktop images are recalculated to 45.92% of the original image height in pixels and the default size is 729px. If an image is smaller than this default size, then you will have to add the calculated pixel height (to be supplied by Kap) in the project markdown file under the parameter `hero.desktop.height`.

Generally all images for posts / pages should be uploaded and handled through the forestry cms. Uploaded images live in `/assets/uploads`.

### Forestry

Forestry front matters and settings are in the `.forestry` folder.
Forestry uses the `yarn preview` & `yarn build` scripts.

All forestry page asset uploads are set to go into the `/assets/uploads` folder.

## Release / Deploy

A github workflow will compile and deploy to `gh_pages` when updates are pushed to `master`.
