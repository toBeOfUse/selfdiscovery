import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { experimental_AstroContainer } from "astro/container";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  let blog = await getCollection("blog");
  blog.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  blog = blog.slice(0, 10);

  return rss({
    // `<title>` field in output xml
    title: "Self-Discovery",
    // `<description>` field in output xml
    description: "",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site!,
    items: await Promise.all(
      blog.map(async (post) => {
        const { Content: ContentComponent } = await post.render();
        const container = await experimental_AstroContainer.create();
        const content = await container.renderToString(ContentComponent);
        return {
          title: post.data.title,
          pubDate: post.data.date,
          categories: post.data.tags,
          content,
          description: post.data.tagline,
          link: `/blog/${post.slug}/`,
        };
      })
    ),
  });
};
