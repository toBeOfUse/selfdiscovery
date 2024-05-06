---
title: khe.io
date: Spring 2024
image: /khe.io.jpg
image_alt: "A screenshot of Firefox open to a website that is displaying a black-and-white photo of a solar eclipse. The text superimposed over the center of the eclipse reads: \"KHE; Take 24 hours out of your schedule on April 20th-21st, 2024 to make something amazing.\" There is a button below the text that says \"Register Now.\""
github_link: https://github.com/hacksu/khe-revengeance
live_link: https://khe.io/
description: khe.io was the website for the Kent Hack Enough hackathon; I worked on it for the 2024 edition of the event.
---

For the 2024 Kent Hack Enough hackathon, we needed a website that would advertise the event, allow people to register for it, and let staff track, manage, and communicate with applicants and attendees. The website that had been used in past years was showing its age - it relied on the now deprecated framework AngularJS, and ran in a Docker container that provided very old versions of Node.js and MongoDB for it to use. So, I decided to build a replacement.

The new site has a somewhat unique architecture. I decided to keep working with the original public-facing frontend, which was a Vue project that I updated to use Vue 3 and Vite. However, I wanted to create an entirely new staff site using Next.js. I also wanted to avoid the tooling and configuration issues that often come with monorepo setups. So, I created an Express server that provided a database API and, during development, invoked either Vite or Next.js as middleware to serve the frontends of the public and staff sites, respectively. In production mode, both sites were pre-rendered to HTML, so the only things that needed to run were the Express API and a static file server. Believe it or not, once I landed on this single-process setup, it worked really well; other HacKSU members were able to help develop the site with essentially no friction.
