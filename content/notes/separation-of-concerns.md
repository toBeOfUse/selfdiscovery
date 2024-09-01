---
title: Separation of Concerns and State
date: 2024-07-13
description: This post is about two fundamental ways that we organize code in programming projects.
---

"Separation of concerns" is one of those literary, smart-sounding terms that indicates some principle that programmers are supposed to follow. Unfortunately, as with closely-related terms like "modularity" or "encapsulation," it's easier to come up with bad examples that obviously ignore good advice than it is to specify what it means to follow these principles correctly.

If you create an app and it's one 10,000-line function, then you probably have not achieved much modularity, and your concerns are most likely not separated too well. But the nature of the good code that theoretically exists on the opposite end of the spectrum is harder to pin down. It's like trying to hammer out a universal definition of "beauty," or attempting to describe the mouthfeel of a Michelin star hot dog. There are two main ways that I see "separation of concerns" applied, and unfortunately they're somewhat orthogonal to each other, and it's not obvious that either is "right."

## Web Development Used To Be Simple

If you're working in web development, you will have noticed that things like business logic, display logic, markup, data fetching, authentication and authorization, and sparkly text decorations freely mix. (If you just work on writing device drivers in C all day, you probably don't have to think about these concepts as hard. (If I'm wrong about this, I'd love to hear about it.)) Some of us remember when a very simple form of organization was in force. Code was separated out according to whether it corresponded to "content," "presentation," or "logic." It was easy to tell which part of the code was which, because each concern was addressed by a different language. The HTML created the content, the CSS established the styling, and the JavaScript added interactive functionality.

<!-- TODO: color-code the content, presentation, and logic elements of each of these -->

<img src="/notes/separation-of-concerns/html-css-js.svg" style="width: 90%; height: auto" />

This paradigm has been almost uniformly abandoned. If you look at the average React project these days, you'll probably see something more like this:

<img src="/notes/separation-of-concerns/react-component.svg" style="width: 90%%; height: auto" />

Content, presentation, and logic are freely mixed! What happened to separation of concerns?

## If as one people speaking the same language they have begun to do this...

Once upon a time, the code that ran on the server and the code that ran in the browser lived in different universes. The server code that was responsible for user sessions and data wrangling was probably written in PHP or Python and communicated with the client code via form submissions or perhaps XHR calls.

In this case, though, every TypeScript developer already knows the advantage of writing the server and the client of a full-stack web application in the same language: you can reuse code that you created for one end on the other. You can request a user object from the backend and use the same type definition as the backend to describe it, and even import functions that might be useful in backend code to check the user object's authorization or serialize and deserialize user data to and from cookies.

If the code on the frontend and the backend are both interacting with similar types of data, aren't they addressing similar concerns? Isn't "figure out who the user is and use that information to greet them" a single, specific concern? This is orthogonal to the categorization that, on a technical basis, classifies "look the user up in the database" and "display the user's name with a little 'Hello' and a their favorite emoji next to it" as separate concerns that should logically be handled by different parts of the code.

## Geological Strata: The Homogenous Layers Approach

The first paradigm, the one that splits up content and presentation and client and server, consists of layers of code that are in some way homogenous. Each layer might have its own language; it almost certainly has its own specific vocabulary in that language. It might be implemented by splitting code up into HTML and CSS; it might also consist of something as simple as putting all your schemas for validating request bodies in one file and importing them in each request handler in which they're used.

<!-- image of app with horizontal slices. ideally this would be an image of labeled layers of rock  -->

## Fault Lines: The Continental Approach

Or, on the other hand, you could divide up your code the other way - group code so that each thing responsible for one specific page, or API route, or whatever is grouped together. If this code is responsible for handling an HTTP request for a user object, the request body validation schema, the database calls to get the user, the function for filtering out the plaintext password from the user object, the function to calculate the appropriate greeting for them based on their demographic data and social status, the code that generates a message formatted according to the HTTP 1.1 protocol, and the network card device driver that sends packets out over the wire are all in the same place.

<!-- image with fault lines separating new, different labeled layers -->

<!-- you could also call these "silos" compared to "layers of the stack" -->

## The Ultimate Question: How To Organize Code

generally a good idea to organize code by putting units thereof next to other units that will use them. often this will be influenced by the type of technology they use. database schemas for different tables go next to each other in part just because tables reference each other. this creates a small amount of natural stratification by itself. on the other hand, the homogeneity approach can be a trap where you're debugging one thing and it touches 5 million files. also, you might end up trying to separate things, like content and presentation, that aren't actually separate, and the tailwind guy will find you and kick your ass. also, you can't have packet-sending code in your page file. abstract out layers - but only where you actually can!

<!--

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

- finally: one ten-thousand line function

-->
