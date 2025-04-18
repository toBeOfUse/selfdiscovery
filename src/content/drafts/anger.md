---
title: On Anger
date: 2025-04-18
tagline: Solving problems.
tags: ["personal", "work"]
---

Linus Torvalds is the legendary creator of the version control system "Git" and the kernel for the operating system "Linux," which between them are used to develop approximately 125% of all software. He also gets mad on the Internet a lot. There's [a subreddit](https://www.reddit.com/r/linusrants/) dedicated to his outbursts. He produces headlines like "[Linus Torvalds on why he isn’t nice: 'I don't care about you'](https://arstechnica.com/information-technology/2015/01/linus-torvalds-on-why-he-isnt-nice-i-dont-care-about-you/)". His feedback is often along the lines [of](https://lkml.org/lkml/2017/8/14/698):

> So this patch is utter and absolute garbage, and should be shot in the head and buried very very deep. Please immediately delete it from the whole internet.

[Or](https://lkml.iu.edu/hypermail/linux/kernel/2401.3/04208.html):

> "Steven, stop making things more complicated than they need to be... You copied that function without understanding why it does what it does, and as a result your code IS GARBAGE. AGAIN."

<!-- more -->

His kind of anger feels very familiar to me; it reminds me of how a few of the older-school developer-types at my university's computer science department used to tear apart other people's research, the latest trends in software development, and occasionally their students' test scores and code. I sometimes got similar reactions when I would say something that they thought was stupid or misinterpreted what they were trying to do, usually in the direction of thinking that tools were meant to be practical and useful for purposes other than enabling more research projects. There were some times when I did just have to learn from their experience in being Maximally Publishable, and a few times where I still think that their reactions were knee-jerk and emerging from a fairly antediluvian view of the world (like dismissing newer programming languages (and broadly anything that wasn't C or C++) as "toy languages" that permanently confuse younger developers.)

But the scary part is, the older and more confident in what I'm talking about I get, the more I start to understand Linus, and the professors who yelled at me back during those weekly meetings. For starters, there are some problems he sees that must feel crushingly basic to a 55 year-old lifelong software engineer who's launched multiple hugely successful projects. [Here's](https://lkml.org/lkml/2015/9/3/428) him having to explain that in the programming language C, [arrays passed to functions decay into pointers](https://64.github.io/cpp-faq/decay/), which is arcane and meaningless if you've never used the language before but is one of the first things I remember learning when I tried to write in it. It's definitely not obscure trivia; it's the kind of thing that there are tons of articles on the Internet about that are aimed at beginner and intermediate programmers, and it's the kind of thing that Linus has no doubt dealt with countless, countless times over the years. Having to explain something you've been through a million times must be frustrating.

And even worse, there are things that are harder to explain. The [sentiment that](https://lkml.org/lkml/2024/7/4/1074)

> We don't add stuff "just because we can". We need to have a damn good reason for it. And I still don't see the reason, and I haven't seen anybody even trying to explain the reason.

feels exactly like something I might end up saying about (admittedly much less critical and world-dominating) code when I'm reviewing a pull request. His [repeated](https://lkml.iu.edu/hypermail/linux/kernel/2401.3/04208.html) complaint that people make things more complicated than they need to be in order to guard against imagined technical problems, when "this system is too complicated" is perhaps the alpha and the omega of all technical problems, is definitely something that I find myself thinking a lot. But this sense that I have, that "this system is too complicated" is a worse problem to have than almost all of the other ones, is not something that I can give a technical, step-by-step argument for. It's just a pattern that I've seen across 12 years of programming, and 6 years of being a principal developer on projects with a wide audience. It's the kind of conviction that you can almost only bring across by shouting, unless you science-fiction up a way to mind-meld your perspectives and experiences into an audience.

But the thing is, I don't want to end up like Linus. Even Linus [doesn't want to be like Linus](https://lkml.org/lkml/2018/9/16/167) all the time anymore. In order to avoid that, there are some things that I need to understand:

## It's not anyone else's job to know everything you know

This is the first revelation I had, thanks to what was kind of a bad track I was on in the first couple of months of being a professional employee person. I was convinced that to communicate or even validate my own correctness, I needed to try to instill the same knowledge, mindset, and instincts that I had in everyone else. Instead of pointing out when I thought an approach was suboptimal, I would try to download the whole history and perspective that led me to that conclusion into other people's brains at once. If I failed, it felt like a rebuke of the specific point that I was making. Unfortunately, I was never quite a good enough science fiction scientist to pull this off.

This is misguided for a few reasons. First, you can't do it. The fact is that people need to learn from their own experiences; it's going to be much harder for them to learn from yours. (More on this soon.) Second, if everyone else already knows and thinks every correct thing that you do, then what's the point of you being there? If you exist in a space, it totally makes sense that you would have something to bring to it over and over again.

Third, it's just really immiseratingly frustrating. Other people tend to suck at thinking exactly like I do, especially compared to me, the undisputed reigning world champion at it. Whether I'm right or wrong, this basic pattern seems to persist.

## Insert second revelation here

You go to war with the development team you have, not the one you want? Rethinking is still vital? The context gap thing (probably the best thing available)?

## Towards is more effective than away

If you feel like you see weaknesses in a project or an approach, the best thing you can do is not to go around issuing criticisms and coming up with long lists of insults to say to the people proposing the stupid idea; it's to beg, borrow, and steal whatever leadership capacity you can get, and invite people to pursue an alternate approach that's good instead of bad.

This is tricky because it pretty much requires some combination of authority and trust, in whatever ratio is most appropriate to your situation, because people tend to ignore it when it's just some random coworker who's yapping about whatever inspiring new model for designing systems that they have. But when you're someone who's responsible for setting a direction - and on a software engineering project of any decent size, there does need to be some centralized authority that's responsible for setting a direction and architecting a project, lest you get a software [McMansion](https://mcmansionhell.com/) where every window opens a different way - this approach is essential. No one wants a leader who just yells at them about what they're doing wrong all the time. The only way to lead (and to some extent, teach) in the context of skilled work is by example, although you can often get away with using other people's work as the examples of the right approach to lead by.
