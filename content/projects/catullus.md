---
title: Catullus
date: October 2021
image: /catullus.jpg
image_alt: '"Catullus, it’s too bad, but don’t be silly/you see it’s gone; well, gone is gone, that’s all" in normal text. "[A deep shuddering inhale] My new thing is infinite resignation./I’m extremely reserved now, and just, I hold everything loosely" in text that''s fading as it gets further from the mouse cursor.'
github_link: https://github.com/toBeOfUse/poetry-version-control
live_link: https://mitch.com.net.biz.org.zone.place/catullus/
description: A project to display multiple translations of Catullus in stylized contrast.
---

After stumbling across both Frank O. Copley's [modernist translation](https://www.google.com/books/edition/_/7OFnjgEACAAJ?hl=en) of the ancient Roman poet Catullus and Daniel Lavery's [contemporary take](https://www.thechatner.com/p/dirtbag-catullus), I wanted to display them in contrast with each other, and ended up spending hours poring over fonts to create a showcase.

This web page was created with Vue 3, using TypeScript and the Composition API, with the Vue CLI providing the initial scaffolding and the final build. Although I wasn't going for this at the time, the result is something like the ubiquitous Unix diff, with similar lines displayed next to each other so that you can see the changes. Some details I ended up poring over: the font sizes are carefully adjusted with variables in SCSS to keep everything visually at one scale, and the line heights are carefully specified to prevent layout shift when switching fonts.
