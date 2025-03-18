import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import config from "../astro.config.mjs";
// @ts-ignore there are tiny differences between the version of shiki in the
// config and the version createMarkdownProcessor expects, for some reason
const { render } = await createMarkdownProcessor(config.markdown);

// thing to render markdown into HTML. i think it will even use plugins and
// stuff. this is useful to render the "preview" of blog posts that is extracted
// by the readmore remark plugin
export default render;
