---
title: Perspective Editor
image: /perspective_demo.jpg
image_alt: A picture of Times Square on the left; the same picture with the billboards covered by a variety of other images on the right.
github_link: https://github.com/toBeOfUse/aaffine/
live_link: https://mitch.website/perspective/
---

I created an app that lets you place images in perspective in 3D space without actually needing 3D models and a 3D world.

<!--more-->

This app was written in Dart and uses Google's Flutter framework for cross-platform app development, which makes it painless to build both as a front-end app for the web and as a native app on Windows. Behind the scenes, it's doing linear algebra, based on the academic breakdown of perspective transformation coefficient derivation archived [here](https://web.archive.org/web/20150222120106/xenia.media.mit.edu/~cwren/interpolator/). In addition to creating images, it's built to output [JSON files](https://github.com/toBeOfUse/aaffine#appendix-reading-the-json-output-in-other-programs) with lots of numbers that can be used to re-open projects in both this and other programs.

I created this app to help with my [NYT Spelling Bee graphics project](#spelling_bee), for which I wanted to place letters so that they looked like they were in the same 3D space as the things in a pre-rendered image. I could use the perspective warp tool in a program like PhotoShop to create this effect by hand, and with some work, I could set up quadrilaterals in 3D space in the 3D modelling program Blender and use the built-in scripting capabilities and command line interface to prompt a slow and expensive render with image textures of letters placed where I wanted them to be, but I wanted a way to programmatically output this kind of scene that was appropriately simple and less fragile and wouldn't drive me insane. Here is the result.
