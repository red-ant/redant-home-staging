---
layout: project
theme: 12wbt
slug: 12wbt-daily-app
title: 12WBT Daily App
tagline:
  A companion iOS app for this extremely successful online health and fitness
  platform
description:
  This app is used by people doing the 12WBT program. It has workouts,
  recipes and daily stats.
project_url: https://www.12wbt.com/features/introducing-12wbt-daily
client: 12WBT
project_date: 2015-now
project_type: mobile
team_size: 6 people
lines_of_code: 30k
technologies:
  - Swift
  - FB authentication
  - iOS Push
  - CoreData
images:
  - filename: 12wbt-daily-app-1.jpg
  - filename: 12wbt-daily-app-2.jpg
  - filename: 12wbt-daily-app-3.jpg
  - filename: 12wbt-daily-app-4.jpg
  - filename: 12wbt-daily-app-5.jpg
subtitle: ''
projects: []
image: ''
how_title: ''
how_bulletpoints: []
---

You've probably heard about the wildly popular fitness program [12WBT by Michelle Bridges](/portfolio/12wbt/). You can read a bit more about [12WBT here](/portfolio/12wbt/).

Lots of people start digital projects by listing an App as one of their requirements. Digging deeper, typically what they **actually** want is to connect to an audience of customers - many of which are predominantly mobile. Don't jump to the solution just yet - an App is just one way to to do this. But you need to start by addressing the core requirement - creating something that your audience of customers really want.

Now 12WBT already had this- they have a very successful digital product, with lots of engaged customers. We had already developed the main product so that it was optimised for how their audience was using the product:

- on their mobile phones
- on their desktop or laptops
- printing out parts and using that during a workout or cooking

But there were some specific user issues we needed to address for people using the product on mobile.

<h2 class="h4">Workouts</h2>

If you take your phone to the park, you might want to prop it up and play through a workout video while you do the workout. Except that the damn thing will keep on going to sleep if you don't touch the screen. So that's a problem.

!\[Video Workouts\]({{ site.data.webpack['12wbt-daily-app-mobile-screens.jpg'] }})

Another was that with 12WBT, we do some [clever things with video workouts](/portfolio/12wbt-dynamic-video/). Part of the reason for this is to avoid forcing mobile users to download a really long 45min video - by splitting it up and reusing, we dramatically change the bandwidth profile. The problem is when you try to synch a video snippet and some audio, it works perfectly on desktop, but on mobile (depending on your connection at the time) there is slight latency which means they can get out of whack. Which can get surprisingly irritating.

Using "native" functionality on the phone (which requires an App) allows you to get around this. Rather than code running in a browser, which then asks the underlying system (iOS) to do something like play a sound or take a photo, native app code can do this directly.

<h2 class="h4">Offline</h2>

If you work out at the gym, there might be times when mobile data isn't available. The gym is underground or in a location where coverage isn't great. You're there to do a workout, and it is disappointing / embarrassing if it won't play or drops out half way.

Again, "native" functionality means we can store assets on the phone. This is what an app like Spotify does- when you save a track it stores the file on your phone. The first time you played it, it came off the Cloud. The second time, it plays back from your local version. We did a similar thing, but we take the step of pre-downloading all of the files a user might need for that week. Obviously Spotify can't know what you're going to listen to this week, but with 12WBT we can see from your profile and fitness plan what you'll be doing.

<h2 class="h4">Pro Tip: don't try to do everything / pick your battles</h2>

Along with starting with the solution ("I need an app"), another common mistake we see is assuming 1:1 parity as a requirement: "Everything the user can do on my web platform, they should be able to do in my App. Otherwise it will suck."
I'd challenge that- what things could be better delivered as an App? Are there steps that make sense to be different?

The approach the 12WBT Daily App takes is to focus on the daily component of the program (which takes 4+12 weeks). The role of the app is to act as a companion, rather than try to be an exact replica of what you'd get on the web version. It answers the question "what do I need to do today?". How much water, which snacks, which meals, and what does my workout look like.
