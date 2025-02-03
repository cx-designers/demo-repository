module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  const markdownIt = require("markdown-it");
    const markdownItOptions = {
        html: true  // This allows raw HTML inside Markdown files
    };
    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));
  eleventyConfig.addCollection("pages", (collection) => {
    return collection.getAll().map((page) => {
      if (page.inputPath.endsWith(".md")) {
        page.data.permalink = page.inputPath.replace(".md", ".html");
      }
      return page;
    });
  });
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };
};
