const { DateTime } = require('luxon')

module.exports = function(eleventyConfig){
	eleventyConfig.ignores.add('README.md')
	
	eleventyConfig.addPassthroughCopy({'../../packages/tailwind/style/': 'style/'})
	eleventyConfig.addPassthroughCopy({'../../packages/netlifyCMS/admin': 'admin/'})

	eleventyConfig.addFilter('readableDate', dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat('dd LLL yyyy')
	})
	eleventyConfig.addFilter('htmlDateString', dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd')
	})

	return {
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			includes: "../../packages/eleventy/_includes"
		}
	}
}
