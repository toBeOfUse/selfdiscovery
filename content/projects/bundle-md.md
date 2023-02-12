---
title: Bundle.md
github_link: https://github.com/toBeOfUse/bundle-md/
date: November 2022
image: /bundlemd.jpg
image_alt: A visualization of a folder structure.
---

This project searches a repository for Markdown files and compiles them into a compact and readable depiction of your folder structure.

<!--more-->

Tools for automatically generating API documentation for users from comments in code have existed forever, but what about documenting a project's structure for developers? Faced with a large multi-application monorepo project, I created this tool so I could write comments in each folder (using Markdown files with meaningful names) and then have them merged into a visual summary of the directory structure with all the details spelled out below.

Then, I added some features that took particular advantage of Github features: I created a Github Action for it so that it could be automatically run as part of a CI/CD pipeline, with the result saved to a specific page on the project's Github wiki.
