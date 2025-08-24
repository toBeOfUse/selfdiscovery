---
title: Multiplayer NYT Spelling Bee
date: November 2021 - July 2022
github_link: https://github.com/toBeOfUse/bee-engine
images:
  - url: /bee/blueprint.png
    alt: ""
  - url: /bee/dice.png
    alt: ""
  - url: /bee/earth.png
    alt: ""
  - url: /bee/cereal.png
    alt: ""
description: A project to bring the New York Times Spelling Bee puzzle to Discord.
---

The New York Times' Spelling Bee is a word game that a few people I know would post screenshots of and play collaboratively every day in their Discord server. I built a Discord bot that would automate the work of posting the puzzle each morning while also providing feedback and hints to make playing the game there more engaging. The result is a bot that currently runs in over 100 servers. I also created and published [a Python library](https://github.com/toBeOfUse/bee-engine) that makes creating and handling puzzle sessions easy.

I knew I wanted to create new graphics for the spelling bee puzzle; the basic task, which was to display seven letters in a way that emphasized one in particular, was open-ended and full of potential. Obviously, I had to make my designs programmatic. I ended up primarily either adding the letters to SVG files and rendering the results with the [CairoSVG](https://cairosvg.org/) library, or consuming the JSON output of my [2.5D graphics app](#perspective) and using it to render a 3D image with the [Python Imaging Library](https://python-pillow.org/).

I also used C and Cython to create a Python module for this project that could efficiently store and load a trie that stored the set of all English words on Wiktionary, so that I could efficiently search for words that might exist according to some, and fit the puzzle's criteria, but that weren't officially considered puzzle answers.
