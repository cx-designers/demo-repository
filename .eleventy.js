module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

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