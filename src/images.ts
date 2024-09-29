const images = import.meta.glob<{ default: ImageMetadata }>("/assets/**/*.{jpeg,jpg,png,gif}");

export function imageAsset(path: string) {
  console.log(images);
  return images[path];
}
