module.exports = {
  siteMetadata: {
    title: `Lucas da Silva`,
    description: `Art portfolio.`,
    author: `@_agtlucas`,
    social: [
      {
        name: "ArtStation",
        url: "https://www.artstation.com/agtlucas",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/_agtlucas/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/_agtlucas",
      },
    ],
  },
  plugins: [
    `gatsby-theme-gallery`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
