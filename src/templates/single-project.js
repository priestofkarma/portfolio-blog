import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export const pageQuery = graphql`
  query singleProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
      }
    }
  }
`
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Seo />
      <div className="wrapper">
        <ul>
          {mdx.frontmatter.tags.map((tag, index) => (
            <li key={`tag-list-item-${index}`}><Link to={`/tags/${tag.toLowerCase()}`}>{tag}</Link></li>
          ))}
        </ul>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}