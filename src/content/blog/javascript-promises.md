---
title: JavaScript Promises Break Code in Half
date: 2025-04-27
tagline: "A way to think about JavaScript Promises that took me a while to figure out. Alternatively: the mysterious gap in the dark heart of the Promise construct."
tags: ["computers", "javascript", "explainers"]
---

"Promises" are a ubiquitous feature in the JavaScript language. For example, if you call the function `fetch` in order to get some kind of JSON object from an API, `fetch` will return a Promise:

```js
const thisIsAPromise = fetch("/api/get-id/1");
```

What does that mean? The [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) informs us that a Promise "is a proxy for a value not necessarily known when the promise is created." That's kind of true, and for a while, I even believed it. However, nowadays, I think that it's actually easier to think of Promises as a way to manage code, not data.

<!-- more -->

## The standard formulation

In the standard formulation, the variable `thisIsAPromise` above represents the response that your site's API gave you when you requested data, but you can't access it normally because that response does not exist on your computer yet (since it takes time for your request to make it to your API and for API's response to make it to your computer.)

So, you have to use special syntax to access that response:

```js
fetch("/api/get-id/1").then((response) => {
  /* do something with the response... */
});
// or:
const response = await fetch("/api/get-id/1");
```

And that's great and all, but it doesn't really explain why Promises are necessary. For example, in Python, it's easy to make requests to APIs that don't involve Promises or proxies for values at all:

```python
import requests
# this line of code gets data from an API
thisIsAnApiResponse = requests.get("/api/get-id/1")
# view the data, with no awaits or .then()s needed:
print(thisIsAnApiResponse.text)
```

Why is that code so simple? Is Python just, like, better?

## Slower-than-light travel

The problem with the approach above is this: The line `requests.get("/api/get-id/1")`, in Python, effectively takes a really long time to execute.

I mean, probably not that long, but you could be on a slow network connection, talking to an overloaded server. It could take as long as a second! And in JavaScript, that's a deal-breaker. While the line of code that makes the API request and waits for a response is executing, the user could be clicking on stuff. A second is a long enough time for a user to click things. And if the user clicks on stuff while the long-running line of code is longly running, that click won't do anything until up to a second later. That would give the user a suboptimal experience.

Promises[^1] are how JavaScript gets rid of that long-running line of code: they're best thought of as a way to manage code, not data.

## What I mean by that

The point of Promises is to break your code up into two pieces. There's the part of your code that runs before some slow, long-running operation, and then there's the part that runs after.

When you use `.then()`, that's pretty obvious:

```js
// this code runs before the network request:
const y = 1;
fetch("/api/thing-with-id/" + y).then((request) => {
  // the code in this callback runs after:
  console.log("request with id " + y + " finished");
});
```

No line of code in the above takes an appreciable amount of time to run. You might think that `fetch("/api/thing-with-id/" + y)` takes a while to run, but it totally doesn't: it just initiates a network request and then peaces out. Then, later, when the network request finishes, the other chunk of your code (the callback passed to `.then()`) is started. And in the meantime, between the network request being started and the network request finishing, none of this code is actually running; so in that period of time between the first chunk and the second chunk, the JavaScript runtime is free to do stuff like react to the user scrolling or clicking on things.

Even when you use `await`, the same thing is happening, just with simpler syntax:

```js
// code that runs before the network request:
const y = 1;
const request = await fetch("/api/thing-with-id/" + y);

// code that runs after:
console.log("request with id " + y + " finished");
```

It really, really feels like that line of code with "await" in it would take one second to run if the API takes one second to respond. But nope. That line also just initiates the network request and peaces out. You can tell because lines of code from other parts of your codebase can execute immediately after that line, like an `onClick` listener if the user clicked something or whatever; it's only the lines of code that are written directly after the `await` that are delayed. That code is simply started after the API request finishes, one second (or whatever) later. You can think of `await` as pausing the current function so that other code can run.

The primary job of a Promise isn't really to represent a value that has yet to be determined. After all, when you make a network request, you sometimes don't even care about the return value, like if you're updating some data through the API instead of just retrieving it. The point of a Promise is to break code up into chunks so that you can delay the second chunk for as long as necessary, without making any line of code run for a long time in order to delay it.

## Layering

You can only use `await` in async functions, and whenever you call an async function, it returns a Promise and you have to `await` the result:

```js
async function getThing(id) {
  const request = await fetch("/api/thing-with-id/" + id);
  // code that runs after the network request:
  console.log("request with id " + y + " finished");
  console.log("status code: " + request.status);
  return request.json();
}

async function getThingAndShowName() {
  const x = 1;
  const y = x + 1;
  const thing1 = await getThing(1); // <- an "await"
  window.alert("got thing with name: " + thing1.name);
}
```

The reason that you have to await `getThing` if you call it from `getThingAndShowName` is that `getThingAndShowName` also has to be split into chunks: the part that runs before `getThing` starts, and then the part that runs after `getThing` finishes. You can even think of the first part of `getThingAndShowName` and the first part of `getThing` as being one chunk, and then the second part of `getThing` and the second part of `getThingAndShowName` as being the next. But you still need two `await`s because you're breaking up two different functions.

The reason you can only use `await` in async functions is because async functions automatically return Promises, and Promises can be `.then()`ed or `await`ed, and those are needed to let you split the calling function in half to deal with the callee being split in half.

## Filling the gap

That's not to say that Promises make it so that you never have to worry about efficiency. If you have code that looks like this:

```js
async function getThing(id) {
  const request = await fetch("/api/thing-with-id/" + id);
  console.log("request with id " + y + " finished");
  return request.json();
}

async function getMultipleThings() {
  const thing1 = await getThing(1);
  const thing2 = await getThing(2);
  const thing3 = await getThing(3);
  console.log(thing1, thing2, thing3);
}

getMultipleThings();
```

Then your function will pause three separate times; once right after each `await` in `getMultipleThings`. Other stuff will be able to happen in the background during those pauses, but it's still going to delay that final `console.log()` by a lot. It's more efficient to gather up those Promises and pause for them all at once:

```js
async function getMultipleThings() {
  const [thing1, thing2, thing2] = await Promise.all(
    getThing(1),
    getThing(2),
    getThing(3)
  );
  console.log(thing1, thing2, thing3);
}
```

[`Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) allows you to take care of multiple Promises with only one `await`. This is usually faster, since multiple network requests can usually happen simultaneously, so they're all happening in the background at once in this scenario.

## Other types of asynchrony

### Old Node.js Stuff

Old Node.js functions, like the ones contained in the "fs" module, receive callbacks in order to split the code up into chunks:

```js
import fs from "node:fs";

// code run before the file is read:
console.log("gonna read test.txt :D");
fs.readFile("test.txt", "utf8", (err, testTxtContents) => {
  // code run after the file is read:
  if (err) {
    console.error(err);
    return;
  }
  console.log(testTxtContents);
});
```

This is basically like how `.then()` works, except it's not called `.then()`.

Node.js also contains some synchronous, blocking functions that do stop the world while they're working:

```js
// this single line of code takes however long actually
// reading this file takes:
const data = fs.readFileSync("test.txt", "utf8");
```

And that's terrible. They do have a newer module called "fs/promises" that works using modern promise-based syntax like you'd want.

### React Components

React components (normal ones, not React Server Components) have an interesting model of asynchrony wherein component render functions are the things that are treated as self-contained chunks of code that can't be interrupted. You cannot `await` within a React component function, or do anything like `await`ing. What you can do is call an async function, like `fetch`, in a way that runs a chunk of code that runs after it's done that sets a state variable in a component, and that will trigger the component's render function to run again with the updated value of that state variable in place at some point in the future.

[^1]: and, in Python, [coroutines and futures](https://docs.python.org/3/library/asyncio-task.html)
