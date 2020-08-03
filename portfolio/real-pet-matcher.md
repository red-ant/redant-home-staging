---
layout: project
theme: petmatcher
slug: real-pet-matcher
title: Real Pet Matcher
tagline: Find your ideal fur baby
description: A pet matching tool that helps connect people looking to adopt a pet with shelters. It brings a whole new meaning to finding love online! Swipe right to meet your perfect match.
project_url: https://www.realpetmatcher.com.au
client: Real Pet Food Co
project_date: 2017 - 2018
team_size: 2 people
technologies:
  - Ruby on Rails
  - Kubernetes
  - Amazon Web Services (AWS)
  - Google AI Machine Learning
images:
  - filename: real-pet-matcher-1.jpg
  - filename: real-pet-matcher-2.jpg
project_type: ''
lines_of_code: ''

---

<h2 class="h4">How it works</h2>

<strong>A pet matching tool that helps connect people looking to adopt a pet with shelters. It brings a whole new meaning to finding love online! Swipe right to meet your perfect match.</strong>

<h2 class="h4">Project Description</h2>

Real Pet Food Co is Australia’s most successful Pet Food company. Their product is really good, and they've been very successful (read about <a href="http://www.afr.com/business/banking-and-finance/milennials-pet-spending-drives-1b-sale-20171023-gz6uey">their business here</a> ). They have several brands which they are rolling out in different countries.

Here's the challenge the business and brands face. The main sales channel for in-store is either large supermarkets (in Australia there are two) or specialty pet stores. Online it is the major ecomm platforms like Amazon, Alibaba and JD Mall.

Which is great- sales channels generate sales. But as the Brand, it is critical to know your customer. Who are they? What needs or problems are met by the Brand? What else would they like? Not having a clear idea of a customer can mean a slow death for a brand.

And no one wants to share that data.

So what are the options? In terms of Digital, you could buy people's attention on platforms like Facebook. You could make a web site, but the audience for a site that was everything you ever wanted to know about pet food (I am guessing here) would be relatively limited.

Or we could flip things, and rather than spending money trying to broadcast to an audience, you make something where they come to you. Something interesting / useful. Something that provides the user with utility or solves a problem.

With the Pet Matcher, the aim was to help someone that was thinking about a rescue pet. Help them choose and then find one easily. We followed the Tinder design pattern, where each animal fills the screen, and you either love or dislike. As you start making choices, the smarts start to kick in and you start to see animals that more closely match what we think you'll like.

Designing this algorithm is tricky - there are lots of variables with a pet beyond simple breed and size. A pet can be active or not, good around children, short or long hair which it may or may not leave all over your couch. Then there is colour (it might need to match your couch) and temperament. And a lot of other things.

The Matcher has an ingestion process with most of the Pet Rescue shelters around Australia, so new pets are being continually added in as they become available. Unfortunately the data format is a mixed bag - some have breed in a "breed" field, while others mention in the description. Some have a location where the pet is, but then in the description mention that the animal is being fostered at a completely different location.

So we also needed to create some smarts around analysing data, including the description and images to better understand things like the colour, breed and type of animal. The latest Machine Learning technology makes this much easier.
