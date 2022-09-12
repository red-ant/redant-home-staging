---
layout: project
theme: plando
slug: plando
title: Plando
tagline: A career management platform
description: LinkedIn is for what you’ve done. PlanDo is for managing what you want
  to be. We’ve been helping Plando build a career management platform that gives individuals
  the tools to manage their own careers.
project_url: https://plando.com
client: PlanDo
project_date: 2013-2019
technologies:
- AngularJS
- Grape Ruby API
team_size: ''
lines_of_code: ''
images:
- type: gallery
  path: "/assets/images/projects/plando/plando-1.jpg"
- type: mobile
  path: "/assets/images/projects/plando/plando-hero-mobile.jpg"
- type: desktop
  path: "/assets/images/projects/plando/plando-hero-desktop.jpg"
  height: 488

---
## Project Description

We've been helping Plando build a career management platform that will shakeup the world of employment and careers by giving individuals the tools to manage their own careers. Traditionally employees have been reliant on their employer's HR practices and tools to successfully map their career path. Plando changes all this. The project has been chock full of innovative ideas and code, with the whole project being built on the Grape API micro-framework

PlanDo are accommodating for and promoting the shift in the professional workplace towards career mobility by building a platform which will allow for individuals to manage their own careers. That means that instead of an employee being reliant on their employer’s HR practices and tools, they will be able to take control of their performance review cycles and independently map out their career path both within an organisation and beyond.

At the same time PlanDo is aiming to provide tools for organisations to use their platform to better interact with their employees, adding valuable feedback systems to existing HR management processes.

PlanDo has provided some serious challenges for Red Ant. The PlanDo team know the human resources domain well and have applied themselves to thorough analysis of the state of existing offerings. That means we ended up with lots and lots and LOTS of information, processes and tools to interpret and deliver within our domain (roughly defined as “making stuff on the internet”). It’s a rare web project where the business analysis is the most difficult part. It is a sign of how ahead of the curve this product is.

The “easy” part of building the site is full of innovations for us as well. Without the constraints of a legacy system to maintain, for the first time we have been able to exclusively use the Grape API micro-framework for the backend API. This has made for super-lean maintainable code.

When a user logs in to PlanDo they will be loading up an AngularJS application on their browser. We rely on GruntJS instead of Ruby on Rails and Capistrano to handle application builds. The process is kind of magical- with the Developer only needing to commit their changes with a special tag to trigger a build on our Travis continuous integration servers.

If the GruntJS build succeeds, the static code is pushed back to the repository to a “release” branch. The release manager can then simply deploy the static HTML, Javascript and images from this branch, with no need for additional software on the server. At the moment this final deploy step is still a Capistrano task, but it could easily be done using GruntJS as well or some other tool. To top it all off, we run both the API and the front-end application through CodeClimate to check for any bad smells in the code.