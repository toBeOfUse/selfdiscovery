---
title: Variations on the NYT Spelling Bee
date: November 2021 - July 2022
github_link: https://github.com/toBeOfUse/bee-engine
iframe: https://mitch.website/spellingbeegallery/
iframe_title: A series of graphics that each contain seven letters orbiting around one central letter.
description: A project to create new graphics for the New York Times Spelling Bee puzzle.
---

The New York Times' Spelling Bee is a word game that I wanted to design some new graphics for, to use in my Discord bot that allows you to play the Spelling Bee in a server with friends. Obviously, I had to make my designs programmatic. If you click through to the [official website](https://www.nytimes.com/puzzles/spelling-bee), you might notice that today's puzzle's letters are also displayed in the images above.

Designing these graphics was an interesting, open-ended challenge: the task was to find a way to display seven letters in a way that emphasized one in particular as the central letter, with the final design able to be programmatically rendered anew each day by a Python program without my intervention. The images ended up being created either by adding the letters to SVG files and rendering the results with the [CairoSVG](https://cairosvg.org/) library, or by consuming the JSON output of my [2.5D graphics app](#perspective) and using it to render a 3D image with the [Python Imaging Library](https://python-pillow.org/).
