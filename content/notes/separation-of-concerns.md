---
title: Separation of Concerns and State
publish_date: "2024-09-18"
description: This post is about two fundamental axes of code organization in programming projects.
---

"Separation of concerns" is one of those literary, smart-sounding terms that indicates some principle that programmers are supposed to follow. Unfortunately, as with closely-related terms like "modularity" or "encapsulation," it's easier to come up with bad examples that obviously ignore good advice than it is to specify what it means to follow these principles correctly.

If you create an app and it's one 10,000-line function, then you probably have not achieved much modularity, and your concerns are most likely not separated too well. But the nature of the good code that theoretically exists on the opposite end of the spectrum is harder to pin down. It's like trying to hammer out a universal definition of "beauty," or attempting to describe the mouthfeel of a Michelin star sushi roll. There are two main ways that I see "separation of concerns" applied, and unfortunately they're somewhat orthogonal to each other, and it's not obvious that either is "right."

<!-- talk version: folks, idk if you've noticed, but we're not allowed to just be software engineers anymore; we have to be intellectuals. you can't log into linkedin without tripping over a rickety pile of syllables like "separation of concerns." what does separation of concerns mean? anyone? -->

## One Language Per Concern

Unfortunately, we're going to illustrate this by talking about web development. But don't worry, we're going to start simple, with an example of how things worked in the good old days. Some of us remember when a very simple form of organization was in force. Code was separated out according to whether it corresponded to "content," "presentation," or "logic." It was easy to tell which part of the code was which, because each concern was addressed by a different language. The HTML created the content, the CSS established the styling, and the JavaScript added some interactivity.

<img src="/notes/separation-of-concerns/html-css-js.svg" style="width: 90%; height: auto; margin: 0 auto;" />

Surely, this is the ultimate example of separation of concerns! The whole codebase is divided into three different languages, and these three concerns are appropriately addressed.

This paradigm has been almost completely abandoned. If you look at the average React project these days, you'll probably see something more like this:

<img src="/notes/separation-of-concerns/react-component.svg" style="width: 90%; height: auto; margin: 0 auto;" />

Content, presentation, and logic are freely mixed! What happened to separation of concerns? The concerns are still there, but they're not exactly separated, are they?

<!-- come back to the export function MyPage as the key to the concerns being addressed -->

## If as one people speaking the same language they have begun to do this...

Obviously, that initial neatness is a little bit of an illusion. There's at least, like, one more layer to this, which is that when you're making a web app, you probably have a server application that serves your web pages and lets you request and re-request content to put on them, and that server application is perhaps also written in yet another different programming language: PHP, Java, Python... and this kind of fits with the one language, one concern idea: you can write a Python API to deal with storing data in a database and consolidating sharing data entered by different users and other server-side-type concerns. The server stores and retrieves information about the user, and then the client-side layers described above express, present, and liven up that content.

But a big story in web development over the last decade or so is the rise of Node.js. We can trace its rise via the Stack Overflow Developer Survey; it went from 10-15% of web developers using it [in the survey's early years, about a decade ago](https://survey.stackoverflow.co/2015#tech-lang), to peaking with 50% of them using it in 2020, to [still being the single most popular web technology in 2024](https://survey.stackoverflow.co/2024/technology#most-popular-technologies-webframe), with no other server-side technology really coming close.

And the appeal of Node.js is basically that it de-separates concerns. It removes that other language, and lets you write JavaScript that stores stuff in databases or whatever; and it lets you call the exact same functions in the code running in the user's browser that you can call on the server. With new full-stack frameworks, like tRPC or Next.js server actions, the fact that some of your code is running on the server and some is running on the client almost disappears, or at least that's the idea.

In web development, some of the code is running on [some server in Virginia that Amazon owns](https://www.aboutamazon.com/news/aws/aws-data-center-inside), and some of it is running in the background of mobile Safari on someone's grandma's iPhone SE in a vacation home in Maine, and the fact that it can be actively hard to figure out which code is running on that server and which is running on that client when reading code written for a modern Node.js-based framework like Next.js is a considerable testament to how de-separated concerns have gotten in web development. We're no longer in the same universe as the one-language-per-concern approach.

Why is this approach so popular, and rising? What happened to the old way of organizing code?

## Geological Strata: The Pangaea Approach

The first paradigm, the one that splits up content and presentation and client and server, consists of layers of code that are in some way homogenous. Each layer might have its own language; it almost certainly has its own specific vocabulary in that language. You might fall into it by splitting code up into HTML, CSS, JavaScript, and Python; you might end up using it by having a frontend, a backend, and a database; or you might implement it yourself by splitting the "create a page for the user to look at" process into steps and grouping the code for each step. This is the kind of organization that is pointed to by the concept of a technology stack.

<!-- image of app with horizontal slices. ideally this would be an image of labeled layers of rock. put diagrams of stacks like lamp, mern, etc next to it  -->

## Fault Lines: The Continental Approach

Or, on the other hand, you could divide up your code the other way - group code so that each thing responsible for one specific page, or API route, or whatever is grouped together. A very basic and very impactful example of this approach is Next.js' file system-based routing. It used to be that you'd have an HTML file, a JavaScript file, and a CSS file; now, as we've seen, those elements are mixed together, but you literally have one file for each page and each basic API request that can be viewed or made.

In the old model, separation of concerns is applied to \*technical\* concerns; code is organized and architected so that the backend code that addresses shared data and persistence is separate from the frontend code that addresses organization and presentation, and even the content is separate from the code that makes it interactive, since static content and dynamic content were kind of considered separate technical concerns.

In the new model, separation of concerns is applied to \*logical\* concerns.

<!-- TODO: contrast this model with the other. say "in that paradigm, the concerns to be separated are the technical ones: the 'content' concern, the 'presentation' concern, and the 'logic' concern; but in this paradigm, the concerns are 'show the user a login page', 'show the user the home page', 'respond to a password reset request', etc." -->

<!-- image with fault lines cracking the top few layers. each new "island" has a name like "home page", "login page", etc -->

<!-- you could also call these "silos" or "pipelines" compared to "layers of the stack" -->

<!-- or "modularity" instead of "separation of concerns" -->

## The Case For Fault Lines

<!-- story about routing. logical dependency prevents separation of concerns from working - nothing gets abstracted away. you just build a new structure in a different place that mirrors the other structure. it's the same thing as happens with css classes if you're not careful, as illustrated in the blog post explaining tailwindcss. tailwind is a weird example though since you end up with such granular pieces - it's like the "show the user a div" concern gets split up into many concerns, about layout and border and background and text color, etc. but for the blog post, would still be nice to be all like "here's why the content vs. presentation separation doesn't really work" in a more compact way than the tailwind blog post managed -->

<!-- de-separating concerns usually means trying to abstract them away. even content vs. presentation attempts to abstract away presentation - look at the CSS garden. many technical concerns can be abstracted away, especially these days - even us-east-1 vs iphone se. that's why the layers of the stack work relatively well. user-centric concerns can't be abstracted away, and you should not try. ideally, focus on implementing the greatest number of user concerns, not the fewest. technical abstractions are kind of crazy - why do none of us know how databases work? -->

## The Case For Continents

<!-- microservices are the ultimate islands and they make things really complicated. -->

## What You're Deciding

When you organize code or architect a system, what you're ultimately deciding is which layers will live in the bedrock and be shared across the different entrypoints and paths through your code, and which layers will be separate and contained within their own islands.

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
