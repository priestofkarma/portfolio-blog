import React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import AllTagList from '../components/AllTagList'
import PostList from '../components/PostList'

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const ProjectTags = ({ pageContext, data }) => {

  const { tag } = pageContext

  // const tags = data.tags.group

  return (
    <Layout>
      <AllTagList />
      <div className="tags">
        <div className="wrapper">

          {data.projects.totalCount !== 0 && (
            <PostList
              title={`${data.projects.totalCount} ${declOfNum(data.projects.totalCount, ['проект', 'проекта', 'проектов'])} с тегом "${tag}"`}
              postType="projects"
              query={data.projects}
              linkText="Все проекты"
            />
          )}
          {data.notes.totalCount !== 0 && (
            <PostList
              title={`${data.notes.totalCount} ${declOfNum(data.notes.totalCount, ['заметка', 'заметки', 'заметок'])} с тегом "${tag}"`}
              postType="notes"
              query={data.notes}
              linkText="Все проекты"
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectTags

export const pageQuery = graphql`
  query ($tag: String) {
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    projects: allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {fileAbsolutePath: {regex: "/content/projects/"}, frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            description
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
    notes: allMdx(
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
