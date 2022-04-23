# Red Ant Website

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The Red Ant Website - https://redant.com.au/

## Quick Start :runner:

Ensure ruby & node are installed using the .ruby-version & .node-version included, and preferably yarn otherwise use npm.

    $ git clone git@github.com:red-ant/redant-home.git
    $ cd redant-home
    $ bundle install && yarn install
    $ bundle exec jekyll serve --livereload

View the dev site at http://localhost:4000

The dev site can also be run using:

    $ yarn dev

Alternatively use the supplied docker-compose config:

    $ docker-compose up

Javascript and css is built on each build using [esbuild](https://esbuild.github.io/).

## Updating Portfolio Order

In the file `/_data/portfolio.json` you can change the order of the projects shown in the portfolio page by changing the order of the slugs.

    {
      "order": [
        "page-slug-1",
        "page-slug-2",
        "page-slug-3",
        "page-slug-4"
      ]
    }

## Updating Content

Use forestry.io -> https://redant.com.au/admin

**Project image sizes:** Project images for desktop on the project detail header might vary in size. The desktop images are recalculated to 45.92% of the original image height in pixels and the default size is 729px. If an image is smaller than this default size, then you will have to add the calculated pixel height (to be supplied by Kap) in the project markdown file under the parameter `hero.desktop.height`.

Generally all images for posts / pages should be uploaded and handled through the Forestry CMS. Uploaded images live in `/assets/uploads`.

Forestry config for front matters and settings are located in the `.forestry` folder.

Files uploaded through Forestry are set to go into the `/assets/uploads` folder.

## Release / Deploy

A github workflow will compile and deploy to `gh_pages` when updates are pushed to `master`.
