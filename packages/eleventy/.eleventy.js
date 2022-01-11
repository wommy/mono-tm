module.exports = function(eleventyConfig){
	eleventyConfig.ignores.add('README.md')
	eleventyConfig.addPassthroughCopy({'../tailwind/style/': 'style/'})
	return {
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
	}
}
