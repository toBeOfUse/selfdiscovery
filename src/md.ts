import { createMarkdownProcessor } from "@astrojs/markdown-remark";
const { render } = await createMarkdownProcessor();

// thing to render markdown into HTML. i think it will even use plugins and
// stuff. this is useful to render the "preview" of blog posts that is extracted
// by the readmore remark plugin
export default render;
