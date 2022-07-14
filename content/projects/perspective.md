---
title: Arbitrary Perspective Projection Controls
image: /perspective_demo.jpg
image_alt: A picture of Times Square on the left; the same picture with the billboards covered by a variety of other images on the right.
github_link: https://github.com/toBeOfUse/aaffine/
live_link: https://mitch.website/perspective/
---

One of the fascinating things about computer science is how new problems can end up being solved by applications of math that's been sitting around for ages; I love how, for example, numerically stable rotations in modern 3D graphics applications like video games are represented by quaternions, a mathematical construct whose fundamental principle was first carved into a bridge in 1843. In this spirit, the math for this project is based on an [archived web page](https://web.archive.org/web/20150222120106/xenia.media.mit.edu/~cwren/interpolator/) from 1998. While implementing it, I managed to write a little about the pragmatic math of matrix transformations, which I needed while adapting the results from 3x3 to 4x4 matrices.

Initially, I was looking for a way to do simple 3D graphics for my [NYT Spelling Bee project](#spelling_bee). On the web, CSS 3D transforms allow for the elements of a page to rotate and move towards and away from the user, but in my experience, punching numbers into CSS functions like `rotate3D` to try to place content boxes in space with any precision is an awkward and trial-and-error-y process. Meanwhile, creating 3D graphics on desktop often means using a powerful program like Blender no matter how unambitious your visuals are. I wanted something different, so inspired by the perspective transform function in the Python Imaging Library, I created this easy-to-use app in Flutter that lets you graphically specify some quadrilaterals and map images onto them using simple but effective perspective transformations, and output both images and JSON files consumable and editable by other programs.
