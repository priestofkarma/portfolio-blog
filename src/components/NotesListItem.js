import React from "react"
import { Link } from "gatsby"
import rndColors from "../utils/randomColor"

const NotesListItem = ({ cardGradient, index, nodeObj }) => {

  // destructuring nodeObj
  const {
    frontmatter: { title, description, path, tags },
  } = nodeObj


  return (
    <li>
      <Link to={path} className={`list-item blog-list_item card-gradient-${cardGradient}`}>
        <div className="blog-list_tag-list">
          {tags && (
            tags.map((tag, i) => (
              <span className={`blog-list_tag" ${rndColors.getRndColor(tag)}`} key={`blog-tag${i}`}>{tag}</span>
            ))
          )}
        </div>
        <div className="blog-list_info">
          <h3 className="h4 blog-list_title">{title}</h3>
          <p className="blog-list_text">{description}</p>
        </div>
      </Link>
    </li>

  )
}

export default NotesListItem