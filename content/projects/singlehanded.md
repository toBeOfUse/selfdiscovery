---
title: Singlehanded Typing
github_link: https://github.com/toBeOfUse/SingleHandedTypist
live_link: https://singlehanded.tech
date: October 2022
---

This project allows you to hit all the letters of the alphabet while touch-typing with one hand.

<!--more-->

At some point in mid-to-late 2022, I broke my left arm, which meant I couldn't use my left hand for a lot. This made it difficult to type the way I'm used to: quickly and stably, with my hands hovering in place over home row. I looked for schemes to solve this problem and the most logical one I could find was spelled out in an [old XKCD blog post](https://blog.xkcd.com/2007/08/14/mirrorboard-a-one-handed-keyboard-layout-for-the-lazy/): "Mirrorboard, a one-handed keyboard layout for the lazy." The basic idea was to mirror the keys on the keyboard while a hotkey was held down, which would switch the letters on the side of your broken/unusable hand over to the side of the one that you could do stuff with. This idea seemed so basic and helpful that I was shocked that I couldn't find a widely usable implementation easily; the blog post only offered a configuration file for XInput devices.

So, during the twenty-four hours of the Kent State University annual hackathon, I implemented my own version of the idea, and put it on the Internet. In practice, typing this way is surprisingly intuitive; it turns out that you actually have to slow yourself down to prevent mental misalignment, instead of involuntarily spending a ton of time thinking between keypresses. Please feel free to try it out on its [official site](https://singlehanded.tech), where it's implemented in-browser inside a practical text editor and with two tutorial modes, with an accompanying executable for everyday use on Windows. The product [won second place](https://devpost.com/software/singlehanded-typing-tech) at the hackathon as a solo effort.
