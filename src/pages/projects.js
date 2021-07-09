import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageIntro from '../components/PageIntro'
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

  const pageData = {
    title: "Мои проекты",
    description: "Проекты и задачи, над которыми я работал.",
    color: "gradient-violet"
  }

  return (
    <Layout pageTitle={pageData.title}>
      <Seo pageTitle="Проекты" pageDescription={pageData.title} />
      <PageIntro
        bgColor={pageData.color}
        pageTitle={pageData.title}
        text="Проекты и задачи, над которыми я работал. Это только малая часть, большинство проектов по договору не могу показать в портфолио."
      ></PageIntro>
      <div className="project-list-container">
        <div className="wrapper">
          <ProjectsList query={projects} />
        </div>
      </div>

    </Layout>
  )
}

export default ProjectsPage