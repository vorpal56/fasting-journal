module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/notes`,
		basePath: `/`,
        rootNote: `/index`,
      },
    },
  ],
  siteMetadata: {
    title: `My Fasting Journey`,
  },
}
