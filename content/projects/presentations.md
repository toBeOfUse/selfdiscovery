---
title: Remote Group Presentation Synchronization
github_link: https://github.com/toBeOfUse/MultiUserSlidePresenter
image: /presentation_demo.webp
image_alt: Two browsers are open, side-by-side. A mouse goes from one to the other, clicking "next" and "previous" buttons, checking a "laser pointer" checkbox, and waving itself over some slides. When one browser goes to the next or previous slide, so does the other, and the laser point is visible in both browsers.
image_preserve: true
description: A project to synchronize a slide presentation across multiple computers.
date: April 2020
---

This program simply synchronizes a slide show between multiple people who view it through a website, letting each of them control the next and previous slide controls as well as a laser pointer.

At the beginning of the pandemic, during the Spring 2020 semester, when all my classes went online, we who were in them were stuck giving group presentations remotely, which meant constantly saying "next slide, please" to the one person who was actually sharing their screen. I built this app out of simple static JavaScript and HTML with a Python backend that was connected to via WebSockets (via the Socket.IO library) to make group control of a presentation seamless; my group members connected to my server application (I was using my home IP address and port forwarding to use my regular computer as the server at that time) and synchronized the presentation state while giving all of us control. It worked! This is still some of the most straightforward and effective problem-solving I've ever been able to do with my programming skill set.
