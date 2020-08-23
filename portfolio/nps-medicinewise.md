---
layout: project
theme: nps
slug: nps-medicinewise
title: NPS Medicinewise
tagline: A reliable online resource for drug and health information
description:
  Making Australia more medicine wise, through digital health and data
  insights, health professional education and reliable health information for consumers.
project_url: https://www.nps.org.au/
client: NPS Medicinewise
technologies:
  - Amazon Web Services (AWS)
  - Ruby on Rails
  - Scrivito CMS
  - PostgreSQL
  - WAVE visually impaired testing tool as part of CI build chain
project_date: 2015-17
images:
  - filename: nps-medicinewise-1.jpg
  - filename: nps-medicinewise-2.jpg
  - filename: nps-medicinewise-3.jpg
  - filename: nps-medicinewise-4.jpg
team_size:
project_type: ''
lines_of_code: ''

---

## Project Description

NPS provides free, independent, evidence-based info on medicines, health conditions & medical tests for health professionals & consumers. Over 7 million Australians are aware of NPS MedicineWise, and the website had 13 million visits in the 2016-17 financial year.

Red Ant were engaged by NPS in 2015 as part of their wider digital transformation. Our task was to automate the process of ingesting data into the system, allowing the process to scale, as well fast tracking turnaround time on content updates to minutes rather than days.

The NPS site relies on several sources of data including the Australian Prescriber journal, the [Medicine Finder](https://www.nps.org.au/medical-info/medicine-finder/), and MedicineInsight data.

The whole NPS system relies on good data. Our challenge was to develop a process to pull this information in, index and contextualise, and then have it appear as search result pages like [this one](https://www.nps.org.au/medical-info/medicine-finder/panadol-cold-flu-relief-original-formula-tablets).

A good CMS can help with some parts of this, and a good process workflow can help enhance data quality. We designed a system that could efficiently ingest large volumes of very complex medical data and present it back in multiple locations to different user types. We designed a user friendly and highly accessible website experience, with a range of tools to enable different types of users to interrogate the data based on their needs.

Behind the scenes, the project included initiatives that would save money and increase efficiency for NPS administrators. One of the key requirements for NPS was for multiple members of the NPS team to be able to update content at the same time. We implemented a Headless CMS to provide the level of flexibility required to let multiple content editors update content at the same time, avoiding rigid publishing workflows and bottlenecks.

![Scrivito editing CMS]({{ site.data.webpack['scrivito-1.gif'] }})

<div style="padding:20px;background:#eee;">

## Hang on - what is a Headless CMS?

Don't worry- this can be confusing. This type of CMS is less talked and less understood than a traditional platform style CMS (like Sitecore, WordPress or Drupal). In a nutshell, a Headless CMS is a backend only content management system that behaves like a content repository, making content accessible via a RESTful API for display on any device.

Often when people are faced with a requirement:
_"I have/want a web site with lots of content that my team can edit"_
they start looking for the best CMS. Google that and you'll get a billion options and opinions. Some are free, while others are eye-watering-ly expensive. What about Wordpress, what about Adobe, what about SiteCore? Move past the hype, and they are all remarkably similar- you edit some content, click save, and it appears on a page.

One key distinction is how they connect to other code. Wordpress, Sitecore and Adobe EM are all examples of **CMS platforms** - they are intended to be the primary technology. They suit sites where most of the pages are stuff you're editing. If you want to add functionality to say your WordPress site, you need to code that functionality so that it follows WordPress formats. Which is fine for simple things, but becomes exponentially more difficult as complexity increases.

There is another type of CMS, sometimes called <i>Headless CMS</i>. Examples being <a href="https://scrivito.com/features">Scrivito</a> and <a href="https://www.contentful.com/">Contentful</a>. These are a bit more flexible (and we are big fans). You develop your code to do whatever it needs to do, and then sprinkle some CMS on pages or blocks of content as required.

Pick your CMS by first understanding your total requirements, then determine if you need a platform or headless CMS. If anyone uses buzz words like "personalisation" as a reason for a particular CMS (I'm looking at you, Adobe and Sitecore), stop and think about exactly what is the problem you're trying to solve. Perhaps <a href="/portfolio/12wbt-dynamic-video/">dynamic content for each user</a> is what you're actually after.

</div>

Anyway, back to the NPS project. The next phase of the project was to update the rest of quite a large existing site to also use Scrivito. This meant designing and building new templates, as well as the content team updating literally thousands of pages of content. One of the nice features is the ability to create working copies. This means anyone on a team can start working on a version of the site, and then merge their changes when they are done without overwriting other people’s changes.

![Scrivito working copies]({{ site.data.webpack['scrivito-working-copy.gif'] }})

Finally, all of this needed to get set up in a resilient manner. Part of the site relied on automated feeds, so we needed to make sure if there was an error in the feed, it would get automatically healed (in the case of a missing image or tag) or reported to a human. We used Automated Tests to make sure the code was working correctly, and finally deployed to a Kubernetes cluster on Amazon AWS.

**Update**: the NPS site was redeveloped in 2019 by another team with different technology.
