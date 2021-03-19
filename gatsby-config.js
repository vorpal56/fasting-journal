module.exports = {
  pathPrefix: "/fasting-journal",
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/notes`,
        basePath: `/`,
        rootNote: `/hello`,
      },
    },
  ],
  siteMetadata: {
    title: `Anthony's Fasting Journal`,
  },
}
