// this file implements the recipe for dynamically importing images, giving us
// the ability to get static data about images at build time that can be
// supplied to astro's <Image> component or its `getImage` function
// https://docs.astro.build/en/recipes/dynamically-importing-images/

// it turns out that we have to use a fully general import statement here that
// grabs all of the images in the assets directory so that vite knows that all
// the files that match this pattern are dependencies that should be in the
// build output. (if we tried to remove this step and just called `await
// import("/assets/" + assetPath)` in the `imageAsset` function, it doesn't work,
// because vite wouldn't know what that dependency is.)
const images = import.meta.glob<{ default: ImageMetadata }>(
  "/assets/**/*.{jpeg,jpg,png,gif,svg,webp}"
);

/**
 * Supply the relative path of an image within the assets directory (e.g.
 * "projects/corn.jpg"), and get back an object with that image's metadata.
 */
export async function imageAsset(assetPath: string) {
  const composedPath = "/assets/" + assetPath;
  if (!(composedPath in images)) {
    throw new Error(
      `\nCannot find image: ${composedPath}.\nValid image paths are: ${Object.keys(images)
        .map((i) => `"${i}"`)
        .join(", ")}`
    );
  }
  const { default: importedImage } = await images[composedPath]();
  return importedImage;
}
