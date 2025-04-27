import { visit } from "unist-util-visit";

export function addLabelsToFootnoteDefs() {
  /**
   * @param {import('mdast').Parent} tree
   */
  return function (tree, file) {
    visit(tree, "footnoteDefinition", function (node, index, parent) {
      // compute label to put at beginning of footnote definition
      let footnoteLabel = node.label;
      if (!isNaN(Number(footnoteLabel))) {
        footnoteLabel += ".";
      } else {
        footnoteLabel += ":";
      }

      // find the relevant text node and add the label at the beginning
      let footnoteDefChild = node.children[0];
      while (footnoteDefChild.type !== "text") {
        if (!footnoteDefChild?.children?.length) {
          console.error("couldn't find place to add label to footnote definition");
          return;
        } else {
          footnoteDefChild = footnoteDefChild.children[0];
        }
        // footnoteDefChild is now the first node of type "text" that is
        // descended from the footnoteDefinition node. so, add the label
        footnoteDefChild.value = `${footnoteLabel} ${footnoteDefChild.value}`;
      }
    });
  };
}
