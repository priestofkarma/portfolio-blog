import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PrevNext from "../components/PrevNext"
// import kebabCase from "lodash/kebabCase"

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

  const {title, projectLink, instruments, description} = mdx.frontmatter

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
              <a href={projectLink} className="project_link" target="_blank" rel="noreferrer">
              Ссылка на проект  
              <svg x="0px" y="0px" viewBox="0 0 512 512">
                <path d="M488.727,0H302.545c-12.853,0-23.273,10.42-23.273,23.273c0,12.853,10.42,23.273,23.273,23.273h129.997L192.999,286.09
                  c-9.089,9.089-9.089,23.823,0,32.912c4.543,4.544,10.499,6.816,16.455,6.816c5.956,0,11.913-2.271,16.457-6.817L465.455,79.458
                  v129.997c0,12.853,10.42,23.273,23.273,23.273c12.853,0,23.273-10.42,23.273-23.273V23.273C512,10.42,501.58,0,488.727,0z"></path>
                <path d="M395.636,232.727c-12.853,0-23.273,10.42-23.273,23.273v209.455H46.545V139.636H256c12.853,0,23.273-10.42,23.273-23.273
                  S268.853,93.091,256,93.091H23.273C10.42,93.091,0,103.511,0,116.364v372.364C0,501.58,10.42,512,23.273,512h372.364
                  c12.853,0,23.273-10.42,23.273-23.273V256C418.909,243.147,408.489,232.727,395.636,232.727z"></path>
              </svg>
              </a>
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