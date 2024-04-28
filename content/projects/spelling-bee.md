---
title: Variations on the NYT Spelling Bee
date: November 2021 - July 2022
github_link: https://github.com/toBeOfUse/bee-engine
iframe: https://mitch.website/spellingbeegallery/
iframe_title: A series of graphics that each contain seven letters orbiting around one central letter.
description: A project to create new graphics for the New York Times Spelling Bee puzzle.
---

The New York Times' [Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee) is a fun puzzle game with uninspired graphics, so I designed some new ones. Obviously, I had to make my designs programmatic. If you click on that link to the official website, you might notice that the gallery displayed here is up-to-date with today's puzzle.

When I decided to make [a bot](#discord) that posted the day's puzzle on Discord for people to take swings at, I knew I didn't want to copy the graphic design displayed on the official site. The task was to find a way to display seven letters in a way that made it clear that one was the central or most important letter, with the final design able to be programmatically rendered anew each day by a Python program without my intervention. The images are created either by adding the letters to SVG files and rendering the results with the [CairoSVG](https://cairosvg.org/) library or by consuming the JSON output of my [2.5D graphics app](#perspective) and using it to render a 3D image with the [Python Imaging Library](https://python-pillow.org/).
