---
title: Why Enterprise SaaS Sucks
tagline: Dysfunction at different levels of abstraction.
date: 2026-02-02
tags: ["work"]
---

<!-- Different levels of abstraction and an introduction to the higher ones. Examples of executive memos. The idea that leadership just exists to pass down values (the highest-level goals of all). Peter Jackson's initiatives; movie directors are executives too. The initial fun-seeming idea for a project. -->

The job of software is to present abstractions over a bunch of really complicated code and hardware.

Computers exchange information using millions of quick electronic interactions that are transmitted by [Tier 1 network providers](https://en.wikipedia.org/wiki/Tier_1_network) that you may have never heard of, using millions of miles of cables that you might never see, but the piece of software known as "Outlook" makes it so that when you look at your computer, you just see emails. That list of emails is an "abstraction," which means "a version of something that's simplified to make it easier to fit in people's brains."

Email exists at many "levels of abstraction;" you can think of it as electronic signals propagating over cables (which is a low level of abstraction, of which I have very little understanding), as TCP traffic between machines using specific ports and mail transfer protocols (which is a slightly higher level of abstraction that I mostly get), or you can think of it as a bunch of new posts from Substack and Patreon, requests to donate to political campaigns, and alerts about outages from hosting providers (which is a quite high level of abstraction that I can easily use to understand my email inbox right now.)

Here's something simple with a lot of implications: Companies tend to be led by people operating at quite high levels of abstraction.

<!-- more -->

I don't know if Satya Nadella, the CEO of Microsoft, has a low-level understanding of how TCP works, but I know for a fact that he can't afford to spend much of his time worrying about it. If he thinks about Outlook at all, he has to worry about the enterprise customers who want to use Outlook; the resources within Microsoft that have to go into maintaining it; and the relationship it has to the rest of the Microsoft 365 Copilot Suite. You know, the high-level concerns. Someone else will worry about the technical infrastructure and where you have to right-click to mark all of the emails in your inbox as read without actually reading them. You can see a lot of this high-level thinking in [this collection of internal memos](https://sriramk.com/memos.html), where people in leadership positions abstractly compare computers to tractors and contemplate how to save the Internet.

Another example that I like to give is the role of the director of a movie. The director will probably have lots of control over the script and the performances, but the details of things like costuming, lighting, and even shot composition are left to others, who will ideally take that high-level vision and fulfill it. Peter Jackson [gave a speech](https://www.youtube.com/shorts/FqT5jmTLPOc) to the design crew of the Lord of the Rings movies where he said that he needs them to think about their work as if they were depicting real events from history; as if everything needed to be accurate to that actual time period; and as if they were shooting on the locations where these events actually happened. To ask people to forget that they're working on a fantasy movie at all is to invoke an extremely high level of abstraction. What could go wrong?

## The View From Up Top

<!-- The view from the peak - the minimum execution it takes to sell a product from high levels of abstraction (the e-commerce example). The product promises `x`. You use it and get `x - y`.

- You kind of just need a demo. Wizard of Oz it.
- A common experience: CodeSquish -->

Here is an experience that I've participated in multiple times, and that I believe is [distressingly](https://matduggan.com/stop-trying-to-schedule-a-call-with-me/) [common](https://news.ycombinator.com/item?id=42669754#42670301):

1. You're looking for a SaaS platform that will handle some boring thing that you don't want to build yourself, like storing a product catalog for an e-commerce platform.
2. You pick one and have a long series of meetings with salespeople, sales engineers, and customer success experts. You see demos that showcase functionality that looks like it's exactly what you need.
3. You sign a contract to pay huge piles of money for the platform, start to use it, and it sucks.

At a high level of abstraction, the platform is exactly what you need. It has a fancy wizard for importing products; it divides them up by seller and by shipping method; and it makes the data available through an API for display on your site.

At a slightly lower level of abstraction: the import wizard expects the product data to already be in a very specific spreadsheet format, so you have to convert it yourself before uploading it; it can't handle dynamic shipping prices, so you need to build a separate integration for your site so that you can figure out what USPS will actually charge; and the API endpoints that expose product data have low rate limits, so that you need to store a secondary, cached copy of the product data in a separate database that you can access dynamically for display purposes.

It eventually ends up very hard to look at the implementation level and figure out what value that platform is providing. At a high level, you can still say things like "it provides a single source of truth for our product catalog." At the implementation level, the data that directly gets displayed comes from a separate database, you have to wrangle a bunch of disparate formats into one, and you have to augment it using a whole bunch of other services to make it useful. It's disappointing, and doesn't sound that much like having a single source of truth. It's like what would have happened if Peter Jackson had asked the people working for him on Lord of the Rings to pretend they were depicting real historical events, and they'd literally stopped working on designing original costumes.

The reason that software like this survives is that the decision to buy it is made at a very high level: the executive level. The demos look good, the features are (technically) there, and there are probably a bunch of other businesses that are using the software already. [What is there for an executive to say no to?](https://ludic.mataroa.blog/blog/brainwash-an-executive-today/) They're probably already picturing the next offsite retreat, where they'll be congratulated by their slightly more junior peers for solving business problems by applying software in a way that few others could.

And it's just not that difficult to market to people at that level. A friend and I have been working on [an app deployment framework](github.com/internet-golf/internet-golf) that would be easy to sell to vibe coders as "this lets you run your app on a server just like you run it locally," and it wouldn't be hard to create a simple example where that's true. Unfortunately, I would need to figure out a bunch of stuff about secrets, environment variables, asynchronous API calls, and authorization to fulfill that promise for practical use cases. "Make it as easy to run an app on a server as it is to run it locally" is a single line item on the executive bill of materials; it breaks down into a hundred lines when someone has to actually implement it. It's easy to see why not everyone bothers.

## The View from Halfway Down

<!-- Contrasted with the view from the trough - the execution it takes to actually fulfill a high-level vision (the deployment platform example) -->

<!-- A fundamental conflict: goals are different, since ordinary employees inevitably just want to see through whatever they're working on now. Executive goals seems strange and alienating since they come from such rarified air and are often fairly substanceless: single line items on the executive ledger become a million line items when it comes time to implement them. But none of the million implementation line items matter unless they serve line(s) on the executive invoice. Vision without execution results in frustration and futility. Execution without vision results in something that isn't sustainable or that no-one actually wants. -->

Unfortunately, I do believe this: there is no "correct" level of abstraction to look at things with. Emails are both the electrons and the election fundraising pleas. Both the vision and the execution for the software need to be solid.

It's common for people, at least in tech, to try to start businesses with no real high-level idea of how things will work out; they just want to focus on the implementation level, i.e. building something. I've been to startup incubator pitch sessions where people stumble when asked about their revenue model, and just want to talk about their cool platform that lets people plan events or set up playdates for their pets or whatever. I've worked with people who just want to create what feels right to them, and end up implementing stuff like a bespoke notification system that's interesting and makes sense and, at a high level, adds nothing to the user experience over sending a simple email.

It would be easy for the app deployment platform I'm working on to turn into something like Dokploy or Coolify, which mostly just try to clone the functionality of existing deployment options like Netlify or Vercel. Maybe it still will. Open source software, in general, is not great about having its own executive direction; that's why the most popular stuff there has always been things like clones of Photoshop and Microsoft Word. The high-level concerns are already taken care of, on a project like that; someone just needs to tackle the implementation, and there are plenty of people excited to do that.

And the high-level vision and the mid-level implementation have to match each other. Even if your company has a unique, spectacular twist on the concept "Uber for dog-walking," in my experience, it's easy for the implementation level to miss that and just implement whatever [Swifto](https://swifto.com/) was doing already.

<!-- I find myself caught in the middle on these things. My experience is that this duality leads to classic conflicts of people not seeing each other's point of view; the different bills (or whatever has line items) are obscured to each other. But the important thing is to recognize that this conflict comes from people performing fundamentally different roles; both are useful, even though trying to perform both as one person hurts. -->

I find it useful to understand this in terms of _roles_; both the executive role and the implementation role are important. It's fairly difficult to do both, so it makes sense for some people to specialize. In software, the engineers will hate the executives for being out of touch and not understanding all the difficult problems they're solving for at the software level, and the executives will scorn the engineers for being petty and spending so much time on stuff that's not even central to the unique selling point of their product, and that's the way it is. Everyone's playing their role.

Avoid enterprise SaaS where you can, though.
