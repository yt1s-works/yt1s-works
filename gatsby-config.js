module.exports = {
  siteMetadata: {
    title: `YT1s.works`,
    description: `Youtube Video Downloader`,
    author: `yt`,
    siteUrl: `https://yt1s.works/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `de`, `es`, `fr`, `hi`, `id`, `it`, `ja`, `ko`, `my`, `ms`, `tl-PH`, `pt`, `ru`, `th`, `tr`, `vi`, `zh-cn`, `zh-tw`, `ar`, `bn`],
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
        name: `yt1s`,
        short_name: `yt1s`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`, `/youtube-to-mp3/`, `/youtube-to-mp3/*`],
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "server",
        analyzerPort: "8888",
        analyzerHost: "https://yt1s.works/",
        defaultSizes: "gzip"
      },
    },
  ],
};
