module.exports = function(c) {
	c.ignores.add('README.md')
	c.addPassthroughCopy({'../tailwind/style/': 'style/'})
}
