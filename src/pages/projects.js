import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProjectIntro from '../components/ProjectIntro'
import ProjectsList from '../components/ProjectsList'

const projectsQuery = graphql`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/content/projects/"}}) {
        edges {
          node {
            id
            slug
            frontmatter {
              description
              path
              tags
              title
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
    }
  `

const ProjectsPage = () => {

  const projects = useStaticQuery(projectsQuery)

  return (
    <Layout pageTitle="Мои проекты">
      <Seo pageTitle="Проекты" pageDescription="Проекты и задачи, над которыми я работал." />
      <ProjectIntro></ProjectIntro>
      <div className="project-list">
        <div className="wrapper">
          <ProjectsList query={projects} />
        </div>
      </div>

    </Layout>
  )
}

export default ProjectsPage