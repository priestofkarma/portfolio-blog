import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectsListItem from './ProjectsListItem'

const projectsQuery = graphql`
    query {
      allMdx {
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

const ProjectsList = ({ title }) => {

  const projects = useStaticQuery(projectsQuery)

  return (
    <div className="project-list">
      {title && (
        <h2>{title}</h2>
      )}
      <ul className="list">
        {
          projects.allMdx.edges.map(({ node }, index) => (
            <ProjectsListItem nodeObj={node} key={`ProjectsListItem${index}`} />
          ))
        }
      </ul>
    </div>
  )
  // return (
  //   <div className="project-list">
  //     <div className="wrapper">
  //       {title && (
  //         <h2>{title}</h2>
  //       )}
  //       <ul className="list project-list">
  //         {
  //           projects.allMdx.edges.map(({ node }, index) => (
  //             <ProjectsListItem nodeObj={node} key={`ProjectsListItem${index}`} />
  //           ))
  //         }
  //       </ul>
  //     </div>
  //   </div >
  // )
}

export default ProjectsList