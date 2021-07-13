import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PrevNext from "../components/PrevNext"
import kebabCase from "lodash/kebabCase"
import { MdxEmbedProvider } from '@pauliescanlon/gatsby-mdx-embed';

export const pageQuery = graphql`
  query singleProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
      frontmatter {
        path
        title
        tags
      }
    }
  }
`
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx }, pageContext: { prev, next } }) {
  return (
    <Layout>
      <Seo />
      <div className="wrapper">
        <div className="post-info">
          <div className="post-info_item">
            <p className="h3">Теги</p>
            <ul className="post-info_tags">
              {mdx.frontmatter.tags.map((tag, index) => (
                <li key={`tag-list-item-${index}`}><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content">

          <MdxEmbedProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MdxEmbedProvider>
          
        </div>

        <PrevNext prev={prev} next={next} postType="работа" />

      </div>
    </Layout>
  )
}