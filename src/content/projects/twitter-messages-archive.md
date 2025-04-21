---
title: Twitter Archive Browser
github_link: https://github.com/toBeOfUse/Twitter-Archive-Browser
image: /twitter-archive-browser.jpg
image_alt: ALT
description: A project that parsed Twitter data exports and displayed DMs in a Discord-like interface.
date: January - March 2021
---

This project exists thanks to a friend who'd spent years participating in numerous large Twitter group chats, totalling well over a million messages, but, at the time, had no way to archive or browse them. She could get Twitter to export her data as a huge ZIP folder, but all the actual messages in it were buried in arrays declared in various .js files (not even JSON 🤨). I decided that there should be a way to use those messages exactly as if they were from an old Discord server, with user profiles (including notes and nicknames), full-text search, and bi-directional infinite scrolling, and so I created a Python backend and a React frontend that extracted the messages from the archive data and displayed them thusly.

There are a few minor regrets that I have about this project: most obviously, the UI is very functional, but that's pretty much all it is. It has some cool features, like the ability to jump around freely within the stream of messages with searches, date picking, and shareable links, but I didn't quite know how to land on a vision for a UI's aesthetic yet. Also, the backend is built around a step where all the messages are packed into a normalized SQLite database, which is cool but probably unnecessary since they're already pretty normalized in a way that a NoSQL database would be suited to, and I used Tornado as the Python HTTP server library just because I was already familiar with it, instead of learning something more relevant like FastAPI.

Overall, though, I'm happy with this as a comprehensive full-stack project that I started myself, finished myself, and kept at a high standard of quality throughout. The backend has a full suite of tests. The API has detailed documentation. The calls from the frontend to the backend are cleanly organized, and I even managed to get Redux to be helpful. This was also the first meaningful project I finished that used React, which has stubbornly stuck around as a continuously relevant skill.
