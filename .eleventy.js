import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/video");
    eleventyConfig.addPassthroughCopy("src/assets/pdf");

    //  Plugins ────────────────────────────────────────────────────────────────
    eleventyConfig.addPlugin(syntaxHighlight);

    //  Filters ────────────────────────────────────────────────────────────────
    eleventyConfig.addNunjucksFilter("trim", function trimFilter(text, char) {
        return text.endsWith(char) ? text.slice(0, -1) : text;
    });

    eleventyConfig.addFilter("byCreatedAt", function sortByOrder(values) {
        if (!values || values.length === 0) {
            return [];
        }

        const vals = [...values];
        return vals.sort(
            (a, b) => new Date(b.data.createdAt) - new Date(a.data.createdAt),
        );
    });

    return {
        dir: {
            input: "src",
            // Relative to input directory
            layouts: "_layouts",
            includes: "_includes",
            output: "dist",
        },

        templateFormats: ["html", "njk", "md", "11ty.js"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
