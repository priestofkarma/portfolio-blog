import React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import NotesList from '../components/NotesList'
import ProjectsList from '../components/ProjectsList'

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const ProjectTags = ({ pageContext, data }) => {

  // const tags = useStaticQuery(pageQuery)

  const { tag } = pageContext

  return (
    <Layout>
      <section className="tags">
        <div className="wrapper">
          {data.projectPages.totalCount !== 0 && (
            <ProjectsList title={`${data.projectPages.totalCount} ${declOfNum(data.projectPages.totalCount, ['проект', 'проекта', 'проектов'])} с тегом "${tag}"`} query={data.projectPages} />
          )}
          {data.notesPages.totalCount !== 0 && (
            <NotesList title={`${data.notesPages.totalCount} заметки`} query={data.notesPages} />
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ProjectTags

export const pageQuery = graphql`
  query ($tag: String) {
    projectPages: allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {fileAbsolutePath: {regex: "/content/projects/"}, frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            title
            tags
            path
            featuredImageAlt
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    notesPages: allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {fileAbsolutePath: {regex: "/content/notes/"}, frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            title
            tags
            path
          }
        }
      }
    }
    allPages: allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
    }


  }`
