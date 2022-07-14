---
title: Improved NYT Spelling Bee Graphics
github_link: https://github.com/toBeOfUse/SpellingBeeBot
iframe: https://mitch.website/spellingbeegallery/
---

The New York Times' [Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee) is a fun puzzle game with some uninspired graphics. When I decided to make [a Discord bot](#discord) that posted the day's puzzle for people who liked Discord to take swings at, I knew I wanted to reinterpret things a bit. The task was to find a way to display seven letters in a way that made it clear that one was the central or most important letter, with the final design able to be programmatically rendered with the day's letters in place by my Discord bot (written in Python) without my intervention. The images are created either by modifying SVG files and rendering the results with the [CairoSVG](https://cairosvg.org/) library or by consuming the JSON output of my [perspective rendering app](#perspective) and using it to render an image with the [Python Imaging Library](https://python-pillow.org/). The results are displayed in a gallery below; note that the letters you see correspond to today's puzzle.
