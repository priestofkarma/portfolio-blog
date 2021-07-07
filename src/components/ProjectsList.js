import React from 'react'
import ProjectsListItem from './ProjectsListItem'


const ProjectsList = ({ title, query }) => {

  return (
    <div className="project-list">
      {title && (
        <h2 >{title}</h2>
      )}
      <ul className="list">
        {
          query.allMdx.edges.map(({ node }, index) => (
            <ProjectsListItem nodeObj={node} key={`ProjectsListItem${index}`} />
          ))
        }
      </ul>
    </div>
  )
}

export default ProjectsList