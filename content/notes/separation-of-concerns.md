---
title: Separation of Concerns and State
publish_date: "2024-09-18"
description: This post is about two fundamental axes of code organization in programming projects.
---

"Separation of concerns" is one of those literary, smart-sounding terms that indicates some principle that programmers are supposed to follow. Unfortunately, as with closely-related terms like "modularity" or "encapsulation," it's easier to come up with bad examples that obviously ignore good advice than it is to specify what it means to follow these principles correctly.

If you create an app and it's one 10,000-line function, then you probably have not achieved much modularity, and your concerns are most likely not separated too well. But the nature of the good code that theoretically exists on the opposite end of the spectrum is harder to pin down. It's like trying to hammer out a universal definition of "beauty," or attempting to describe the mouthfeel of a Michelin star sushi roll. There are two main ways that I see "separation of concerns" applied, and unfortunately they're somewhat orthogonal to each other, and it's not obvious that either is "right."

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

## Geological Strata: The Homogenous Layers Approach

The first paradigm, the one that splits up content and presentation and client and server, consists of layers of code that are in some way homogenous. Each layer might have its own language; it almost certainly has its own specific vocabulary in that language. It might be implemented by splitting code up into HTML and CSS; it might also consist of something as simple as putting all your schemas for validating request bodies in one file and importing them in each request handler in which they're used.

<!-- todo: more approachable example of a within-request layer. grouping all your database query functions together? -->

<!-- image of app with horizontal slices. ideally this would be an image of labeled layers of rock  -->

## Fault Lines: The Continental Approach

Or, on the other hand, you could divide up your code the other way - group code so that each thing responsible for one specific page, or API route, or whatever is grouped together. A very basic and very impactful example of this approach is Next.js' file system-based routing. It used to be that you'd have an HTML file, a JavaScript file, and a CSS file; now those elements are mixed together, but you literally have one file for each page and each basic API request that can be viewed or made.

<!-- wtf did i write here: If this code is responsible for handling an HTTP request for a user object, the request body validation schema, the database calls to get the user, the function for filtering out the plaintext password from the user object, the function to calculate the appropriate greeting for them based on their demographic data and social status, the code that generates a message formatted according to the HTTP 1.1 protocol, and the network card device driver that sends packets out over the wire are all in the same place. -->

<!-- image with fault lines separating new, different labeled layers -->

<!-- you could also call these "silos" compared to "layers of the stack" -->

<!-- or "modularity" instead of "separation of concerns" -->

## The Ultimate Question: How To Organize Code

generally a good idea to organize code by putting units thereof next to other units that will use them. often this will be influenced by the type of technology they use. database schemas for different tables go next to each other in part just because tables reference each other. this creates a small amount of natural stratification by itself. on the other hand, the homogeneity approach can be a trap where you're debugging one thing and it touches 5 million files. also, you might end up trying to separate things, like content and presentation, that aren't actually separate, and the tailwind guy will find you and kick your ass. also, you can't have packet-sending code in your page file. abstract out layers - but only where you actually can!

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
