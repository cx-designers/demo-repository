module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addWatchTarget("src/assets");
  
    return {
      passthroughFileCopy: true,
      markdownTemplateEngine: "njk",
      templateFormats: ["html", "njk", "md"],
      dir: {
        input: "src",
        output: "public",
        include: "_includes",
      },
    };
  };