---
title: Perspective Editor
date: July 2022
image: /perspective_demo.jpg
image_alt: A picture of Times Square with the billboards covered by a variety of other images.
github_link: https://github.com/toBeOfUse/aaffine/
live_link: https://mitch.website/perspective/
---

I created an app that lets you place images in perspective in 3D space without actually needing 3D models and a 3D world.

<!--more-->

This app was written in Dart using the Flutter framework for cross-platform app development, which makes it painless to build your code  as a front-end app for the web or as a native app on desktop or mobile. Behind the scenes, it's doing linear algebra, based on [a breakdown of perspective transformation coefficient derivation](https://web.archive.org/web/20150222120106/xenia.media.mit.edu/~cwren/interpolator/) that I found. In addition to creating images, it's built to output JSON files with all the coefficients that are needed to open and use designs in this and other programs.

I created this app to help with my [NYT Spelling Bee graphics project](#spelling_bee), for which I needed to align letters with things in 3D space in a pre-rendered image. I could have used the perspective warp tool in a program like PhotoShop to create this effect by hand, or with some work, I could set up quadrilaterals in 3D space in the 3D modelling program Blender and use the built-in scripting capabilities and command line interface to prompt a slow and expensive render with image textures of letters placed where I wanted them to be, but I wanted a way to programmatically output this kind of scene that was appropriately simple and less fragile and wouldn't drive me insane. This was the result.
