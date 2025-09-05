---
title: Separation of Concerns and State
publish_date: 2024-09-18
description: This post is about two fundamental axes of code organization in programming projects.
---

<!-- a much more condensed version of this post is now published, but i'm keeping this content here for historical purposes -->

"Separation of concerns" is one of those literary, smart-sounding terms that indicates some principle that programmers are supposed to follow. Unfortunately, as with closely-related terms like "modularity" or "encapsulation," it's easier to come up with bad examples that obviously need some refactoring than it is to specify what it means to follow these principles correctly.

If you create an app and it's one 10,000-line function, then you probably have not achieved much modularity, and your concerns are most likely not separated too well. But the nature of the good code that theoretically exists on the opposite end of the spectrum is harder to pin down. It's like trying to hammer out a universal definition of "beauty," or attempting to describe the mouthfeel of a Michelin star sushi roll. There are two main ways that I see "separation of concerns" applied, and unfortunately they're somewhat orthogonal to each other, and it's not obvious that either is "right."

<!-- talk version: folks, idk if you've noticed, but we're not allowed to just be software engineers anymore; we have to be intellectuals. you can't log into linkedin without tripping over a rickety (teetery?) pile of syllables like "separation of concerns." what does separation of concerns mean? anyone? -->

## One Language Per Concern

Unfortunately, we're going to illustrate this by talking about web development. But don't worry, we're going to start simple, with an example of how things worked in the good old days. Some of us remember when a very simple form of organization was in force. Code was separated out according to whether it corresponded to "content," "presentation," or "logic." It was easy to tell which part of the code was which, because each concern was addressed by a different language. The HTML created the content, the CSS established the styling, and the JavaScript added some interactivity.

<img src="/notes/separation-of-concerns/html-css-js.svg" style="width: 90%; height: auto; margin: 0 auto;" />

Surely, this is the ultimate example of separation of concerns! The whole codebase is divided into three different languages, and these three concerns are thereby addressed.

But this paradigm has been almost completely abandoned. If you look at the average React project these days, you'll probably see something more like this:

<img src="/notes/separation-of-concerns/react-component.svg" style="width: 90%; height: auto; margin: 0 auto;" />

Content, presentation, and logic are freely mixed! What happened to separation of concerns? The concerns are still there, but they're not exactly separated, are they?

## If as one people speaking the same language they have begun to do this...

Obviously, that initial neatness is a little bit of an illusion. There's at least, like, one more layer to this, which is that when you're making a web app, you probably have a server application that serves your web pages and lets you request and re-request content to put on them, and that server application is perhaps also written in yet another different programming language: PHP, Java, Python... and this kind of fits with the one language, one concern idea: you can write PHP that interfaces with a database, and shares state between clients, and other server-type stuff. Then the client-side layers described above express, present, and liven up that content. You're probably using some kind of templating system to inject server-fetched data into the HTML, but everything's still pretty separate; that just introduces a slightly different language-based layer.

But a big story in web development over the last decade or so is the rise of Node.js. And to simplify a little, the appeal of Node.js is basically that it de-separates concerns. It removes that other language, and lets you write JavaScript that interfaces with databases; it lets you run the exact same function in your server application or in the user's browser. With new full-stack libraries and frameworks, like tRPC or React's Server Actions, the fact that some of your code is running on the server and some is running on the client almost disappears, or at least that's the idea. (You can use Node.js as just a backend server, or as just a development environment for your frontend components for your SPA, but that kind of usage has gotten a lot rarer.)

[Next.js App Router Slide](https://www.reddit.com/r/nextjs/comments/17hgtrt/so_whats_the_deal_with_the_code_on_this_been/)

In web development, some of the code is running on [some server in Virginia that Amazon owns](https://www.aboutamazon.com/news/aws/aws-data-center-inside), and some of it is running in the background of mobile Safari on someone's grandma's iPhone SE in a fishing shack in Maine, and the fact that it can be actively hard to figure out which code is running on that server and which is running on that client when reading code written for a modern Node.js-based framework like Next.js is quite the testament to how de-separated concerns have gotten in web development. We're no longer living in the same universe as the one-language-per-concern approach.

<!-- talk version: circle the client and server side parts of the above code with separate colors as i go -->

Why is this approach so popular, and rising? What happened to the old way of organizing code?

## Geological Strata: The Pangaea Approach

The first paradigm, the one that splits up content and presentation and client and server, consists of layers of code that are in some way homogenous. Each layer might have its own language; it almost certainly has its own specific vocabulary in that language. You might fall into it by splitting code up into HTML, CSS, and JavaScript; you might end up with it just by having a frontend, a backend, and a database; or you might implement it yourself by splitting your route handler up into middleware that handles HTTP requests in a series of isolated and consolidated steps. This is the kind of organization that is pointed to by the concept of a technology stack.

<!-- image of app with horizontal slices. ideally this would be an image of a cross section of a continent (but one with a simple shape, like Australia) with labeled layers of rock. put diagrams of stacks like lamp, mern, etc next to it  -->

## Fault Lines: The Island Chain Approach

Or, on the other hand, you could divide up your code the other way - group code so that all the parts responsible for one specific page, or component, or API route are kept together. A very basic and very impactful example of this approach is Next.js' file system-based routing. It used to be that you'd have an HTML file, a JavaScript file, and a CSS file; now, as we've seen, those elements are mixed together; instead, in Next.js, which is a pretty significant Node.js-based full-stack framework, the top-level unit of organization for code is the page, not the programming language. Even server-side functions can be placed in the same file as the frontend code for the page that calls it.

<!-- remember, this was the actual insight: -->

In the old model, separation of concerns is applied to \*technical\* concerns; code is organized and architected so that the backend code that addresses concerns like "storing data in files in a file system" is separate from the frontend code that addresses "defining the layout and content that the browser needs to display on the page," and even that content is separate from the code that makes it interactive, since static content and dynamic content were kind of considered separate from a technical perspective.

In the newer one, separation of concerns is applied to \*logical\* concerns; frontend code is separated into components, so that the header component with little dropdown menus that you can hover over is separate from the modal component that pops up to ask you to enter your social security number to subscribe to the site's email newsletter. Those two types of component represent two very different, specific goals that a page might need to achieve, and most likely have almost no code and logic in common. Under the new paradigm, those components are pretty self-contained and isolated from each other; under the old paradigm, those parts of the page might be split up into HTML, CSS, and JavaScript that lives with some random other HTML, CSS, and JavaScript.

Code is also heavily split at the page level these days, to the point where every page and API route in your program might be effectively treated like an individual program. All the islands probably do share some bedrock underneath, in terms of the basic HTTP server and the database, but that's not the parts you usually think about.

<!-- image with a cross-section of an island chain, like the continent above, but with clearly separated islands that only share a few layers of bedrock under the water. each has a name like "home page", "login page", etc. it has rocks on it that represent different components, like Header and Navbar and Slider -->

<!-- fuck, should components be above or below pages? pages are top-level in the filesystem and from a deployment standpoint, but sub-page components are top-level in the code -->

<!-- you could also call these "silos" or "pipelines" compared to "layers of the stack" -->

<!-- define concerns as things that cause groups of things that need each other, very specifically each other? are coupled? are dependent on each other? database can be a separate concern, because you can theoreticaly use any database and it will do about the same stuff. modal and navbar can be a separate concern, and even homepage can be a separate concern, because they could all be replaced relative to each other.  -->

## The Case For Fault Lines

So, why is this such a common approach? Let me tell a quick story about some code I stumbled across at work. I was getting redirected back and forth between some pages when I wasn't expecting to be, but I couldn't find any redirect code in the pages I was looking at themselves. Eventually, I figured out that every page was calling a function called `isAuthorized`, and that function was trying to figure out if I was allowed to be on a page based on my user account and triggering redirects if not. What that function was trying to do was abstract away the concern of "should the user be on the current page, and where should they go if not;" but in practice, it consisted of a bunch of if statements going like, "if the current URL is the one for this one particular dashboard, check this cookie, and if it says this, redirect them here. if the current URL is this other particular dashboard, check this cookie, and redirect them over there if it doesn't exist." And so on.

The problem was that that setup did not sufficiently abstract away the concern of "figure out what page the user should actually be on." It moved it out of the way, so you didn't have to see that logic whenever you had to look at the code for the page, but it also made it so that you had to actively go looking for that logic whenever something went wrong: which would happen whenever a page's URL changed, or if we decided that different permissions were required to see a given thing. It was still a very concrete, unignorable concern; just one that was slightly more inconvenient to go and address.

<!-- remember, this was the other actual insight: -->

Technical concerns are very susceptible to being abstracted away, a phrase which here means that you don't have to think about how they work. Databases are a prime example of this: the technical concern of "how does persistent data get stored and retrieved an efficient way" is one that is touched on by almost every part of every app, but basically no one needs to worry about how it's implemented on a technical level. It becomes an abstraction, a word that here means something that exists only as a concept, not a demanding technical cause area. Similarly, as we've said, modern Node.js frameworks have made incredible progress towards abstracting away the technical differences between a server in a data center and an iPhone in Idaho, so that your frontend components can pretty easily be rendered on either device, and your server-side code can return data to the client almost invisibly.

Logical concerns are different. One could make a pretty decent argument that you should not even want to abstract "is the user allowed to be on the current page" away; it's something that you kinda have to think about, in detail. If you try to abstract it away, what you'll probably do is create another tiny little layer on your stack, but the structure and the divisions of that layer will mirror the structure and divisions of the pages themselves. The two layers will still be coupled and still essentially depend on each other, in needing to mirror each other; all you've done is split the code up between two different places, kind of like how you were supposed to split up the HTML, CSS, and JavaScript for the same parts of the page back in the old days. (This is the same kind of uncomfortable back-and-forth mirroring that led to Tailwind CSS, according to [his blog post](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) where he dissected "separation of concerns" from the perspective of coupling and dependencies in his workflow.)

So, the case for splitting things up based on logical concerns is that consolidating code so that the parts that logically need to work together are stored together, like the HTML, CSS, and JavaScript for a specific header component, makes sense, and that abstracting logical concerns away like technical ones doesn't really work, so there's really no advantage to trying. There are even technical opportunities that you get by addressing logical concerns individually. Serverless cloud providers like Vercel or AWS Lambda use logical separation of concerns to deploy each page and API endpoint of an app as a separate small program, instead of grouping them together on a technical basis into a single HTTP server application, so that they can be started up and deployed in as many instances as you want to wherever you want to deploy them to at a moment's notice, which allegedly is a great way to optimize your use of computing resources (although the increased complexity and the continued need for centralized resources like databases sometimes doesn't make it worth it.)

## The Case For Continents

It's probably possible to go to far with this whole thing. Microservice architectures usually involve different logical parts of a website's backend being literally written to be separate programs that communicate with each other over a network to coordinate and accomplish tasks. It sounds kinda cool to me, but from what I've seen online, it can get really complicated.

## What You're Deciding

When you organize code or architect a system, what you're ultimately deciding is which layers will live in the bedrock and be shared across the different entrypoints and paths through your code, and which layers will be separate and part of their own islands. Userwise units like components and pages are typically pretty separated across an app; highly technical parts like databases are usually shared across an app; the details are up to you. What hidden layers will you create, and what details will you bring to the surface?

<!--

i think "modularity" is the islands-axis and "separation of concerns" is the layers-axis

## Top Ten Stimulating Ways to Organize Your Code

- put all the functions in one file
- put all the classes in one file and their method definitions in another. methods can be defined apart from the classes
- put all your imports in one file and then import that file with * in all the other ones
- put all your imports in an array and loop over it?
- create pure functions, except when they need to have side effects, create a dedicated impure function to contain one function's side effects
- slice mortgage-backed securities into tranches that look way more reliable than they are. don't worry, this won't have any externalities
- write all your performance-critical code in C or assembly assembly and import it with that magic import for bun. write the code where you don't need to care about performance in perl and import that too
- how else could you artificially cause code to be divided up based on language. always use R for stats, python for ML, rust for threading, Java for data structures?
- two really big classes: one for input, one for output
- store every symbol as a key in a dict where the value is the file it's in so that it can be automatically imported from the right place. that way you only have to update one place if you move a thing from one file to another
- can you split up expressions and statements? additions and subtractions? while loops and for loops?
this could at some point become kind of mean making fun of the "homogenous layers" approach.
- what would the least homogenous layers look like? one full stack for each div on the page, complete with its own backend and database instance? the client-side responsible for taking the output of each server, maybe identified by a data- property on each div, and putting it in the divs on the page?

- and the top one way to organize your code: one ten-thousand line function

basic next.js app that stores to-do lists, except whenever you create a new one, it spawns a docker container with a server for that day's to-do list, which has some specific output port (each server serves on 3000 inside the container, and just maps to a different port specified by the docker run command) and the next.js app makes an iframe that showcases what is rendered by that server. each container can be based on a different image; it's like a collage. how long does it take to start a docker container like that? how much do i need to fill while that's happening.

dockerfile -> docker buildx -> docker image -> running container

-->

## Acknowledgements

This blog post was very much inspired by [this brief description of the design decisions behind Vue 3](https://vuejs.org/guide/extras/composition-api-faq.html#more-flexible-code-organization), although I had completely forgotten the term "logical concerns" over the years and thought that I invented it while writing this post, as well as the above-linked [blog post](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) about TailwindCSS, and my coworker Ryan, who wrote the `isAuthorized` stuff.
