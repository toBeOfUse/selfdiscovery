// this file implements the recipe for dynamically importing images, giving us
// the ability to get static data about images at build time that can be
// supplied to astro's <Image> component or its `getImage` function
// https://docs.astro.build/en/recipes/dynamically-importing-images/

import type { GetImageResult } from "astro";
import { getImage } from "astro:assets";

// it turns out that we have to use a fully general import statement here that
// grabs all of the images in the assets directory so that vite knows that all
// the files that match this pattern are dependencies that should be in the
// build output. (if we tried to remove this step and just called `await
// import("/assets/" + assetPath)` in the `imageAsset` function, it doesn't work,
// because vite wouldn't know what that dependency is.)
const imagePromises = import.meta.glob<{ default: ImageMetadata }>(
  "/assets/**/*.{jpeg,jpg,png,gif,svg,webp}"
);

// get the metadata (width, height, etc) and optimized src for all of the images
// that were imported. it would be ideal to only optimize the images that are
// actually used, but it gets really tricky to keep track of those images when
// some of them won't even be visible in the initial server-side render

const images: Record<string, { default: ImageMetadata }> = Object.fromEntries(
  await Promise.all(
    Object.keys(imagePromises).map(async (key) => [key, await imagePromises[key]()])
  )
);

const optimizedImages: Record<string, GetImageResult> = Object.fromEntries(
  await Promise.all(
    Object.entries(images).map(async ([key, imageMetadata]) => [
      key,
      await getImage({
        widths: [400, 800, 1200],
        src: imageMetadata.default,
        quality: 95,
      }),
    ])
  )
);

/**
 * it is convenient to put the alt text for all "fixed" images here (i.e. those
 * used in the design of the site itself, not part of the markdown content), so
 * that they'll automatically get the right alt text wherever they're used (in
 * the Image and PageMeta components, and in the return value from the
 * `imageAsset` function.) if their filenames change, well, whoops
 */
export const commonAltText: Record<string, string> = {
  "circuit.png":
    "An illustration of a lightbulb being powered by a simple circuit " +
    "composed of a battery and a switch that is being flipped on.",
  "typewriter.png":
    "An old-fashioned electric typewriter on a desk, with a piece of paper " +
    "coming out of it showing faces and animals made out of typed characters.",
  "m-w.png":
    "3D layered sine waves of different shades of blue. " +
    "They look a little like a repeated 'M'.",
};

/**
 * Supply the relative path of an image within the assets directory (e.g.
 * "projects/corn.jpg"), and get back an object with that image's metadata and
 * its optimized src.
 */
export function imageAsset(assetPath: string) {
  const composedPath = "/assets/" + assetPath;
  if (!(composedPath in images)) {
    throw new Error(
      `\nCannot find image: ${composedPath}.\nValid image paths are: ${Object.keys(images)
        .map((i) => `"${i}"`)
        .join(", ")}`
    );
  }

  return {
    ...images[composedPath].default,
    optimized: optimizedImages[composedPath],
    alt: commonAltText[assetPath] as string | undefined,
  };
}
