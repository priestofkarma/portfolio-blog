import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PrevNext from "../components/PrevNext"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import InfoMd from "../components/shortcodes/InfoMd"


export const pageQuery = graphql`
  query postQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
      frontmatter {
        path
        title
        description
      }
    }
  }
`

const shortcodes = { Link, InfoMd }

const PageTemplate = ({ data: { mdx }, pageContext: { prev, next } }) => {

  const { title, description } = mdx.frontmatter

  deckDeckGoHighlightElement();
  return (
    <Layout>
      <Seo pageTitle={title} pageDescription={description} />
      <div className="wrapper">
        <h1>{title}</h1>

        <hr />

        <article className="content">

          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
        <PrevNext prev={prev} next={next} postType="заметка" />
      </div>

    </Layout>
  )
}

export default PageTemplate