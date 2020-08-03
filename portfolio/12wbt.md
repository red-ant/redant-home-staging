---
layout: project
theme: 12wbt
slug: 12wbt
title: Michelle Bridges 12WBT
tagline: 12 week health & fitness product
description:
  Australia’s most popular health platform, with incredible growth. Nutrition,
  fitness and mindset.
project_url: https://www.12wbt.com
client: Michelle Bridges 12WBT
project_date: 2011 - 2019
team_size: 15 people
lines_of_code: 450k+
technologies:
  - Ruby on Rails
  - PostgreSQL
  - AngularJS
  - Salesforce Marketing Cloud
  - Redis
  - Elasticsearch
  - Google BigQuery
  - Wordpress
  - Locomotive CMS
  - MongoDB
  - Chargify
  - Paypal
  - Facebook
  - MyFitnessPal
  - Fitbit
  - Withings
  - Brightcove
  - Online Payment Systems
images:
  - filename: 12wbt-1.jpg
  - filename: 12wbt-2.jpg
  - filename: 12wbt-3.jpg
  - filename: 12wbt-4.jpg
  - filename: 12wbt-5.jpg
project_type: ''

---

[12WBT.com]({{ page.project_url }}) - an extremely successful online health and fitness platform.

12WBT is one of Australia's most successful and enduring health & fitness products, featuring a comprehensive fitness and nutrition program created by celebrity trainer Michelle Bridges (Biggest Loser).

What started life as a basic MVP is now a fully fledged lifestyle platform, with thousands of active members at any one time. Members sign-up for a 3 month “round” which gives them access to a personalised weekly plan for exercise, meal planning and mindset. Members feel fully supported on their transformation journey with tailored dynamic content, including a weekly motivational video session with Michelle Bridges.

<h2 class="h4">Project snapshot:</h2>

- A round takes 12 weeks to complete, plus a 4 week "preseason"
- All workout and 12wbt recipe content is behind a paywall
- Thousands of users login to the platform every day. There are weekly traffic surges due to the event based nature (eg: the weekly weigh in)
- There are also transactional peak periods aligned with marketing activity, this reaches a peak prior to the closure of sign-ups for each round
- All content is personalised and delivered via web, PDF, email and mobile app
- Connects with devices such as Fitbit, as well as other platforms like MyFitnessPal

<h2 class="h4">Here's how it works:</h2>

It's all digital - no physical meals, meetings, DVDs etc. You join for \$199, then set up your goals (eg: "I'd like to lose 5kg for my wedding in March"). Based on who you are and what you're trying to achieve, you can then pick from a menu of programs - weight loss, running, strength and so on. Everyone starts with 4 weeks of Pre-Season, which is all about getting prepared. Then you go into 12 successive weeks of training and nutrition. Everyone starts together at the same time, and progresses through at the same pace.

We started on this way back in 2011. Back then there was a basic MVP built with a CMS, that was having some pretty significant growing pains. Which isn't unusual - a big part of MVP is working out what you don't know. We rebuilt the tech stack in Ruby on Rails over about 10 weeks, including a new payment system and a more evolved management system.

One of the interesting things about working on this project is that they have a very large group of highly engaged members, each of which is on a quite personal journey. There are a lot of them, they seem to use it pretty much all the time, and they are highly passionate and involved with the product.

![Member Zone]({{ site.data.webpack['desktop-12wbt-4.jpg'] }})

All of which means we get pretty immediate feedback. And if you're going to ask for feedback, you'd better be prepared to do something about it. I won't bore you with details, but one morning we pushed a new feature. It became quickly apparent that while they liked some parts, other bits (that we'd de-prioritised) were in fact required. We scrambled and got two teams (front end and back end) working on an update, which we pushed out later that afternoon. I'm glossing over a few things here, like the reason that we were able to build and release a significant update quickly was partly due to all the foundation work before - the boring stuff like an automated test suite, continuous integration, and seamless "no downtime" deploy flow.

Anyway - back to the actual product. Probably the best way to check it out is to [sign up yourself](https://12wbt.com). You never know - you might really enjoy yourself! I actually was talking to a someone the other day who had signed up as a way of evaluating our work, and he ended up doing 3 rounds.

You [can read a bit more about](/our-work/our-work-michelle-bridges-12wbt-build/) the 12WBT project on this post, and [about localisation for USA version](/our-work/developing-12wbt-usa/) here. If you're really interested, or just bored at work and trying to fill in some time, check out the [12wbt dynamic videos project](/portfolio/12wbt-dynamic-video/) summary or the [Daily Companion app](/portfolio/12wbt-daily-app/).

<h2 class="h4">More Detail</h2>

- **Paid membership site** - members join and buy a subscription for a 3 month “round” – either up front or recurring weekly payments with high bursts of traffic when all members need to access the site at the same time.
- **Content system** - members sign up and get content & tools each week. As the program progresses through the 12 weeks, different features appear.
- **Event system** - members can create events, RSVP to them, write reviews of events, and book tickets for paid events.
- **Forum & private messaging system** - tightly integrated with the rest of the site.
- **Help & FAQ** - tightly integrated with 3rd party <span class="caps">SAAS</span> help system.
- **My Stats** - an interactive tool which allows members to record their weight and key measurements, plus track progress over time.
- **Third Party integrations** - members can sync their data with third party tracking apps like Myfitnesspal, or order their shopping list directly from Woolworths via the site.
