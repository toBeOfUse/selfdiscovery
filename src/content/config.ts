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
    // description may be supplied by the <!-- more --> tag
    description: z.string().optional(),
    live_link: z.string().optional(),
    live_link_title: z.string().optional(),
    date: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  // TODO: custom loader that excludes .draft.md files?
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    image_style: z.enum(["old", "normal"]).optional(),
    tags: z.array(z.string()),
    date: z.date(),
    // not actually used by any posts, unsure why it exists
    date_as_string: z.string().optional(),
  }),
});

// this is just here to get rid of the warning about the "drafts" folder
const drafts = defineCollection({
  type: "content",
  schema: z.any(),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects,
  blog,
  drafts,
};
