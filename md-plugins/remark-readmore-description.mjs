import { toString } from "mdast-util-to-string";

// this is used to get the unformatted text that exists before a <!-- more -->
// comment from project posts to use as their descriptions. i do a similar thing
// with the content that goes before that comment in blog posts, but
// experimental_AstroContainer turns out to be better for getting a segment of
// the rendered HTML (as opposed to a plain text string.)
export function getDescription() {
  /**
   * @param {import('mdast').Parent} tree
   */
  return function (tree, file) {
    // iterate over all the top-level children of the document root
    for (let i = 0; i < tree.children.length; ++i) {
      // detect if a top-level child of the document root is a comment that
      // looks like this: <!-- more -->
      if (/<!--\s*more\s*-->/.test(tree.children[i].value)) {
        // if so, get a copy of the tree, but with only the children that come
        // before this comment
        const childrenBeforeCut = { ...tree, children: tree.children.slice(0, i) };
        // correct the new copy's "end" position to match where the tree got cut off
        childrenBeforeCut.position = {
          ...childrenBeforeCut.position,
          end: childrenBeforeCut.children.at(-1).position.end,
        };

        // get the content before the cut as a plain, unformatted string
        const textBeforeCut = toString(childrenBeforeCut);
        file.data.astro.frontmatter.description = textBeforeCut;
        return;
      }
    }
    file.data.astro.frontmatter.description = toString(tree.children);
  };
}
