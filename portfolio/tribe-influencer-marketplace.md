---
layout: project
theme: tribe
slug: tribe-influencer-marketplace
title: Tribe Influencer Marketplace
tagline: An online marketplace for brands and influencers
description: Marketing is changing.
project_url: http://www.tribegroup.co/
client: Tribe Group
project_date: 2015-2016
technologies:
  - Ruby on Rails
  - PostgreSQL
  - Swift
  - Sendgrid
  - Social API integrations
  - Stripe Payments
team_size: 4 people
desktop_img_height: 646
images:
  - filename: tribe-influencer-marketplace-1.jpg
  - filename: tribe-influencer-marketplace-2.jpg
  - filename: tribe-influencer-marketplace-3.jpg
  - filename: tribe-influencer-marketplace-4.jpg
project_type: ''
lines_of_code: ''

---

## How it works

Marketing is changing. If you have something to sell, rather than engaging a media agency to buy consumer’s attention, you can now work directly with influential “micro influencers” using Social. Tribe is a market place tool that facilitates this.

Tribe is an online influencer marketplace. As a brand, you can publish a brief and influencers will respond with ideas and proposals. You pick the one(s) that best fit your message. As an influencer, you’ll get to pick who you want to work with, get paid to come up with ideas and push posts to your followers.
We built this marketplace, which connects the two groups. It handles everything from ideation and briefing through to payment.

## Project Description

As a heads up, I found working on this project fairly confronting. I have very few followers on social media. For me, getting to double figures would be just amazing. It turns out there are all these people out there that actually have quite a lot of followers. I'm not talking about celebrities with an impossibly large number of followers, but "micro influencers" that might be into a particular Thing, and have a healthy following of people also into that Thing. I think I need to work on finding my Thing.

Anyway, the whole point of the Tribe Marketplace is to help brands connect with these influencers. Here's how it works:

<ol>
	<li>say you're a small brand and you make these <a href="https://www.youtube.com/watch?v=lF3ueBIpqbY">amazing timber keyboards</a></li>
<li> the way things used to work, you'd engage an agency to create some ads explaining how amazing your keyboards are. Then you'd buy media in various spots (bus shelters, magazines, TV, web sites) to show this ad to your consumers.</li>
<li> you might also engage a celebrity to help spruik your keyboards. They then get featured in kind of magazines you pick up while waiting for the doctor</li>
<li> with Tribe, it's a bit different. You post a brief, which describes your product and how it works. All these influencers then start coming up with ideas. Some of them will be in different areas - so one might have a Thing about retro timber, another might be all about cool things to have on your desk</li>
<li> the influencers then respond with some ideas. So rather than an agency coming up with the idea, influencers will explain your product in the context of their Thing. Retro timber, saving time, cool tech devices, and so on.</li>
<li> You pick the ones you want, agree on a price and number of posts, and then these ideas are pushed onto platforms like Instagram and Twitter.</li>
<li> There are a few advantages here. First, rather than just one ad creative, you're getting at least one per group. Second, your ad is going out to these groups, with the endorsement of the influencer</li>
</ol>
<div class="embed-responsive embed-responsive-16by9 mb-3">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/bxEYt3DuLF4?ecver=1" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>

## Tech

In terms of the technical stuff:

- Most of the heavy lifting is done by a Ruby on Rails backend, which has various APIs
- There is a RoR front end, which is where users set up their accounts, load briefs etc
- There are separate phone front ends (eg: iOS) that users can use to respond to briefs etc
