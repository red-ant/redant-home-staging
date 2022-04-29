---
layout: default
permalink: "/software-development/ruby-on-rails-for-your-web-development"
type: news
categories:
  - software-development
author: Ben Still
tags: []
time: 15 Mins Read
title: Why choose Ruby on Rails?
description:
  The no nonsense guide for entrepreneurs, startups, product owners or
  anyone that is a bit baffled about tech stack options.
keywords: ""
image_small: "/assets/uploads/2019/why-choose-ruby.jpg"
image: "/assets/uploads/2019/why-choose-ruby.jpg"
excerpt-short:
  The no nonsense guide for entrepreneurs, startups, product owners or
  anyone that is a bit baffled about tech stack options.
excerpt-long:
  The no nonsense guide for entrepreneurs, startups, product owners or
  anyone that is a bit baffled about tech stack options.
redirect_from: []
date_published: ! " 2019-06-05"
publisher: Red Ant
---

<section id="section-intro" class="bg-black">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-8 pt-3">
        <h1 class="project-title pb-2 mw-100">Why choose Ruby on Rails?</h1>
        <hr class="dash" />
      </div>
      <div class="col-md-4 pt-5 text-center">
        <img class="img-fluid" src="/assets/images/ruby-bg.png" alt="Ruby" width="200" height="225"/>
      </div>
      <div class="col-12 pt-3 pb-5">
        <p class="text-lg">
          The no nonsense guide for entrepreneurs, startups, product owners or
          anyone that is a bit baffled about tech stack options.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-gray-light py-5 text-md">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p>
          <strong>
            After reading this guide, you’ll have a better understanding of
          </strong>
        </p>
        <ul>
          <li>What Ruby on Rails actually is</li>
          <li>What the “open source” bit means</li>
          <li>How Rails stacks up against other development options</li>
          <li>When it makes sense to use Ruby vs another option</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="bg-white py-5 text-md">
  <div class="container">
    <div class="row">
      <div class="col-12 mb-3">
        <h3 class="mb-4">What is Ruby on Rails?</h3>
        <p>
          Ruby on Rails (also referred to as “Rails” or “RoR”) is an open source
          development framework. The “Ruby” part refers to the Ruby programming
          language. The “Rails” part is the framework (more on that shortly).
        </p>
        <p>
          Ruby on Rails helps developers create web applications quickly, much
          faster and more reliably than if they wrote the code directly in a
          programming language like Ruby or PHP. This saves time and money, and
          improves ongoing maintenance.
        </p>
      </div>
      <div class="col-sm-8 offset-sm-2 my-5">
        <hr class="m-0">
        <div class="section-border border-red py-5">
          <p>
            <strong>
              Hang on - that sounds just like something else I heard about
            </strong>
          </p>
          <p>
            Ruby on Rails has been incredibly successful. It came onto the
            development scene around 2005, and introduced all these new concepts
            and ways of working. Things like separating code into data, logic
            and visual layer (MVC), which radically changed the way we worked.
          </p>
          <p class="mb-0">
            Many of these ideas have since been applied to other frameworks -
            from Microsoft dotNet to PHP frameworks. Which can make things a bit
            fuzzy - there is a huge amount of cross over between different open
            source frameworks.
          </p>
        </div>
      </div>
      <div class="col-12 mt-3">
        <h3 class="mb-4">So what’s Ruby then?</h3>
        <p>
          Ruby is a programming language. First released in 1995, Ruby is ranked
          among the top 10 on most of the indices that measure the growth and
          popularity of programming languages worldwide (such as the
          <a href="http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html">TIOBE index</a>
          ). Ruby is also <a href="https://www.ruby-lang.org/en/about/license.txt">completely free</a>.
          Not only free of charge, but also free to use, copy, modify, and distribute.
        </p>
        <div class="my-4">
          <blockquote class="font-italic text-secondary">
            “I wanted a scripting language that was more powerful than Perl, and
            more object-oriented than Python<a href="https://www.ruby-lang.org/en/about/#fn2">2</a>.”
          </blockquote>
        </div>
        <p>
          Ruby creator, <a href="http://www.rubyist.net/\~matz/">Yukihiro “Matz” Matsumoto</a>,
          blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada,
          and Lisp) to form a new language that balanced functional programming
          with imperative programming.
        </p>
        <h2 class="mt-5 mb-4">
          What are the features that make Ruby attractive to developers?
        </h2>
        <div class="bg-gray-light rounded p-4">
          <h5>1. Everything can be an object</h5>
          <p>
            In Ruby, everything is an object. Every bit of information and code
            can be given their own properties and actions. Object-oriented
            programming calls properties by the name <em>instance variables</em>
            and actions are known as <em>methods</em>. Ruby’s pure
            object-oriented approach is most commonly demonstrated by a bit of
            code which applies an action to a number.
          </p>
          <pre><code>5.times { print "We love Ruby -- it's outrageous!" }</code></pre>
          <p>
            In many languages, numbers and other primitive types are not objects.
            Ruby follows the influence of the Smalltalk language by giving
            methods and instance variables to all of its types. This eases one’s
            use of Ruby, since rules applying to objects apply to all of Ruby.
          </p>
        </div>
      </div>
      <div class="col-sm-6 mt-4">
        <div class="bg-gray-light rounded p-4 h-100">
          <h5>2. Flexibility</h5>
          <p>
            Ruby is seen as a flexible language, since it allows its users to
            freely alter its parts. Essential parts of Ruby can be removed or
            redefined, at will. Existing parts can be added upon. Ruby tries not
            to restrict the coder.
          </p>
        </div>
      </div>
      <div class="col-sm-6 mt-4">
        <div class="bg-gray-light rounded p-4">
          <h5>3. Blocks</h5>
          <p>
            Ruby’s block are also seen as a source of great flexibility. A
            programmer can attach a closure to any method, describing how that
            method should act. The closure is called a block and has become one
            of the most popular features for newcomers to Ruby from other
            imperative languages like PHP or Visual Basic.
          </p>
        </div>
      </div>
      <div class="col-12 mt-5">
        <h3 class="mb-3">OK- so what’s the Rails part then?</h3>
        <p>
          “Rails” is the framework that sits on top of Ruby. The intention of
          Ruby on Rails is to maximise Developer happiness, by providing them
          with a tool that is both natural to use and incredibly efficient.
        </p>
        <p>
          One of the ways this is done is something called <strong>“convention
          over configuration”</strong>. There is a “way” of doing things that is
          baked into the framework. Say your developer is creating a database of
          users. If they are using Ruby on Rails, we know the name of the table
          will be “users”, and the primary key will be “user_id”. This is only a
          small example, but it’s amazing how much time gets lost procrastinating
          or arguing about names. You can read more about that here
          <a href="https://rubyonrails.org/doctrine/#omakase" title="https://rubyonrails.org/doctrine/#omakase">https://rubyonrails.org/doctrine/#omakase</a>
        </p>
        <p>
          Another way is <strong>Gems</strong>, which are code libraries that
          provide specific functionality. A developer can easily add these in,
          and - hey presto - it just works. You can get a Gem to do pretty much
          anything you can imagine (for code anyway) - from secure
          authentication to adding a REST API.
        </p>
        <p>
          <strong>Automated testing</strong> is another. Instead of a developer
          making some functionality and then relying on someone else to test
          whether it works, an automated test is a script which can test to make
          sure it does. Every time.
        </p>
        <p>
          <strong>Scaffolding</strong> is a way of quickly building out
          functionality. Work out some basic data, and Ruby on Rails is smart
          enough to automatically build out a “scaffolded” version of your site.
          This saves a lot of time when you’re sketching out an idea or concept.
        </p>
        <div class="col-sm-8 offset-sm-2 my-5">
          <hr class="m-0">
          <div class="section-border border-red py-5">
            <p>
              <strong>
                Some backstory - our first Red Ant product and how we got to Rails
              </strong>
            </p>
            <p>
              Back around 2002, we were building a lot of websites that required
              some form of content management. There were options available, but
              they were expensive and pretty inflexible. This was a dark time in
              the history of web development, where Flash was still the “Go To”.
            </p>
            <p>
              We decided to package up the content management system that we’d
              been creating into a re-usable tool. It had some features that we
              thought were pretty cool - such as generating a static version of
              a site, xml data stores and a handy templating system.
            </p>
            <p>
              Looking back, it’s clear we had no idea. We’d used the Microsoft
              ASP language, which was slow even then. We’d created a library
              system, but we never properly considered dependency. Each module
              relied on others, so it was like going to a book library and
              having to check out the entire library if you wanted to read one
              of the books. Our XML system ground to a halt once a certain size
              limit was reached.
            </p>
            <p>
              To make things worse, for each customer we made customisations. So
              each version was slightly different, and each developer had
              started to use different conventions. As we made updates, the task
              to update each got bigger. Some of our changes weren’t backwards
              compatible. Our team started having long squabbles over variable
              naming.
            </p>
            <p>
              One developer ran out crying when another renamed his code to be
              all lowercase.Our CMS was a great example of an immature platform
              - it looked great, but under the hood was based on a slow tech
              stack that was poorly thought out. Nothing was scaling, and things
              only kept working if no one touched them.
            </p>
            <p>
              At about this time, we discovered Rails. It was quite the epiphany
              - an opinionated framework that set clear conventions. It was fast,
              and was a pleasure to work in. Automated testing baked in. Clear
              separation of logic, data and presentation views. Minds were blown.
            </p>
          </div>
        </div>
        <h3>Methodology for picking the right technology stack</h3>
        <div class="my-3">
          <blockquote class="font-italic text-secondary">
            Pro tip: look for a mature, stable core team, and an engaged community
          </blockquote>
        </div>
        <p>
          Like in many other areas, trends come and go in web development
          technologies. We’re at the forefront of an endless drive for
          innovation, and it’s accelerating. And like all innovation, there are
          bumps along the way. Sometimes it works and sometimes it ends in a
          dead end.
        </p>
        <p>
          The challenge for you as an entrepreneur / product owner / developer
          is how to avoid picking a technology where you spend a ton of time,
          money and effort and then find out it was the wrong choice. Then
          you’re faced with either shutting down your product, limping along
          with no change, or a hefty re-write.
        </p>
        <p>
          Some people face this challenge by picking the new, shiny technology.
          The thing they read that blog post about. Like a car, if I pick the
          newest model it will stay operational for longer. But that analogy
          doesn’t apply that well - the car model you pick may end up needing
          fuel you can’t buy and a type of road that no longer exists. And the
          doors no longer open.
        </p>
        <p>
          Other people face this by choosing an “enterprise” solution -
          typically something from an Adobe, a Microsoft or an IBM. This
          certainly offers stability, but it comes at a steep price. Not just in
          money you need to pay them, but also in the glacial pace of corporate
          innovation when compared with Open Source.
        </p>
        <p>
          There is a middle ground here. Picking Open Source makes a lot of
          sense - the rate of innovation and reliability is far better than a
          closed source approach. But it pays to look at the core development
          team, and how well they are working together. Do they have a solid
          record of releasing reliable updates? How engaged is the developer
          community? Are they helping the core team find and address issues, or
          is there a lot of inane squabbling and flame wars?
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-gray-light py-5 text-md">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3 class="mb-4">A short history of some recent technology dead ends</h3>
      </div>
      <div class="col-md-6 col-lg-4 ps-0">
        <h5 class="ms-4">Mambo</h5>
        <ul>
          <li class="mb-3">
            Released in 2001 - became a very popular open source CMS using PHP.
          </li>
          <li class="mb-3">
            Various awards and accolades such as best open source software, best CMS
          </li>
          <li class="mb-3">
            Hit with IP infringement lawsuits and security issues
          </li>
          <li class="mb-3">
            Internal squabble and Mambo splits into “Jango” and then “Joomla”. They start the same but begin to diverge.
          </li>
          <li class="mb-3">
            If your project was on Mambo, you’d need to get significant parts updated or rebuilt to keep up with all the changes.
          </li>
          <li class="mb-3">
            Mambo fizzles out in 2008, Jango in 2011 and Joomla is still going.
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-lg-4 ps-0">
        <h5 class="ms-4">Angular</h5>
        <ul>
        <li class="mb-3">
          Released in 2010, Angular was a very popular technology that helped
          developers create “front end” apps. These used asynchronous javascript
          to make changes happen in the browser incredibly quickly. This made
          user interfaces very responsive and fast.
        </li>
        <li class="mb-3">
          There were several similar projects, but Angular had the support of
          Google so it seemed like a solid technology.
        </li>
        <li class="mb-3">
          Version 2 came out in 2016 with all these cool new features, but with
          one drawback. No backward compatibility. So anything you had before
          had to be completely redone. Sticking on the old version means you’ll
          eventually fail security audits and have grumpy devs that don’t want
          to work on “old tech”.
        </li>
        <li class="mb-3">
          Angular skipped v3 (because) and went to v4, and then v5, which also
          failed to support much of an upgrade path.
        </li>
      </ul>
    </div>
    <div class="col-md-6 col-lg-4 ps-0">
      <h5 class="ms-4">Ember</h5>
        <ul>
          <li class="mb-3">
            First released in 2011, Ember is a javascript framework ideally
            suited to building single page applications that scale well.
          </li>
          <li class="mb-3">
            For the first few years, Ember was quite popular and used on a lot
            of different apps from Groupon to Linkedin. However the core
            development team seemed to have lost focus, and became slow in
            releasing updates.
          </li>
          <li class="mb-3">
            Open Source can be a fickle thing - and this one seems to have
            become like a party where everyone is thinking about going home. The
            community wasn’t particularly driven in one direction, and as a
            result not much changed. Developers stopped using it.
          </li>
          <li class="mb-3">
            In some ways Ember has the reverse of Angular’s problem - it has a
            stable code base but with no innovation. The rate of change has
            fallen well behind other similar javascript projects. If you’re the
            owner of an Ember project, you’re probably facing a complete rewrite
            in React or similar.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="bg-white py-5 text-md">
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 overflow-hidden">
        <h3><strong>Ruby on Rails</strong> release history</h3>
        <p>
          The core Ruby on Rails team is remarkably stable, both in makeup and
          their release schedule. Since v1 in 2005 they have kept to a reliable
          schedule of significant version updates around every 2-3 years,
          releasing smaller “dot point” upgrades along the way.
        </p>
        <a
          class="d-block text-truncate"
          href="https://en.wikipedia.org/wiki/Ruby_on_Rails#History"
          title="https://en.wikipedia.org/wiki/Ruby_on_Rails#History">
            https://en.wikipedia.org/wiki/Ruby_on_Rails#History
        </a>
        <ol>
          <li>2005</li>
          <li>2007</li>
          <li>2010</li>
          <li>2013</li>
          <li>2016</li>
          <li>2019</li>
        </ol>
        <h4 id="support-for-older-versions">Support for older versions</h4>
        <p>
          A lot of effort and planning goes into providing backward compatibility
          and support for older versions. The code base is remarkably stable,
          and the various changes between each version are clearly explained and
          reasoned. This is in contrast to some open source projects where a
          small, immature core team decided to “flip the table” and do radical
          change.
        </p>
        <h4 id="Is Ruby right for you?">Is Ruby right for you?</h4>
        <p>
          You're probably wondering if Ruby is right for your project. While
          there are many good reasons to choose Ruby it will ultimately depend
          on your specific goals and resources. If you're just getting started
          why not book in for a <a href="https://redant.com.au/free-initial-consult-code-review/" title="https://redant.com.au/free-initial-consult-code-review/">free initial consultation</a> to talk about your plans. If
          you already have an existing website, book in for a
          <a href="https://redant.com.au/ruby-on-rails-code-review/" title="https://redant.com.au/ruby-on-rails-code-review/">code review</a>
          to explore the strengths and options for your existing development.
          Helping start ups and existing companies understand their development
          options is what we do best.
        </p>
      </div>
    </div>

    <div data-controller="fake-news"></div>  
  </div>
</section>
