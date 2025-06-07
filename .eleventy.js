import { I18nPlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import mermaid from "@kevingimbel/eleventy-plugin-mermaid";
import translations from "./src/_data/translations.cjs";

function getNestedValue(obj, path) {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/video");
    eleventyConfig.addPassthroughCopy("src/assets/pdf");

    //  Plugins ────────────────────────────────────────────────────────────────
    eleventyConfig.addPlugin(I18nPlugin, {
        defaultLanguage: "en",
    });
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(mermaid, {
        mermaid_js_src: "https://unpkg.com/mermaid@11/dist/mermaid.esm.min.mjs",
        mermaid_config: {
            startOnLoad: true,
            theme: "base",
            gitGraph: { parallelCommits: false, mainBranchName: "date" },
        },
    });

    //  Filters ────────────────────────────────────────────────────────────────
    eleventyConfig.addFilter(
        "translate",
        (keyPath, locale, fallback = "en") => {
            const translationData = translations();
            const entry = getNestedValue(translationData, keyPath);
            return entry?.[locale] || entry?.[fallback] || keyPath;
        },
    );

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
}
