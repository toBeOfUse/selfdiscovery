---
title: The Double Life of Floating Point
tagline: Small numbers can be long. Floating points are made. The real reason you should use whole numbers for prices. The appendixes are the interesting parts.
date: 2025-01-02
image: posts/floating-point/cover-wide.jpg
image_alt: A clunky old adding machine.
image_style: old
tags: ["computers", "math", "low-effort titles"]
---

Computers are bad at math. If you go into your friendly local [Python terminal](https://www.pythonmorsels.com/repl/) or [JavaScript console](https://jsconsole.com/), and type "0.1 + 0.1 + 0.1", it will produce a number that is almost, but not quite 0.3. When you try to write programs that do math, things like this often happen. You may have heard that it's because the number is "floating point."

There's a lot of superstition and folklore around floating-point numbers in computer science, plausibly due to occult-sounding terms like "mantissa" and "significand." "Floating-point math is imprecise," people will say. But the "floating-point" part gets way too much emphasis. "Math is too precise" is a better way to put it. The poor floating-point number is just chronically misunderstood.

<!-- more -->

## "Floating-point math" is just normal math

"Floating-point" just means "a number where the decimal point can be placed between any two digits." But that's just normal math. We put the point wherever we want to whenever we write down a number. Historically, people have said "floating-point math" to contrast with "fixed-point math," but fixed-point math has been used by almost no-one in recent computational history. Even in older languages that are still in use, like C, floating point is the default for non-whole numbers, and fixed-point math requires custom code. It's like if we still called our phones "camera-phones" to distinguish them from old camera-less cell phones, or tigers "non-saber-tooth tigers" to distinguish them from saber-tooth tigers.

"Floating-point" also often seems to be used to refer to a specific scientific-notation-y way of storing numbers in a computer's memory, in the format codified by the IEEE, but in my experience, the implementation details actually don't help that much to understand the unusual behaviors you might see when working with non-whole numbers in computer science; focusing on IEEE 754 is missing the forest for the trees. The relevant math is easier to understand without it, and thus I won't be using the term "floating-point" again in this post until the very end.

## Binary math is also just math

Trying to do `1 + 1` in binary might have thrown you off the first time you tried it, since the answer is unfortunately not "2". Instead, it's written `10`, mainly because, binary math only uses the digits `1` and `0`, so what other number could `1 + 1` possibly add up to? We're not using the digit "2", so it's not that. What you may not have thought about is that similar considerations apply to calculating `0.1 + 0.1`. The answer can't be 0.2, since we're not using the digit "2." For extremely similar reasons, the answer also cannot be 0.3, or 0.4, etc. The answer must be `0.1 + 0.1 = 1.0`; since we're overflowing the first digit after the point and thus we have to carry a one to the left. But also, what other number could the result possibly be?

This means that `0.1` must signify what we'd typically refer to as one-half, since two of them equal 1. For the same reason, `0.01` must signify one-fourth, since `0.01 + 0.01` must equal `0.1`, and so `0.01` is half of one-half. Similarly, `0.001` must mean one-eighth. Similarly, `0.11` must mean "three-fourths", since it's `0.1 + 0.01`, or one half plus one-fourth. It's just the only consistent system.

## Unrepresentable states

"Make illegal states unrepresentable" is a maxim in computer science, usually used to mean something like "if a user account in your app can only have the role 'staff member' or the role 'customer', use an enum to store their role instead of a string, because a string could potentially represent the illegal state 'staf member'." Unfortunately, in math, there are lots of states that are unrepresentable despite being perfectly legal. Famously, one-third cannot be represented by a single normal decimal number with a finite amount of digits, since it's 0.333333 with an infinite number of 3s.

Similarly, in binary, it's very difficult to represent one-tenth. In decimal, it's easy: you just write 0.1; but in binary, `0.1` is one-half. `0.001` is one-eighth, which is close to one-tenth, but not that close; a more precise representation would be something like `0.000110011`, which consists of the binary for one sixteenth plus one thirty-second plus one two-hundred-and-fifty-sixth plus one five-hundred-and-twelfth. Combining all of these increasingly precise fractions gets you a number that's equal to 0.099609375. Which is, you know, closer!

Tragically, representing one-tenth in binary exactly would take an infinite number of digits - the `0011` part after the point repeats infinitely, just like the 3 in "0.333333...". In general, numbers that can be represented very easily in one number system can't necessarily be represented at all in another. For example, one-third is impossible to write in decimal and binary, but can be written very easily, as "0.1", in ternary (i.e. base 3, the number system that uses the digits 0, 1, and 2.)

This is a problem because of the ubiquitous use of number like 0.1 in our everyday lives. For example, we divide currencies up into 100 equal pieces called cents, and write things like "$0.10" to mean "ten cents." This amount of dollars can't be precisely represented by computers in binary, since it would take an infinite number of digits, and computers have a finite number of little transistors (or whatever) to represent digits with.

But, since we generally only subdivide dollars or euros into 100 constituent pieces, if we want to store prices precisely, we can just multiply them by 100 and store them as whole numbers of cents. Easy. In general, whole numbers are easy to store precisely because they're built out of atomic, indivisible units of 1, so you'll never find yourself needing infinite precision to store them; and dollars and euros are built out of indivisible units called "cents." It all fits. So that's why and how you should use whole numbers for prices.

## Conclusion

So, floating-point math isn't the problem; math is the problem. "Floating-point" just means we're writing numbers with the point going wherever it wants, albeit with a fixed amount of digits available, since computers can only store so many of those. If our computer allocates eight bits to store the digits part of a binary number, floating point lets us put the point close to the end of the digits if we need to store a large number, like 64.5 (`1000000.1`), or close to the beginning if we need to store a small number, like three sixty-fourths (`0.0000110`). The internal representation used to achieve this result is complicated and involves stuff like a "mantissa," but that is relatively rarely important.

## Appendix A: Floating Point is the Problem Actually

One caveat that's ended up being kind of obscure knowledge but is pretty obvious if you take the above paragraph seriously is that floating-point numbers do give you vastly more precision when storing numbers between 0 and 1 than they do when storing numbers between e.g. 10000 and 100000. The reason is simple: when you have the decimal point all the way to the left, then there are many digits after the decimal point that you can use and you can get really precise. However, when the decimal point is all the way to the right, there are few digits after the decimal point, and so you can't represent the fractional part of the number as precisely. Numbers like `100000.00` have very few numbers after the decimal point, given that they consist of only 8 binary digits and most of those have to be before the decimal point, whereas numbers like `10.000000` have way more space after it.

[A blog post](https://chadnauseam.com/coding/random/floating-points-between-zero-and-one) ended up pretty high up on Hacker News for showing that there are as many unique numbers between 0 and 1 in standard floating-point systems as there are between 1 and infinity, and the details of that are kind of complicated and have to be presented with some experimental analysis and math and such, but the ultimate reason for it, as described above, is really very simple - you'd get the same basic property in any system that had a fixed number of digits and where you could place the point anywhere between them.

So that's the one thing about this basic system that I would say is pretty weird in a way that normal math isn't, but it ultimately comes from the fact that computers store numbers using a specific number of digits, not because of anything arcane. The lesson is that if you want to store precise numbers using this system, aim to store small ones - in video games, where the locations of things are stored very precisely, people often aim to use coordinates that are between 0 and 1, just because that lets you put so many digits after the point. Fixed point wouldn't have this problem.

## Appendix B: Is fixed-point math actually that obscure?

Technically, the scheme for storing currencies where you multiply dollar amounts by 100 before storing them, which practically everyone uses, is a "fixed-point math" situation: implicitly, the point is always positioned two places from the right of the number, making it fixed. However, no-one calls that "fixed-point math", possibly because all this terminology is just confusing, possibly because you could claim that that system is integer math that just uses cents as the unit, and possibly because fixed-point math has traditionally meant that the point is fixed at a certain location on the binary level, not in the decimal number you can get from it. But you could certainly make a case that fixed-point math is alive and well and all around us, albeit in this kind of edge-case form, even while previous use cases for it like "all math on the PlayStation 1" have faded away into history.

## Appendix C: Why base 10?

Humans normally use base 10 because we have 10 fingers; technically, different humans in different parts of the world have historically used different bases for their numbers system, and the original source of the base 10 system is unverifiable due to it being very old, but the fingers thing is probably why it's common. Of course, you're only restricted to counting on base 10 on your fingers if you like, count them. If you treat each finger like a binary switch that can be either folded in or extended, you can use them as binary digits and count to 1,024 on them 😀.

_This post's image is an [Anita 1011 calculator](https://commons.wikimedia.org/wiki/File:Anita1011-1.jpg) belonging to [MaltaGC](https://en.wikipedia.org/wiki/User:MaltaGC), shared under the the Creative Commons Attribution-Share Alike 3.0 Unported license._
