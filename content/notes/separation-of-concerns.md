---
title: Separation of Concerns and State
date: 2024-07-13
---

"Separation of concerns" is one of those smart-, literary-sounding terms that gets used a lot to indicate some ideal state that programmers should strive towards, However, like other abstract principles, such as "modularity", "encapsulation," or "SOLIDity," the problem is that it's easy to come up with bad examples that obviously break away from them, but much harder to specify what it means to follow them well. If you create an app and it's one 10,000-line function, then you probably have not achieved much modularity, and your concerns are most likely not separated too well. But the nature of the good code that theoretically exists on the opposite end of the separation spectrum is harder to pin down. It's kind of like trying to hammer out a universal definition of "beauty," or describing the mouthfeel of a Michelin-starred hot dog.

There are a million ways to divide up your hypothetical 10,000 line function into different "concerns," especially if you're working in web development, where things like business logic, display logic, markup, data fetching, authentication and authorization, and sparkly text decorations tend to freely mix; if you just work on writing device drivers in pure C, you probably don't have to think about these concepts as hard. (If I'm wrong about that, I'd love to hear about it.) The classic separation in web development was to divide 
