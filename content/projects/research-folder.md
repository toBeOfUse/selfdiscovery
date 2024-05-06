---
title: Research Folder
date: Spring 2023 - Summer 2023
image: /research-folder.jpg
github_link: https://github.com/toBeOfUse/research-folder
---

This is a simple web app for organizing research papers that I created while I was a research assistant in a distributed algorithms lab. I mean, it *was* simple, but I kept adding features to it.

<!-- more -->

This was built using Vue, Vite, Typescript, Express, and Remult. Using it, you can can fetch research papers using the Semantic Scholar API and display them in a table. You can also manually create and edit table entries. It can display the referenced research papers as embedded PDFs, and provides an integrated note-taking interface that allows you to "mention" other research papers in your notes, linking to them. You can also view them as a graph, with the edges provided by the "mentions" in your notes or the citations between papers. You can also position the papers within the graph according to their textual embeddings, using the SPECTER2 embeddings provided by Semantic Scholar. The embeddings are reduced to two dimensions using TSNE for display.
