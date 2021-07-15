import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PrevNext from "../components/PrevNext"
import kebabCase from "lodash/kebabCase"

export const pageQuery = graphql`
  query singleProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
      frontmatter {
        path
        title
        projectLink
        tags
        instruments
        description
      }
    }
  }
`
const shortcodes = { Link } // Provide common components here


export default function PageTemplate({ data: { mdx }, pageContext: { prev, next } }) {

  const {title, projectLink, tags, instruments, description} = mdx.frontmatter

  return (
    <Layout>
      <Seo />

      <div className="wrapper">


        <div className="post-info">

          {title && (
            <h1>{title}</h1>
          )}

          {description && (
            <p>{description}</p>
          )}


          {/* {tags && (
            <div className="post-info_item">
              <p className="h5">Теги</p>
              <ul className="post-info_tags">
                {tags.map((tag, index) => (
                  <li key={`tag-list-item-${index}`}><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></li>
                ))}
              </ul>
            </div>
          )} */}

          {projectLink && (
            <div className="post-info_item">
              <p className="h5">Ссылка на проект:</p>
              <a href={projectLink} target="_blank">{title}</a>
            </div>
          )}

          {instruments && (
            <div className="post-info_item">
              <p className="h5">Инструментарий:</p>
              <ul>
                {instruments.map((item, index) => (
                  <li key={`instrument-item-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}


        </div>


        <div className="content">

          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>

        </div>

        <PrevNext prev={prev} next={next} postType="работа" />

      </div>

    </Layout>
  )
}