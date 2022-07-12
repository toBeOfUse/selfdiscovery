---
title: Arbitrary Perspective Projection Controls
image: /perspective_demo.jpg
image_alt: A picture of Times Square on the left; the same picture with the billboards covered by a variety of other images on the right.
---

On the web, CSS 3D transforms allow for the elements of a page to rotate and move towards and away from the user, but in my experience, punching numbers into CSS functions like `rotate3D` to achieve the positionings you want is an awkward and trial-and-error-y process. Meanwhile, creating 3D graphics on desktop generally means learning a powerful program like Blender no matter how unambitious your visuals are. I ran into this problem when I wanted to programmatically generate simple 2.5D graphics to represent New York Times Spelling Bee puzzles. insert link.

For this purpose, I created this simple app in Flutter that lets you graphically specify some quadrilaterals and then maps images onto them using simple but effective perspective transfomations. This app can export PNG images with the polished results of your projects as well as JSON files that describe it in detail.
