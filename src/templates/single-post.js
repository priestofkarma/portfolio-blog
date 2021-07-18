import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PrevNext from "../components/PrevNext"
import kebabCase from "lodash/kebabCase"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';


export const pageQuery = graphql`
query postQuery($id: String) {
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

const PageTemplate = ({ data: { mdx }, pageContext: { prev, next } }) => {

  const {title, tags} = mdx.frontmatter

  deckDeckGoHighlightElement();
  return (
    <Layout>
      <Seo />
      <div className="wrapper">
        <div className="post-info">
          <div className="post-info_item">
          {tags && (
            <div className="post-info_item">
              <p className="h4">Теги</p>
              <ul className="post-info_tags">
                {tags.map((tag, index) => (
                  <li key={`tag-list-item-${index}`}><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
        <div className="content">

          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <PrevNext prev={prev} next={next} postType="заметка" />
      </div>

    </Layout>
  )
}

export default PageTemplate