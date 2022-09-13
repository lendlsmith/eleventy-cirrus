const pluginDate = require("eleventy-plugin-date");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./assets/sass")
	eleventyConfig.addWatchTarget("./assets/js")

	eleventyConfig.addPassthroughCopy("./assets/dist")

	eleventyConfig.addWatchTarget("./assets/img")
	eleventyConfig.addPassthroughCopy("./assets/img")

	eleventyConfig.addPlugin(pluginDate);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	return {
		passthroughFileCopy: true,
	}
}
