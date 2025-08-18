---
title: Mitchbot Streams
description: A platform to watch videos in sync with your friends.
date: Summer 2021
image: /mitchbot-streams.jpg
image_alt: ""
---

There are a few sites online that you can visit with your friends to watch Youtube videos in sync remotely, but most of them don't have a ton of personality. To address that, I evolved Mitchbot Streams, which is a synchronized viewing app that supports Youtube, Vimeo, Dailymotion, and native HTML5 video embeds, keeps videos in sync using Websockets, has a chat feature that displays stylized versions of the avatars of the viewers in a "room" at the top of the page, and supports custom playlists.

The frontend is a mix of Vue and vanilla JS, and the backend API and websockets server is an Express app. It persists data to a SQLite database using the query builder library Knex, to which I became a [very tiny contributor](https://github.com/knex/knex/commits/master/?author=toBeOfUse). Its visual style comprises an eclectic mix of stock photos from Unsplash, quite a few SVG/SMIL animations, and [XP.css](https://botoxparty.github.io/XP.css/).

I created this app primarily for a single Discord server and received dozens of users from everywhere from Illinois to Japan. Its comprehensive features and unique style makes it one of my favorite things I've ever made and I'd love to put up a more powerful public version someday.
