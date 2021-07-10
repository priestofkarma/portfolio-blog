import React from 'react'
import NotesListItem from './NotesListItem'
import SectionCaption from './SectionCaption'

const NotesList = ({ title, query }) => {
  
  return (
    <div className="blog-list">
      {title && <SectionCaption title={title} linkTo="/notes" linkText="Все заметки" /> }
      <ul className="list">
        {
          query.edges.map(({ node }, index) => (
            <NotesListItem cardGradient={index} nodeObj={node} key={`BlogListItem${index}`} />
          ))
        }
      </ul>
    </div>
  )
}

export default NotesList