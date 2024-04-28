---
title: Bundle.md
github_link: https://github.com/toBeOfUse/bundle-md/
live_link: https://github.com/toBeOfUse/bundle-md-demo/wiki/Folder-Architecture
date: November 2022
image: /bundlemd.jpg
image_alt: A visualization of a folder structure.
---

This project searches a repository for certain Markdown files and bundles them into a compact and readable depiction of your folder structure.

<!--more-->

Tools for automatically generating API documentation for users from comments in code have existed forever, but what about documenting a project's structure for developers? Faced with a large multi-application monorepo project, I created this tool so I could write structured documentation in each folder (by creating one or two Markdown files with meaningful names) and then have them compiled into a quick visual summary of the directory structure, with further docs written out below.

Then, I added some features that took advantage of Github as a platform: I created a Github Action for the program so that it could be automatically run as part of a CI/CD pipeline and added the option to have the result auto-published to a specific page on the project's Github wiki. I also [published the project to npm](https://www.npmjs.com/package/bundle-md) so it can be invoked in one npx command. I haven't gone out of my way to promote it recently, but I still think this tool could be pretty useful for larger projects.
