---
title: khe.io & hacksu.com
date: Spring 2024
images:
  - url: /khe.io.jpg
    alt: 'A screenshot of Firefox open to a website that is displaying a black-and-white photo of a solar eclipse. The text superimposed over the center of the eclipse reads: "KHE; Take 24 hours out of your schedule on April 20th-21st, 2024 to make something amazing." There is a button below the text that says "Register Now."'
  - url: /khe-staff.jpg
    alt: ""
  - url: /hacksu-website.jpg
    alt: ""
  - url: /hacksu-staff.jpg
    alt: ""
github_link: https://github.com/hacksu/khe-revengeance
description: khe.io was the website for the Kent Hack Enough hackathon; I worked on it for the 2024 edition of the event.
---

For the 2024 Kent Hack Enough hackathon, we needed a website that would advertise the event, allow people to register for it, and let staff track, manage, and communicate with applicants and attendees. The website that had been used in past years was showing its age - it relied on the now deprecated framework AngularJS (not modern Angular), and was hard to develop since the easiest way to run it was in a Docker container that provided very old versions of Node.js and MongoDB for it to use.

So, public-facing frontend, which was a Vue 2 project that I updated to use Vue 3 and Vite. For staff, I created a new Next.js app that would allow organizers to stay on top of registrations, check-ins, and stuff submitted through the support form. For both of them, I created a unified backend with a REST API managed by [Remult](https://remult.dev/), which is one of my favorite full-stack CRUD API solutions. This stack was then used and maintained by other HacKSU leaders for this event and, after I graduated and left, the one that took place the following year.

Similarly, I added a backend to [HacKSU's main website](https://hacksu.com/) that let us store and retrieve the history of past meetings and leaders, so that people could visit and get a better idea of what the club was all about.
