/// <reference path="../.astro/types.d.ts" />

declare module "*.svg?raw" {
  const content: string;
  export default content;
}
