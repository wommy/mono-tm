module.exports = {
  content: ['../../**/*.njk'],
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
