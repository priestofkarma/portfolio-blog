import React from 'react'
import ProjectsListItem from './ProjectsListItem'
import SectionCaption from '../components/SectionCaption'

const ProjectsList = ({ title, query, tagNameFilter }) => {

  return (
    <div className="project-list">
      {title && <SectionCaption title={title} linkTo="/projects" linkText="Все проекты" />}
      <ul className="list">
        {query.edges.map(function ({ node }, index) {
          const tags = node.frontmatter.tags

          if (tagNameFilter) {
            return tags.filter(tag => tag === tagNameFilter)
              .map(tag => <ProjectsListItem nodeObj={node} key={`ProjectsListItem${index}`} />)
          } else {
            return <ProjectsListItem nodeObj={node} key={`ProjectsListItem${index}`} />
          }
        })}
      </ul>
    </div>
  )
}

export default ProjectsList
