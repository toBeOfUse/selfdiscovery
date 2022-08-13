---
date: June 2021
title: Minecraft Map Collage
github_link: https://github.com/toBeOfUse/minecraft-map-frame
live_link: https://mitch.website/minecraft/
image: /minecraft-map.jpg
image_alt: A detailed pixel-art map of a small forest and village with an irregularly-shaped black outline. Outside of the outline, a lower-resolution faded map is visible. In a box on the top right has controls such as "Zoom Way Out" as well as a listing of some coordinates.
---

I made a website that stitches together maps generated in the video game _Minecraft_ and displays them with various labeled points of interest.

<!--more-->

This is another app scaffolded and built with the Vue CLI, written in TypeScript and with some components that use TSX and render functions. It uses the [RBush](https://github.com/mourner/rbush) library to spatially index the map elements and the [Bezier.js](https://pomax.github.io/bezierjs/) library to help create SVG curves. The data used by the frontend is built by a small Python program that includes a module written in the [Cython](https://cython.org/) extension language in order to process [binary data](https://minecraft.fandom.com/wiki/Map_item_format) from the _Minecraft_ files at very high speeds.

There already exists a lot of software that generates maps from _Minecraft_ worlds, but I didn't want this program to generate new maps - I wanted to extract and display the ones that I had organically created in-game. As a result, I was working with static images that portrayed a world at very different levels of detail, and I needed to separate the map areas that were mapped out at the higher level of detail and thus could be zoomed in on from those that weren't. To do this, I grouped adjacent high-detail maps into "islands" and displayed the available islands as part of the "zoom in" interaction.

The more interesting problem was stopping users from panning away from a high-detail island and into low-detail territory while they were zoomed in. To do this, the build step generates data for polygons that enclose all the maps of each island and the front end treats the sides of these as collision bounds that interact with an imaginary point at the center of the user's screen, with the goal of keeping this point from escaping the current island (except when "cutting across" a concave corner; the polygons are altered to leave room for that.) To do this, I perform a simple point-in-polygon test to see if a user's interaction kept the center-of-the-screen point inside the polygon and, if not, I find the closest point on the polygon to the one the user was aiming towards and move the map so that the screen is centered on that. (This method of projecting the collision point back onto the polygon means that the component of its movement vector that wasn't responsible for trying to leave the polygon is preserved (i.e. if you try to pan the map diagonally off an island you will slide along its edge instead of just stopping.))

<figure class="my-4 bg-gray-200 p-2 w-4/5 mx-auto">
    <img src="/panandcollision.svg" class="max-w-sm w-full h-auto mx-auto" loading="lazy" alt="Described in caption below." />
    <figcaption class="w-full text-sm rounded my-2">
        As we pan diagonally across this verdant green island, the point at the center of our view (red) is successfully pulled across a concave corner but then collides with the collision polygon (also red), eventually halting the panning motion.
    </figcaption>
</figure>

I also wanted to display organically curved paths on the map that went from point to point without having to manually draw them. To do this, I connected the points with imaginary line segments, calculated the slopes of the tangents of the corners where those line segments meet, and created Bezier curves that had the same slopes at the same points but interpolated them smoothly in between.

<figure class="my-4 bg-gray-200 p-2 w-4/5 mx-auto">
    <img src="/path-interpolation.svg" class="max-w-sm w-full h-auto mx-auto max-h-96" loading="lazy" alt="Described in caption below." />
    <figcaption class="w-full text-sm rounded my-2">
        This simple animation shows how a smooth curve can be derived from a sequence of line segments (which can be derived from a sequence of points) just by keeping the slopes of the tangents constant. In other words, the slopes of the tangents of the corners become the slope of the final curve at those same points. To achieve this, the control points of the final cubic Bezier curve should be at the ends of the dashed line segments here.
    </figcaption>
</figure>
