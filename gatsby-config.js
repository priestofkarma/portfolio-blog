module.exports = {
	siteMetadata: {
		siteUrl: "http://www.webofkarma.com",
		title: "Женя Петренко",
		description: "Розробка сайтів, верстка, портфоліо веб-розробника",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "277499018",
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [".mdx", ".md"],
				plugins: [
					`gatsby-remark-images`,
					`gatsby-remark-images-medium-zoom` // Important!
				],
				gatsbyRemarkPlugins: [
					`gatsby-remark-copy-linked-files`,
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false,
							prompt: {
								user: "root",
								host: "localhost",
								global: false,
							},
							escapeEntities: {},

						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1180,
							linkImagesToOriginal: false,
							quality: 100,
						},
					},
					{
						resolve: `gatsby-remark-images-medium-zoom`,
						options: {}
					}
				],
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
		},
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -70,
				duration: 50,
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "projects",
				path: `${__dirname}/src/content/projects`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blog",
				path: `${__dirname}/src/content/notes`,
			},
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
				icon: "src/images/logotype-2.svg", // This path is relative to the root of the site.
				// An optional attribute which provides support for CORS check.
				// If you do not provide a crossOrigin option, it will skip CORS for manifest.
				// Any invalid keyword or empty string defaults to `anonymous`
				crossOrigin: `use-credentials`,
			},
		},
		// `gatsby-plugin-offline`,
	],
};
