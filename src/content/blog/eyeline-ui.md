---
title: Eyeline UI
tagline: Out of sight, out of mind
date: 2025-01-21
image: posts/eyeline-ui/wow-cool.jpg
image_alt: The meme where someone is looking straight ahead and going "wow" while something shoots over their head.
image_style: normal
tags: ["computers", "design"]
---

Something I enjoy is when your focus doesn't have to jump around a whole bunch when using a computer program. One classic example of UI that honors the user's focus is the humble [float label](https://x.com/mds/status/1792569012905263143):

<!-- more -->

<video alt="A video of Apple's iCloud login screen, in which a form field has a label that says 'Email or Phone Number' that first hovers over the text input box but then moves out of the way to go above it." controls src="../../.../../../assets/posts/eyeline-ui/float-label.mp4"></video>

The label draws your eye directly to the form field you're supposed to fill in, and then it never has to move as you start to type in whatever you're typing. The placeholder text is instantly reused as the label. Genius.

Here's a slightly less conventional example from the home page of a website I once designed:

![A login form consisting of a button that, when clicked, unveils "username" and "password" form fields that accompany that same button](../../.../../../assets/posts/eyeline-ui/compact-login.gif)

The page has the "login" and "make account" buttons you'd expect the average web page to have when you're not logged in, but the "Login" button just unveils the necessary fields instead of taking you to a separate "login" page, and the button itself is instantly reused as the "submit login credentials" button. The focal point of the interaction (the login button) is held constant, while the things around it change.

In general, I prefer this approach over being put on a new page if it's not actually necessary; it's easier and faster than being sent to a login page and then right back to the page I was on, except logged in now. (Note that it usually requires keeping significant state on the client side to switch from the logged-out view to the logged-in view without refetching the page from the server.)

This is also why I made an in-place editor for the complicated spreadsheet i made to track research papers:

<video alt="One of a series of spreadsheet rows describing research papers expands to show a series of input fields for the paper's name, authors, tags, and so on." controls src="../../.../../../assets/posts/eyeline-ui/compact-spreadsheet.mp4"></video>

The easy way to handle that situation would have been to create a separate page, or even just a modal, in which the data for the paper could be edited. But that would involve a full UI context switch, and that wouldn't be as fun a way to edit weird nested data structures.

The first place I saw this kind of in-place data editing was on Trello, years ago (although access to their nested fields takes slightly more steps than with mine):

<video alt="A pencil icon is clicked on a card in a Kanban board full of Minecraft projects. The card's description, which reads 'Improve house interiors,' becomes editable, and buttons on the side show up that let you add things like dates and labels to the card." controls src="../../.../../../assets/posts/eyeline-ui/trello.mp4"></video>

You can see how this approach also keeps more context on screen for the user, with the content of the card remaining visible while you add dates and labels and stuff to it.

Here's another fun example of keeping something in context, on screen, for longer than you'd expect:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">fleeting thought <a href="https://t.co/0hDU49eIFF">pic.twitter.com/0hDU49eIFF</a></p>&mdash; saint laurent del rey (@laurentdelrey) <a href="https://twitter.com/laurentdelrey/status/1681321861106524162?ref_src=twsrc%5Etfw">July 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

(Sorry for the slow-loading Twitter embed.) I think part of the reason why I enjoy this trend is the creativity - it's fun to see UI [shapeshift](https://www.youtube.com/watch?v=y69gQtAdHKc&t=59s) in place to meet your needs, instead of just staying static.

<video alt="A very short clip from the movie Nimona, in which the protagonist transforms from a rhino, to an armadillo, to a bear, to a bird, to a meerkat, all while rapidly pushing one of the other characters down a hall." controls src="../../.../../../assets/posts/eyeline-ui/nimona-shapeshift.mp4"></video>
