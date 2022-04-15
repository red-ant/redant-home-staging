---
layout: project
theme: 12wbt
slug: 12wbt-dynamic-video
title: 12WBT Dynamic Video
tagline: A health and fitness product
description: Find a pocket personal trainer
project_url: https://www.12wbt.com
client: 12WBT
project_date: "2015"
technologies:
  - Brightcove
team_size:
lines_of_code: ""
images:
  - type: gallery
    path: /assets/images/projects/12wbt-dynamic-video/12wbt-dynamic-video-1.jpg
  - type: gallery
    path: /assets/images/projects/12wbt-dynamic-video/12wbt-dynamic-video-2.jpg
  - type: mobile
    path: /assets/images/projects/12wbt-dynamic-video/12wbt-dynamic-video-hero-mobile.jpg
  - type: desktop
    path: /assets/images/projects/12wbt-dynamic-video/12wbt-dynamic-video-hero-desktop.jpg
---

## Project Description

People often talk about scaling things. Scaling a business to handle more customers. Scaling a web site to handle more traffic. A site that scales well works fine even as traffic increases.

But what about content?

Making content (images, words, videos) for a simple web site that has a few pages is relatively easy. We can set up a CMS and you can knock yourself out. This gets a bit harder as your site grows - there are only so many hours in a day.

Now imagine your site changes to that each page personalised to the user. So everyone gets personalised images, content and video. Congratulations - you now have a content scaling problem. How on earth are you going to make all that content?

By "personalised", I don't mean "Dear FIRSTNAME ". Ironically this is where many personalisation initiatives end up - simply because they had trouble scaling meaningful content. Or the technology over promised and under delivered (I'm looking at you, Sitecore). Or a bit of both.

By personalised, what I actually mean is having content carefully customised based on what we know about you. If I'm pregnant, don't start showing me recipes with raw fish or soft cheese. Even better, show me the alternate recipe sans fish and/or soft cheese. If I'm injured, don't give me pushups in my workout. Swap them out for knee pushups. Yes, that would be nice.

We started down this path with recipe content. Everyone gets their own recipe content. Each recipe is personalised, depending on who you are and what your weight loss goals are. If I'm a woman trying to lose weight, I'll see a different version of a recipe to the man trying to gain muscle. Or vice versa.

But what about video? Some of the most popular pieces of content on 12WBT are the workouts, and they all come with video. So you can watch the video and do the workout yourself. Makes sense right?

The "traditional" approach for fitness videos is to shoot the scene with say 3 instructors doing the workout. One does the easy routine, the next does a regular one, and the third does advanced moves. So the user is "personalising" by who they choose to watch. Doing a big shoot like that isn't particularly cheap - lots of cameras, talent and editing.

We took a different approach on 12WBT. Instead of shooting the workout in one long sequence, we got the video team to try shooting each routine separately. We also asked that each exercise (for example: a pushup) starts and finishes in the same position in the video frame.

![Regular Workout Videos](/assets/images/projects/12wbt-dynamic-video/12wbt-video-diagram-1.jpg)
![Dynamic Workout Videos](/assets/images/projects/12wbt-dynamic-video/12wbt-video-diagram-2.jpg)

We created a workout design tool, which allowed the content team to build different workouts for different types of users. So they could quickly make a pushup > skip > burpee > star > etc routine, and then make another with slight variations.

Instead of a big 45min video file, we had lots of short video clips of each part of each routine. So one pushup. One burpee. When Sam watches the workout and gets to pushups, we use code to loop that one pushup 8 times. When Sally watches it, her more advanced status might cause it to loop 12 times.

All of this dynamic content is fed into a video stream, so to the user the experience is the same as watching a regular video. It might be a short video of a few minutes, or it might run for 45 minutes.

Taking this approach, the video content becomes scalable. Rather than just a few long videos, we can create literally millions of different workouts.
