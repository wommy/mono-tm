module.exports = function(c) {
	c.ignores.add('README.md')
	return {
		dir: {
			includes: "../../packages/eleventy/_includes"
		}
	}
}
