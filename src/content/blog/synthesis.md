---
title: Patterns, Samples, and Artificial Knowledge
tagline: "Mixing multiple patterns together is an underrated way to hack brains. Also, to get your attention: AI AI AI AI"
date: 2025-03-15
tags: ["computers", "coding", "brains", "music"]
---

Buckle up, everybody. The AI understander has logged on.

Human brains are wired to anticipate and recognize patterns. The quiet thump of footsteps coming up behind you; the sinuous stripes of a tiger's fur, undulating as it quietly crouches in the bushes with knife, fork, and barbecue sauce clutched in its paws; the halting rhythm of popcorn in the microwave as it finishes up its popping and starts to burn. In particular, there's something in us that responds to patterns in language. I don't necessarily mean literary, sophisticated forms of language: I mean that people still put fragments of Radiohead lyrics in their Instagram bios, and that we all grew up enthralled by the three-syllable rhythms of Dr. Seuss.

But what if I told you that writing that kind of thing is now easy?

![A chat with ChatGPT. The user says: "Write a short Dr. Seuss-style poem about driving with broken brake lines." ChatGPT replies: "Oh, the places you’ll go— but not where you planned! For your brake lines are broken, your stopping’s unmanned! You roll down the street, you pick up some speed, you pump on the pedal— but stop? No, indeed!"](../../../assets/posts/synthesis/seuss-brakes.jpg)

Well, it's not quite top-tier Dr. Seuss material, I guess, but that comes down to the prompt, right? I could have told it to write about something more Dr. Seuss-like. Animals, breakfast foods, headwear, that kind of thing. But the fact that it understood the prompt - the fact that it knows who Dr. Seuss is, that it presumably knows what a trisyllabic meter is, that it knows which words rhyme and which don't - that makes it smart, right?

I'm not so sure? If a human sat down to write a Dr. Seuss-style poem, and produced that result, then we could probably conclude that the human knew those things, or at least had a fundamental intuitive sense of them. But at this point, in year three of their mildly terrifying reign, I'm pretty sure that large language models are mostly good at replicating patterns. That doesn't mean that they make good decisions about what to replicate or why they're doing it. But, they feel like they're smart, partly because they hack the human brain by reproducing patterns that are interesting to us, and partly because they mix the patterns together.

<!-- more -->

## Overlaid patterns

This is something that Ezra Klein pointed out about the initial impact of ChatGPT a long time ago, that I haven't been able to stop noticing, that I think is underrated in terms of importance:

> If you’ve been on social media while everybody’s playing around with this, one thing you probably noticed is that most of the queries people were putting up had the form of tell me x in the style of y. So like people love this one that was, write me a poem about losing your socks in the laundry in the style of the Declaration of Independence. Or I saw a thing about Thomas Schelling’s theory of nuclear deterrence in the style of a song. And people would \[have it] write in the style of Shakespeare.

\- [Ezra Klein Interviews Gary Marcus, Jan 6. 2023](https://archive.is/f2krk)

I do remember that kind of thing fascinating people. There are a couple of other places where this skill has been evident. The following image is a QR code:

![An AI-generated image of some kind of fishing village with old-fashioned houses, with prominent black and white squarish elements.](../../../assets/posts/synthesis/ai-qr-code.png)

No, seriously, scan it with your phone: that is a working QR code. The AI was able to take the pattern of a painting of a fishing village (?), the pattern of the black-and-white squares that is a QR code, and blend them together, without losing the essential qualities of either.

There's also more basic stuff that falls into this category:

![A tweet by Riley Goodside that says: "POV: You're already late for work and you haven't even left home yet. You have no excuse. You snap a pic of today's fit and open Gemini 2.0 Flash Experimental." Then, she posted a screenshot showing Gemini combining her selfie with the background of a subway station where the train is broken down.](../../../assets/posts/synthesis/gemini-late.png)

Here, the AI takes the stuff you give it and overlays it over a standard type of image that it's probably seen tons of in its training data: a subway station with workers milling around near the tracks. The point is, none of these examples require the LLM to come up with anything new; instead, it's impressive in its ability to replicate things that undoubtedly already exist, and more importantly, since you can already replicate pictures by right-clicking and copying them, to mix them together.

What if this mixture of patterns is the main driver of what makes AI seem "smart?" And what can you do if it's not replicating the patterns that you wanted?

## Metaphors be with you

Ted Chiang famously [described](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web) ChatGPT as a "blurry JPEG of the Web". Over on the computer science side of things, Simon Willison [described](https://simonwillison.net/2023/Apr/2/calculator-for-words/) ChatGPT as a "calculator for words." Years later and with much less credibility attached to stuff I say, I'm throwing out a new analogy that I think is useful: ChatGPT is a remix artist that works with the patterns and structures of images and words.

Humans are fascinated when songs are kind of like other things they've heard, but not exactly. A basic example of this in music is the key change, which is when partway through a song, all the pitches that the instruments are playing shift, usually up, making the whole thing sound fresh, new, and re-energized. (An example is the ending of ["My Heart Will Go On," from Titanic](https://youtu.be/9bFHsd3o1w0?si=HB46hkznhEDg6but&t=196), right at the end.) More generally, you can find tons of examples of people combining two unrelated songs to stunning effect (i.e. lots of views on Youtube.) [LCD Soundsystem overlaid over Miles Davis](https://www.youtube.com/watch?v=huEtJw7pfLk). [John Lennon's "Imagine" combined with All Star by Smash Mouth](https://www.youtube.com/watch?v=LMwOvPQtUUw). Ari interpolating [My Favorite Things](https://www.youtube.com/watch?v=QYh6mYIJG2Y). The whole career of [Girl Talk](https://www.youtube.com/watch?v=uWzkK7tUjaU&pp=ygUJZ2lybCB0YWxr), who sampled [372 songs](https://www.fastcompany.com/1707948/infographic-girl-talks-latest-mashup-masterpiece-deconstructed) in one album. Weird Al's [polka medleys](https://www.youtube.com/watch?v=MRJILK3NxSM).

We've kind of never had things like this in written language before? I mean sure, there's the odd [style parody](https://www.online-literature.com/stephen-leacock/nonsense-novels/2/), but mostly people just write how they naturally write. Similarly, in visual art, disparate styles and patterns are generally pretty hard to unify in a way that looks good.

And by and large, there doesn't seem to be a lot of demand for it. People oohed and awed over the poems and the QR codes and then moved on with our lives, mostly returning to ChatGPT when they need something that sounded smart to turn in for a homework assignment. The people stuck using AI are mostly programmers.

## ChatGPT, like a horse, can sense fear

This post was inspired by this Linkedin post by Michael Bromley, who's the creator of an open-source e-commerce platform called [Vendure](https://vendure.io/) that I am [a tiny contributor to](https://github.com/vendure-ecommerce/vendure/commits?author=toBeOfUse):

![A post by Michael Bromley on Linkedin, saying: "Today was one of the most productive and flow-filled days of development I can remember. And I mostly wrote English, not TypeScript. Today I built in minutes what I've spent multiple hours or days on in the past. I've been quietly skeptical of AI tools for dev work. But I've been sleeping on an unprecedented force multiplier. Don't worry - Vendure is not about to become a mess of unread tab-key slop. Every tool has its place. Judgement is still paramount. But the work I was doing today was like using a power drill instead of my fingers to drive a screw into concrete."](../../../assets/posts/synthesis/bromley.jpg)

What I want to understand is why that might work out well for him, and might not for other people.

There are plenty of developers that will tell you that wow, AI is amazing, it's doing my whole job for me, we might want to all polish up our resumes to hand in at that Chipotle down the road. It's also a common sentiment among other developers that the first group of developers is full of shit. "What are you talking about," they say. "I asked Cursor to implement a file upload input for me and it made a button that lets the user pick a file but never uploads it. It then added a comment that says 'TODO: implement before Q4 2021' and wrote an unused new function that appears to localize my UI into Classical Spanish."

The thing is, the code that the AI produces is largely governed by two things: the code that it's read in its training data, which most likely varies widely from expert works of pristine beauty to unreadable slop, and whatever you're giving it as part of your prompt. It has tons of different patterns that it can replicate, and the trouble is getting it to pick the right ones.

Michael Bromley has a huge advantage here, which is that the Vendure codebase, which I've worked with professionally, is clean, well-tested, well-commented, and systematically organized, with numerous examples of past implementations of things that already work. If the AI replicates the patterns of the segments of the codebase that end up in its context window, it'll likely produce some decent code.

Additionally, Vendure is an e-commerce platform, and e-commerce platforms are not exactly new upon this earth. In fact, thousands of people have been working on e-commerce, probably 24/7, in aggregate, for about the past 35 years. In other words, there are a lot of examples of this kind of thing in the training data. And Vendure doesn't try to re-invent that many wheels: at my job, when we've pulled apart other e-commerce platforms like Shopify and Target to see how they work, there've been echoes of how Vendure works all over the place: the same structure for collections, or the same extensive use of facets. The standard e-commerce wheels being used here all have roughly the same inner diameter and attached chrome spinners.

In other words, to bring it back to the music analogy: Vendure is like a symphony, composed of lines and phrasings that have been present in tons of similar patterns for dozens of years. All the AI has to do is keep going with the composition: fill in a third violin part here, add a trip-hop drum break there. How could it fail?

AI is good at replicating patterns. But, to get it to write your code, you have to get it to replicate good patterns, not bad ones. The easiest way to do that is to provide examples of the good patterns you'd like it to replicate. So, the best way to get AI to write good code is to write good code. Uh oh.

(Meanwhile, I think [the smaller projects](https://tools.simonwillison.net/) that someone like Simon Willison uses AI for benefit from being relatively simple, self-contained tools that the AI has probably seen before as part of bigger projects, combined with the fact that the prompts are just written in the cadence and style of experienced web developer. Prompt engineering is unfortunately a thing, and we all just have to live with that.)

## Cultural technologies

A similar concept of what AI does appeared in Science recently: "[Large AI models are cultural and social technologies](https://henryfarrell.net/wp-content/uploads/2025/03/Science-Accepted-Version.pdf)," according to Henry Farrell et al. It posits that LLMs are best viewed not as intelligent agents, but "a new kind of cultural and social technology, allowing humans to take advantage of information other humans have accumulated." In other words, they copy and transmit information, much like a fax machine. The patterns are out there: all the AI does is replicate them.

Is it that simple? One of the biggest arguments in favor of AI being, like, smart, is that no matter what problem you pose that an AI can't solve today, someone's going to come out with a new model that can solve it tomorrow. But that doesn't necessarily mean that the AI is getting fundamentally smarter; this sounds like a perfectly natural consequence of it being a pattern-replicating machine that can always have new stuff shoved into the training dataset of the patterns that it can replicate.

Technologies like the fax machine are very valuable (I was enthralled with my parents' fax machine as a kid), and even just the ability to surface and merge patterns might be very powerful. If all the examples of mathematical proofs in its dataset means that it can spit out a bunch of pattern replications until it makes some new correct ones, that still makes it an important new technology. But this does kind of imply that AI can't independently write, for example, a prestigious new TV show, or even create a truly innovative e-commerce app, assuming that doing so takes at least a reasonable amount of originality; any truly original stuff that the AI writes would come from the prompt, not its training dataset.

So it seems to me, inasmuch as anyone can understand what an opaque cluster of perceptrons and weights is doing, that when an AI seems smart, it's probably just replicating a pattern that it's seen before that you haven't. And there's probably someone who would say that that's all that intelligence is. But it sure doesn't feel like it when Claude is outputting Bash commands into your Powershell terminal over and over again even after saying it's going to stop.

Also, this type of AI probably always requires humans to check and see if the merged outputs make sense. In other words, it might not be able to truly logically reason through whether the code that it writes should work; a lot of the innovation in the AI IDE space has just been "let the AI see all the errors that running its code produces, so that it can go back and try to fix them." [Here](https://x.com/mmay3r/status/1888314691820327196) is another line that I keep coming back to: "To an LLM, a novel discovery is indistinguishable from an error." It might mix together stuff from its training set really accurately and seamlessly, but be unable to figure out that the two things just don't go together for fundamental logical reasons, anymore than you can mix together chocolate chips and mac & cheese and get the culinary experience of consuming either of them individually.

## Appendix A: Everything is a remix

To be fair, humans do this kind of remixing existing stuff and then getting credit for being creative all the time. George Lucas did it when [he built Star Wars](https://www.slate.com/articles/arts/cover_story/2015/12/star_wars_is_a_pastiche_how_george_lucas_combined_flash_gordon_westerns.html) out of Kurosawa movies and old Flash Gordon serials. See [Everything is a Remix](https://www.everythingisaremix.info/everything-is-a-remix-2023) for more opinions like that one.

<small>No AI was utilized in the writing of this article (except for within that one screenshot, obviously).</small>
