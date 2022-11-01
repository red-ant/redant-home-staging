---
layout: post
title: What makes property management so hard?
type: news
permalink: "/software-development/what-makes-property-management-so-hard"
categories:
- software-development
author: Ben Still
description: From the outside looking in, the property management business looks pretty
  simple.
keywords: property management, payments
date: '2019-02-12T02:31:36.000+00:00'
image_small: "/assets/uploads/2019/managed.png"
image: "/assets/uploads/2019/managed.png"
excerpt-short: From the outside looking in, the property management business looks
  pretty simple.
excerpt-long: From the outside looking in, the property management business looks
  pretty simple. Turns out there are quite a few things that make it trickier than
  you might expect.
tags:
- software-development
time: ''
redirect_from: []
date_published: ! ' 2019-02-12'
publisher: Red Ant
updated_at: 2019-02-12

---
Before we started working on the [Managed Platform](/portfolio/managed/), I’d made some assumptions about how Property Management works. In a nutshell, my impression was that things were pretty basic. Easy, even.

Here’s how I thought it worked: A tenant signs a lease, and then sets up regular rent payments. These payments regularly flow like clockwork to the owner’s bank account. The property manager gets paid a fee, they sort out the occasional maintenance task and everything is pretty simple and sweet.

But once you take a look “under the hood” in an industry like this that you see how messy and hard things can be. Turns out managing a portfolio of rental properties is a real time suck. There is no “clockwork” of payments, every payment in needs to be matched to a payment out, and there never seems enough time in the day to follow up on the gazillion things that need doing.

In no particular order:

**Problem 1: Trust accounts**

Turns out the money doesn’t just go to the owner. It first goes into a Trust account, which is a special type of bank account the Agency must have. This Trust costs the Agency. First they need to employ people to manage the account, and pay for an external company to audit this. And at the same time the law prevents Agencies from earning any interest on funds held, so there is no financial benefit to holding this money.

**Problem 2: Fraud**

So you’ve got this big pool of money, and lots of cash going in and out. Guess what happens? Obviously this is only in a small percentage of cases, but humans being humans there are two types of fraud:

The first is “soft fraud”, where money comes in for PropertyA. PropertyB’s rent hasn’t yet come in, but a sudden cost needs to get paid. So the money from PropertyA is used to pay for PropertyB.

Sure, it will probably all even out, but it does mean the owner of PropertyA won’t get paid straight away. Very hard to detect, and this might occur deliberately or by accident.

The second type is more straight up fraud:

* NSW real estate agent [Daniel Nicholson](http://www.realestatebusiness.com.au/breaking-news/11202-agent-jailed-over-trust-account-fraud) was prosecuted after he failed to lodge almost $93,000 in trust funds
* [One agent who fraudulently used the funds](https://www.smh.com.au/business/consumer-affairs/millions-in-nsw-real-estate-fraud-prompts-raft-of-new-regulations-20161124-gsx3gf.html) to purchase illegal drugs used by his wife.
* Another [whose father reported her to Fair Trading](https://www.illawarramercury.com.au/story/1982022/warilla-agent-feeds-101m-into-pokies/) after she stole more than $1.5 million from her real estate agency to use on poker machines.
* Gambling addiction is identified as a common motivator for trust account fraud, as was the case for one agent who bet $77,000 of trust funds in one day.

**Problem 3: Margins, outsourcing and the Privacy Act**

Managing a portfolio of rental properties can be very time consuming, and the wage cost might not always align with revenue. This is in contrast to the Sales side of an agency, where new sales align with commissions paid to agents.

This drives a desire to keep costs down, and so some agencies explore outsourcing options such as using staff in offshore centres to manage trust funds. The regulator (eg: Office of Fair Trading in NSW) doesn’t look kindly on this, and processing data in this way would make it difficult to meet the tougher new Data and Privacy obligations.

**Problem 4: Speed of payments**

There is a general user expectation that payments happen in the blink of an eye. And they can - except when they don’t. It’s all to do with the method (or the “rails” if you want to use fancy FinTech talk) of how the money moves around.

Technically, a payment with credit card is easy. The transaction happens almost immediately, and I can even do a pre-transaction check to make sure you’ve got enough money before we put the transaction through.

But other methods like Direct Debit or BPay are much slower. Or they can be. Confusingly there are faster and slower flavours of each. At its slowest, a Direct Debit takes 3 days to go from a tenant’s account to the platform (eg: Managed). And then another 3 days to go from Managed to the owner. Oh, and if on that first day you did it after the 2pm cutoff, then you need to wait another day. Computer says no. So that means it can be up to 7 business days.

So there is tension here: the consumer expectation is that it happens straight away, and the reality is that sometimes it does (“see - it works!”) and other times takes ages (“this is broken! I want my money back”). Which makes it hard if you had rent due tomorrow and you’ll now be a week overdue by the time your payment lands

The good news is that there has been significant innovation, with NPP and OpenBanking. Our banks are finally moving out of the Mainframe age to a Cloud one, where automation is used to drive down time and improve flexibility. You might have seen some changes in your online banking with terms like “Osko” and paying via mobile number instead of BSB. But these changes aren’t all happening at the same rate across all banks - so the change won’t be even.

**Problem 5: Complexity of payments**

The payment workflow itself is relatively complex. You’d think it's simple - tenant is due to pay rent on a certain day, the owner gets the rent. All done.

Not really.

Let’s take timing of payments - from the Tenant’s point of view, as soon as they’ve hit the “pay” button, their rent is paid. But maybe there was insufficient funds, maybe it takes a few days. From the Property Manager’s point of view they haven’t paid rent and they are overdue. From the owners point of view, that rent is only paid once it has arrived in his/her account - which could be another few days after that.

The payment amounts can change - the rent amount isn’t always the same. A lease might be varied, a tenant might need to get reimbursed or pay more. The rental amount might need to get split up to cover costs or outstanding bills. Sometimes the owner might be paying the tenant rather than the other way around.

The tenant might want to change when they pay. So change frequency from weekly to fortnightly, but only starting from the week after next - and so on. All of which changes the amount of each payment.

So, things aren’t as simple as a basic reconciliation of the same regular, predictable payment amount. They take longer than you might expect, or get broken up into odd amounts. There are fees and costs that need to get met. And then of course there are fickle humans who tend to change their minds, their circumstances, lose their credit cards, and generally make life interesting.