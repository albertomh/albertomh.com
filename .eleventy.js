module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/img");

    return {

        dir: {
            input: "src",
            includes: "_includes",  // Relative to input directory.
            layouts: "_layouts",    // Relative to input directory.
            output: "dist",
        },

        templateFormats: ["html", "njk", "md", "11ty.js"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk"

    }
};