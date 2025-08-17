---
title: Small Static Sites
date: Ongoing
description: Small sites I've created.
images:
  - url: /word-clock.png
    alt: A grid of pixellated words in dark blue letters on a black background. Highlighted in white are the words "Quarter Past Twelve AM"
  - url: /doa-comment-tracker.jpg
    alt: A web page with a heading reading "Dumbing of Age Patreon Posts. This page takes the information you can already get by scrolling through the Patreon feed (whether you're subscribed or not) and makes it more sortable and kinda searchable." Below that, a table showing a series of links with columns for comments and likes.
  - url: /corn.jpg
    alt: A 3D model of a corncob with some kernels missing. A mouse cursor hovers over an intact kernel. "4.13% eaten," says a status bar at the top.
---

There are a number of smaller, more static apps I've put up that I still think are notable:

- **[Word Clock](https://word.clock.uwu.enterprises):** This is a JavaScript port of [an Apple II app](https://github.com/a2-4am/word-clock/) that displays the time using words. I translated the original 6502 assembly to run on the modern web because emulated versions of the app tend to fall out of sync with the actual time. Bonus: [here](https://word.clock.uwu.enterprises/test.html) is a test page that renders every possible state of the clock.
- **[Nine Houses Quiz](https://housequiz.uwu.enterprises):** This is an interactive Svelte version of a quiz created by the author of the popular Locked Tomb book series. I shared it on social media and it has been taken well over a thousand times.
- **[Patreon Comments Tracker](https://doa-patreon-comment-tracker.val.run/):** When a webcomic that I follow was going through a major new plot development, I built a scraper and a data table that could sort posts from Patreon by the number of comments and likes that they received to track the amount of activity that was being generated. This was used by the author for reference, since apparently not even he can could sort posts this way using Patreon's tools. This uses the excellent serverless deployment platform [val.town](https://val.town/) and no client-side JavaScript.
- **[Corn Simulator](https://3d.corncob.world/):** This is a website that simulates the experience of eating an ear of corn one kernel at a time. I made the corn model in Blender and set it up like a simple game using three.js and WebGL.
