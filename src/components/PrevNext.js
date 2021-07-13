import React from 'react'
import { Link } from 'gatsby'

const PrevNext = ({ prev, next, postType }) => {

  return (
    <div className="prev-next-container">
      {prev && (
        <Link className="prev" to={prev.node.frontmatter.path}>
          <span>Предыдущая {postType}</span>
          <p>{prev.node.frontmatter.title}</p>
        </Link>
      )}
      {next && (
        <Link className="next" to={next.node.frontmatter.path}>
          <span>Следующая {postType}</span>
          <p>{next.node.frontmatter.title}</p>
        </Link>
      )}
    </div>
  )
}

export default PrevNext