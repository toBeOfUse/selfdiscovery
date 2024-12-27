import { toString } from "mdast-util-to-string";

export function getDescription() {
  /**
   * @param {import('mdast').Parent} tree
   */
  return function (tree, file) {
    for (let i = 0; i < tree.children.length; ++i) {
      if (/<!--\s*more\s*-->/.test(tree.children[i].value)) {
        const childrenBeforeCut = { ...tree, children: tree.children.slice(0, i) };
        const textBeforeCut = toString(childrenBeforeCut);
        file.data.astro.frontmatter.description = textBeforeCut;
        return;
      }
    }
  };
}
