module.exports = function(eleventyConfig){
	eleventyConfig.ignores.add('README.md')
	eleventyConfig.addPassthroughCopy({'../tailwind/style/': 'style/'})
	eleventyConfig.addPassthroughCopy({'../netlifyCMS/admin': 'admin/'})
	return {
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
	}
}
