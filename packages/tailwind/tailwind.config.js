module.exports = {
  content: ['../eleventy/**/*.njk'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
