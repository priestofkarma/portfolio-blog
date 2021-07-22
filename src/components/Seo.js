import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import me from '../images/me.jpg'

const siteData = graphql`
  query {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }`

const SEO = ({ pageTitle, pageDescription, pageImage }) => {

  const { site } = useStaticQuery(siteData)

  const {
    title,
    description,
    siteUrl,
  } = site.siteMetadata;


  const seo = {
    title: pageTitle,
    description: pageDescription || description,
    image: `${siteUrl}/${pageImage || me}`,
  }

  const concatTitle = `${seo.title ? `${seo.title} |` : ""} ${title} `;

  return (
    <Helmet title={concatTitle}>
      <html lang="ru" amp />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* Facebook Card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={concatTitle} />
      <meta property="og:description" content={seo.description} />
      {/* Twitter Card */}
      {/* images start */}
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:height" content="300" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />
      {/* images end */}

      <meta name="twitter:title" content={concatTitle} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  )
}

export default SEO
