import { toString } from "mdast-util-to-string";

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

        // get the content before the cut in its original markdown form, for
        // rendering
        file.data.astro.frontmatter.introMD = file.value.slice(
          childrenBeforeCut.position.start.offset,
          childrenBeforeCut.position.end.offset
        );

        file.data.astro.frontmatter.hasMore = true;
        return;
      }
    }

    // if there was no <!-- more -->, then treat the whole thing as the "intro"

    file.data.astro.frontmatter.description = toString(tree.children);
    file.data.astro.frontmatter.introMD = file.value;
    file.data.astro.frontmatter.hasMore = false;
  };
}
