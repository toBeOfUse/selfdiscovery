// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    github_link: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    iframe: z.string().optional(),
    iframe_title: z.string().optional(),
    // description should always be present, but, need to get some kind of <!--
    // more --> thing working
    description: z.string().optional(),
    live_link: z.string().optional(),
    live_link_title: z.string().optional(),
    date: z.string(),
  }),
});

// TODO
const notes = defineCollection({ type: "content", schema: z.object({}) });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects,
  notes,
};
