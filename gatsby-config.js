const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = {
  developMiddleware: app => {
    app.use(
        createProxyMiddleware("/api/ajaxSearch/index/*", {
          target: "https://yt1s.com",
          changeOrigin: true,
          pathRewrite: {"^/api/ajaxSearch/index": ""},
          headers: {Connection: 'keep-alive'}
        })
    )
  },
  siteMetadata: {
    title: `YT1s.works`,
    description: `Youtube Video Downloader`,
    author: `YT1s`,
    siteUrl: `http://localhost:8000/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `de`, `es`, `fr`, `hi`, `id`, `it`, `ja`, `ko`, `my`, `ms`, `ph`, `pt`, `ru`, `th`, `tr`, `vi`, `zh-cn`, `zh-tw`, `sa`, `bn`],
        defaultLanguage: `en`,
        redirect: false,
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`
      }
    },
    'gatsby-plugin-sitemap'
  ],
};
