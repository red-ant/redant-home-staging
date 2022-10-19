---
layout: post
title: The hard thing about AI isn't making it - it's testing that it works
type: news
permalink: "/automated-testing/ai-development-testing"
categories:
- automated-testing
- software-development
author: Ben Still
description: AI and Machine Learning are amazing technologies. But in some cases it
  can be hard to know when they are actually working
keywords: ai development, machine learning, automated tests
date: '2018-11-26T02:31:36.000+00:00'
image_small: "/assets/uploads/2018/extra_large-1498661132-cover-image-1.jpg"
image: "/assets/uploads/2018/extra_large-1498661132-cover-image.jpg"
excerpt-short: Testing Machine Learning or AI powered features is often trickier than
  it seems
excerpt-long: Testing Machine Learning or AI powered features is often trickier than
  it seems
tags: []
time: ''
redirect_from: []
date_published: ! ' 2018-11-26'
publisher: Red Ant
updated_at: 2018-11-26

---
Before you start pitching to your investors about how amazing the world will be once you get some AI in your product, spare a thought for the engineering team behind Tay, [the Microsoft AI chatbot](https://www.theverge.com/2016/3/24/11297050/tay-microsoft-chatbot-racist).

> Unfortunately, the conversations didn't stay playful for long. Pretty soon after Tay launched, people starting tweeting the bot with all sorts of misogynistic, racist, and Donald Trumpist remarks. And Tay — being essentially a robot parrot with an internet connection — started repeating these sentiments back to users

AI/ML technology is amazing, and it's changing and evolving at a rapid pace. It's gone from a hard, obscure technology to a simple service that you can quickly integrate into your product.

But it can often be quite hard to get a handle on how well it's working. Or if it is actually working at all. In a recent project, we decided to use AI to help us [choose a good rescue pet](/portfolio/real-pet-matcher/) to adopt. Basically a recommendation engine that was driven by which animals you liked or didn't.

So if you looked at this dog

# 🐕

and liked it, should we show you

# 🐩

or

# 🐈

We used image analysis AI to generate more information about each animal. For example we already knew from the rescue shelter data whether the animal was a dog or a cat. But image analysis helped us understand if it had black and white spots, or was mainly brown, or had short hair. We used text analysis AI to better understand what was written about the animal. For example rescue pets can be rescued by one shelter, but fostered somewhere else. Which would kind of suck if you turned up to the shelter expecting to introduce your kids to the pet of their dreams, only to discover they were located somewhere else. That would be a long trip home.

That all worked. The problem we hit was around recommendations. What to show you next. And specifically around testing this functionality.

To explain: when we write code, it's good practice to also write some test code to check that. So say the feature you code is a doorbell. Your test might be:

> _when I press the red button with my finger, I should hear a chime_
>
> _when I press the side with my finger, I should not hear a chime_

These tests get fed into Continuous Integration, and get run each time a developer makes changes or deploys code. They can even be run in the live environment to monitor ongoing performance. That's how we can be certain that our code is working as planned.

But how do you create a test to see if the recommendation you've made is the right one? We've asked the AI engine

_"Hey - what should we recommend now?"_

and the AI has replied

_"42"_.

It can be hard to understand if pet id#42 is in fact the right pet to show for this person or not.

ML works really well in some situations. Say you needed to make a recommendation on what I should watch next on Netflix. You could test to see if I started watching the recommended show. Even better would be to test if I watched to the end. Gave it a thumbs up.

To explain why this works well:

1. Netflix has a massive data set of both users and content
2. A user on one side of the country is just as interested in something as on the other
3. Neither the users nor the actual content changes that much
4. There are clear signals by the user as to whether the recommendation was suitable or not
5. Large external references such as IMDB and Rotten Tomatoes

The data set we were working with was quite different

* The data changed a lot - new pets (unfortunately) come into the system all the time.
* The entire set churns every few months
* the data set itself (pets available) is a few thousand. Once we apply preferences (the kind of pet you're after) and location (only show pets in shelters close to you) it gets much smaller.
* Very difficult to set success criteria. There is no clear data about whether a user actually went on to adopt pet#42. What if they did and it didn't work out (the recommendation was bad)?

The problem we faced was not knowing if our fancy AI based Machine Learning <insert trendy keyword here> recommendation engine was actually making any difference at all. How different were the results it recommended vs using simple random pick code?

Before you rush out and AI all the Things, get some inspiration here

[https://www.iflscience.com/technology/ai-trying-to-design-inspirational-posters-goes-horribly-and-hilariously-wrong/](https://www.iflscience.com/technology/ai-trying-to-design-inspirational-posters-goes-horribly-and-hilariously-wrong/ "https://www.iflscience.com/technology/ai-trying-to-design-inspirational-posters-goes-horribly-and-hilariously-wrong/")

and here

[https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRPiprOaC3HsCf5Tuum8bRfzYUiKLRqJmbOoC-32JorNdfyTiRRsR7Ea5eWtvsWzuxo8bjOxCG84dAg/pubhtml](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRPiprOaC3HsCf5Tuum8bRfzYUiKLRqJmbOoC-32JorNdfyTiRRsR7Ea5eWtvsWzuxo8bjOxCG84dAg/pubhtml "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRPiprOaC3HsCf5Tuum8bRfzYUiKLRqJmbOoC-32JorNdfyTiRRsR7Ea5eWtvsWzuxo8bjOxCG84dAg/pubhtml")