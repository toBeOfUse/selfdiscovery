---
title: libsrcml.js
date: Fall 2023
description: I created a WebAssembly version of a C library and wrote a JavaScript wrapper for it.
image: /srcml-playground.jpg
image_alt: A webpage with three primary sections arranged in a row. In the middle is some code, in C; on the right is an XML document breaking that code down into its component parts; and on the left is a narrower section showing the XML document in the form of a tree made out of expandable sections.
live_link: https://www.srcml.org/doc/playground/
---

[srcML](https://srcml.org) is [a well-known research project](https://en.wikipedia.org/wiki/SrcML) that aims to generate abstract syntax tree markup for code: it labels syntactic entities like classes, functions, and statements with XML in a uniform style across multiple languages. Its core is a C/C++ library, libsrcml, which contains a parser and a lot of utility functions for managing "units" (XML files) and "archives" (XML files that correspond to multiple source code files). A Python wrapper for the library already exists, which loads and calls compiled code using the `ctypes` module. I was tasked with bringing libsrcml to the JavaScript ecosystem by compiling it to WebAssembly and writing an idiomatic and object-oriented wrapper around it. This project required thinking across a wide range of levels of abstraction, from low-level C-style memory management to JSDoc types.

Although libsrcml is written with C++, its programmatic API consists of standalone C functions that operate on pointers to opaque structs. This is very different from the typical JavaScript library, where nested, transparent objects and first-class functions are ubiquitous; this gap had to be bridged with a very different design, where units and archives went from being opaque pointers to being dynamic objects that provide access to the original library's functionality.

The build process also posed some challenges; although it is the industry standard and the most feature-complete C/C++ to WASM compiler I could find, I discovered that Emscripten was [inconsistent](https://github.com/emscripten-core/emscripten/issues/18626) about outputting CJS vs. ES modules, and [leveraged tricks](https://github.com/emscripten-core/emscripten/issues/20580) with dynamic imports that bundlers like Vite struggled to understand. I ended up using Docker to provide a portable environment for deterministically compiling libsrcml into WASM and carefully patching the emitted JavaScript "glue code."

I then used my new library to build a new "playground" for srcML, where you can see code being parsed into XML documents by srcML live in your browser.
