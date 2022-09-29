const pluginDate = require("eleventy-plugin-date");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const fs = require("fs");
const NOT_FOUND_PATH = "_site/404.html";

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./assets/sass")
	eleventyConfig.addWatchTarget("./assets/js")

	eleventyConfig.addPassthroughCopy("./assets/dist")

	eleventyConfig.addWatchTarget("./assets/img")
	eleventyConfig.addPassthroughCopy("./assets/img")

	eleventyConfig.addPlugin(pluginDate);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function(err, bs) {

				bs.addMiddleware("*", (req, res) => {
					if (!fs.existsSync(NOT_FOUND_PATH)) {
						throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`);
					}

					const content_404 = fs.readFileSync(NOT_FOUND_PATH);
					// Add 404 http status code in request header.
					res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
					// Provides the 404 content without redirect.
					res.write(content_404);
					res.end();
				});
			}
		}
	});

	return {
		passthroughFileCopy: true,
	}
}
