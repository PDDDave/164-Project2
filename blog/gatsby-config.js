require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Dex-Blog`,
    description: `Pokemon style Pokedex blog`,
    author: `David Charles`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: `David Charles`,
      company: `MKE-Dex club`,
      address: `Prof. Dogwood's Lab`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
