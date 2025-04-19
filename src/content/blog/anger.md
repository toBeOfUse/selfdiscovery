---
title: On Anger
date: 2025-04-19
tagline: Why does Linus Torvalds get so mad at code? Why do I?
tags: ["personal", "work"]
---

Linus Torvalds is the legendary creator of the version control system "Git" and the kernel for the operating system "Linux," which between them are used to develop approximately 125% of all software. He also gets mad on the Internet a lot. There's [a subreddit](https://www.reddit.com/r/linusrants/) dedicated to his outbursts. He produces headlines like "[Linus Torvalds on why he isn’t nice: 'I don't care about you'](https://arstechnica.com/information-technology/2015/01/linus-torvalds-on-why-he-isnt-nice-i-dont-care-about-you/)". His feedback is often along the lines [of](https://lkml.org/lkml/2017/8/14/698):

> So this patch is utter and absolute garbage, and should be shot in the head and buried very very deep. Please immediately delete it from the whole internet.

[Or](https://lkml.iu.edu/hypermail/linux/kernel/2401.3/04208.html):

> "Steven, stop making things more complicated than they need to be... You copied that function without understanding why it does what it does, and as a result your code IS GARBAGE. AGAIN."

<!-- more -->

His kind of anger feels very familiar to me; it reminds me of how a few of the older-school developer-types at my university's computer science department used to tear apart other people's research, the latest trends in software development, and occasionally their students' test scores and code. It wasn't always fun to be at those meetings; they were fairly indiscriminate in their scorn. There were some times when it was useful to soak up the output of their years of experience of evaluating software, and in being Maximally Publishable, and a few more times where I still think that their reactions were knee-jerk and emerging from a fairly antediluvian view of the world (like when they would dismiss high-level programming languages (and broadly anything that wasn't C or C++) as "toy languages" that permanently confuse younger developers.)

But the scary part is, the older and more confident in what I'm talking about I get, the more I start to understand Linus, and to some extent the professors who yelled at me back during those weekly meetings. For starters, there are some problems he sees that must feel crushingly basic to a 55 year-old lifelong software engineer who's launched multiple hugely successful projects. [Here's](https://lkml.org/lkml/2015/9/3/428) him having to explain that in the programming language C, [arrays passed to functions decay into pointers](https://64.github.io/cpp-faq/decay/), which is arcane and meaningless if you've never used the language before, but is one of the first things I remember learning when I tried to write in it. It's definitely not obscure trivia; it's the kind of thing that there are tons of articles on the Internet about that are aimed at beginner and intermediate programmers, and it's the kind of thing that Linus has no doubt dealt with countless, countless times over the years. Having to explain something you've been through a million times must be frustrating, and I sometimes get that feeling of frustration when it comes to like, JavaScript callback syntax as well.

And even worse, there are the things that are harder to explain. The [sentiment that](https://lkml.org/lkml/2024/7/4/1074)

> We don't add stuff "just because we can". We need to have a damn good reason for it. And I still don't see the reason, and I haven't seen anybody even trying to explain the reason.

feels exactly like something I might end up saying about (admittedly much less critical and world-dominating) code when I'm reviewing a pull request. His [repeated](https://lkml.iu.edu/hypermail/linux/kernel/2401.3/04208.html) complaint that people make things more complicated than they need to be in order to guard against imagined technical problems is definitely something that I find myself thinking a lot. But this sense that I have, that making a system too complicated is an ever-present trap to be avoided and often a worse problem to have than almost all of the other ones, is not something that I can give a technical, step-by-step argument for, like I was explaining a bug with reference to language semantics. It's just a pattern that I've seen across 12 years of programming, and 6 years of being a principal developer on projects with a wide audience. It's the kind of conviction that you can almost only bring across by shouting, unless you science-fiction up a way to mind-meld your perspectives and experiences onto an audience.

But the thing is, I don't want to end up like Linus. Getting that angry on a moment's notice seems alienating and exhausting. Even Linus [doesn't want to be like Linus](https://lkml.org/lkml/2018/9/16/167) all the time anymore. In order to avoid that, here are some things I need to think about instead of being angry:

## It's not anyone else's job to know everything you know

When I first officially became a Professional Software Employee Person, fresh out of university and a reasonably successful tutoring career, I still thought of my place of employment like it was a classroom full of my direct peers who all just needed to understand what I and/or the professor knew. I thought that we needed to develop a common understanding of everything. So, for example, if I wrote some cool global state management code that provided a unified source of truth for some information in our user interface, I would point it out and wait for everyone else to figure out how it works, so that they could pass the exam that didn't exist that would happen on the topic later. And then they wouldn't understand or wouldn't care, and I would be frustrated.

These days, I better understand that the only important part is that people see how to use the cool new global state management thing that you created; they probably don't need to know how it works. There isn't some universal set of information that everyone needs to learn to pass the test at the end of the semester; instead, everyone just has to communicate the parts of their work that are important to other people. It can be tiring if there are things you have to explain later (like "how to add new stuff to the global state") that would be obvious if everyone understood everything that you contributed, but expecting everyone to understand everything that you do is an unsustainable way to work.

## People need to learn stuff in their own way

Similarly, I was convinced that to communicate or even validate my own correctness, I needed to try to instill the same knowledge, mindset, and instincts that I had in everyone else. Instead of just pointing out when I thought an approach was suboptimal ("this data processing approach would be simpler if you did \[thing]"), I would try to download the whole history and perspective that led me to that conclusion into other people's brains at once ("the general approach to data processing is this: \[18 complicated abstract principles that I just came up with]"). If I failed, it felt like a rebuke of the specific point that I was making. Unfortunately, I was never quite a good enough science fiction scientist to pull this off.

This is misguided for a few reasons. First, you can't do it. The fact is that people need to learn from their own experiences; it's going to be much harder for them to learn from yours. (More on this soon.) Second, if everyone else already knows and thinks every correct thing that you do, then what's the point of you being there? If you exist in a space, it totally makes sense that you would have something to bring to it over and over again.

Third, it's just really immiseratingly frustrating. Other people tend to suck at thinking exactly like I do, especially compared to me, the undisputed reigning world champion at it. Whether I'm right or wrong, this basic pattern seems to persist.

## Lack of context goes both ways

There are times at work when I feel like someone doesn't have the technical context to understand a thing that I'm trying to tell them ("you see, this number is floating point but it should be an integer, and I swear that makes a huge difference for complicated reasons.") Unfortunately, it's also likely that I don't have the context to understand the specific product feature that they're working on, until they carefully explain it to me. If someone is working on a feature to add a user's birthday to their database entry, and they're storing it in a really torturously complicated way, I'll probably immediately get mad, and then possibly have to take it back as soon as they point out that this feature is specifically for people born on leap days and they need special handling because \[obscure historical details about the implementation of the Gregorian calendar].

This is why no amount of technical expertise will ever free you from having to carefully consider and understand what you or someone else is trying to make their code do, and why you have to stay humble and not jump in with knee-jerk reactions. Anger can be conserved as a result.

## Towards is more effective than away

If you feel like you see weaknesses in a project or an approach, the best thing you can do is not to go around issuing criticisms and coming up with long lists of insults to say to the people proposing the stupid idea; it's to beg, borrow, and steal whatever leadership capacity you can get, and invite people to pursue an alternate approach that's good instead of bad.

This is tricky because it pretty much requires some combination of authority and trust, in whatever ratio is most appropriate to your situation, because people tend to ignore it when it's just some random coworker who's yapping about whatever inspiring new model for designing systems that they have. But when you're someone who's responsible for setting a direction - and on a software engineering project of any decent size, there does need to be some centralized authority that's responsible for setting a direction and architecting a project, lest you get a software [McMansion](https://mcmansionhell.com/) that consists of a dozen different houses joined together at odd seams - this approach is essential. No one wants a leader who just yells at them about what they're doing wrong all the time. The only way to lead (and to some extent, teach) in the context of skilled work is by example, although you can often get away with using other people's work as the examples of the right approach to lead by.
