import { toHtml } from "hast-util-to-html";
import { Feed } from "feed";
import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event, "/notes")
    .where({ date: { $exists: true } })
    .sort({ date: -1 })
    .limit(15)
    .find();

  const blogUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mitch.website";
  const feed = new Feed({
    id: "atom",
    title: "Re-Research",
    description: "Atom feed for Re-Research",
    link: blogUrl,
    copyright: "2024 - Present, Mitch",
    updated: posts.length ? new Date(posts[0].date) : new Date(),
  });

  for (const doc of posts) {
    if (!doc.body) {
      // should not happen
      continue;
    }

    // convert doc.body, which is a MarkdownNode, into HAST format so that the
    // hast-util toHTML function can turn it into HTML
    // http://web.archive.org/web/20220714152648/https://journal.maciejpedzi.ch/generating-rss-feeds-for-a-nuxt-content-site
    const recursivelyPatchChildren = (node: any) => {
      if (node.type === "text") return node;
      node.tagName = node.tag;
      node.properties = node.props;
      node.children = node.children.map(recursivelyPatchChildren);
      return node;
    };
    const bodyAsHast = { ...doc.body, children: doc.body.children.map(recursivelyPatchChildren) };
    const content = toHtml(bodyAsHast);

    feed.addItem({
      id: doc._id,
      title: doc.title || "Untitled (1).txt",
      description: doc.description,
      date: new Date(doc.date),
      link: new URL(doc._path!, blogUrl).href,
      content,
    });
  }

  appendHeader(event, "Content-Type", "application/xml");
  return feed.atom1();
});
