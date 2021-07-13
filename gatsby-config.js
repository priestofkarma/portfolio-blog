module.exports = {
  siteMetadata: {
    siteUrl: "http://www.webofkarma.com",
    title: "Веб-разработчик",
    description: "Портфолио веб-разработчика, фрилансера и просто хорошего парня.",
    image: "src/images/zaglushka-2.jpg",
  },


  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "277499018",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-preload-link-crossorigin",
    "@pauliescanlon/gatsby-mdx-embed",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'base16-light',
              lineNumbers: true,
            }
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70,
        duration: 50,
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/content/projects/",
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/content/notes/",
      },
      __key: "blog",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "webofkarma",
        short_name: "webofkarma",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logotype.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
