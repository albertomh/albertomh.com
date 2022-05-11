module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/video");
    eleventyConfig.addPassthroughCopy("src/assets/pdf");

    eleventyConfig.addNunjucksFilter('trim', function trimFilter(text, char) {
        return text.endsWith(char) ? text.slice(0, -1) : text;
    });

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
