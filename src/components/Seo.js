import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const siteData = graphql`
  query {
    site {
      siteMetadata {
        description
        image
        siteUrl
        title
      }
    }
  }`

const SEO = ({ pageTitle, pageDescription }) => {

  const { site } = useStaticQuery(siteData)

  const {
    title,
    description,
    image,
    siteUrl,
  } = site.siteMetadata;


  const seo = {
    title: pageTitle || title,
    description: pageDescription || description,
    // image: `${ siteUrl }${ image || defaultImage}`,
    // url: `${ siteUrl } ${ pathname } `,
  }

  const concatTitle = `${seo.title} | ${title } `;

  return (
    <Helmet htmlAttribute={{ lang: "ru" }} title={concatTitle}>
      {/* <title>{siteTitle}</title> */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={image} />
      {/* Facebook Card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seo.description} />
      {/* <meta property="og:image" content={`${ siteUrl } ${ image } `} /> */}
      <meta property="og:image" content="400" />
      <meta property="og:image:height" content="300" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={instagramUsernmae} /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${ siteUrl } ${ image } `} />
    </Helmet>
  )
}

export default SEO
