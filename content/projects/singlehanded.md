---
title: Singlehanded Typing
github_link: https://github.com/toBeOfUse/SingleHandedTypist
live_link: https://singlehanded.mitch.website/
date: October 2022
image: /one-handed-typing.gif
image_preserve: true
---

This project allows you to reach all the letters of the alphabet while touch-typing with one hand.

<!--more-->

At some point in mid-to-late 2022, I broke my left arm, which meant I briefly couldn't use my left hand for typing. I looked for schemes to solve this problem, and the highest-potential one I could find was spelled out in an [old XKCD blog post](https://blog.xkcd.com/2007/08/14/mirrorboard-a-one-handed-keyboard-layout-for-the-lazy/): "Mirrorboard, a one-handed keyboard layout for the lazy." The basic idea was to create a hotkey that dynamically switched the letters from one side of the keyboard (the one corresponding to your broken/unusable hand) over to the side that's under the hand that you could do stuff with.

This idea seemed so simple and helpful that I was shocked that I couldn't find a widely usable implementation easily; the blog post only offered a configuration file that implemented the scheme for XInput devices.

So, during the twenty-four hours of Kent State University's 2022 hackathon, I implemented my own version of the idea, and made it available on the Internet. In practice, typing this way is surprisingly intuitive; it's not instantly effortless, but your existing muscle memory actually helps you out a lot. Please feel free to try it out on its [official site](https://singlehanded.mitch.website), where it's implemented in-browser inside a practical text editor, with two tutorial modes and an accompanying executable for everyday use on Windows. The product [won second place overall](https://devpost.com/software/singlehanded-typing-tech) at the hackathon as a solo effort.
