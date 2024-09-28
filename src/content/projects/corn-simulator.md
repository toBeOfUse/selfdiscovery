---
title: Corn Simulator
date: November 2021
github_link: https://github.com/toBeOfUse/corn
live_link: https://3d.corncob.world/
image: /corn.jpg
image_alt: A 3D model of a corncob with some kernels missing. A mouse cursor hovers over an intact kernel. "4.13% eaten," says a status bar at the top.
---

I created a website that simulates the experience of eating an ear of corn. One kernel at a time.

<!--more-->

This website was created using the popular [Three.js](https://threejs.org/) library to streamline the process of rendering 3D graphics in the browser with WebGL. I wrote it in TypeScript and set up Webpack to act as the build tool. Not being the greatest artist ever to live, I took a few steps outside of my comfort zone to create a 3D model of an ear of corn using the computer graphics program [Blender](https://blender.org/).

In addition to the corn model, which needed to be comprised of many separate pieces that would be independent in the final product, I ended up creating a simple shape key animation that plays at the beginning of this experience, as well a dynamic, randomized, infinitely looping animation of corn kernels raining down that plays at the end, after you finally eat the underlying cob and the final secret kernel hidden within. (If you really want to go through the process without clicking every kernel, you can go to the live demo page and type `cheat()` into the browser console a few times.)

Three.JS includes several control schemes that you can use out-of-the-box, and initially I tried to use the "orbit" controls to allow the user to control the scene. However, it wasn't intuitive or natural to use, because it didn't match how you actually hold and eat an ear of corn; it unfortunately allowed for rotation of the model around the depth axis, meaning the corncob could end up spinning in the same way that you turn a steering wheel. Eventually, I implemented my own orbital control scheme based on rotating the model around the global y-axis (WebGL uses y-up coordinates) and the model's local x-axis (which ran length-wise along the corncob), resulting in controls that feel a lot more natural; they're like you're actually holding and spinning and very, very slowly eating an ear of corn.
