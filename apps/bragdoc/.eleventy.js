module.exports = function(c) {
	c.ignores.add('README.md')
	c.addPassthroughCopy("admin")
	return {
		dir: {
			includes: "../../packages/eleventy/_includes"
		}
	}
}
