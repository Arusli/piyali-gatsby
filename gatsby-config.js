/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// node snippet to access .env files
 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Piyali Sircar Designer',
    description: 'Portfolio for Piyali Sircar',
    author: 'Piyali Sircar',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `d1xnaae74je6`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ], // end plugins array
} // end module.exports object
