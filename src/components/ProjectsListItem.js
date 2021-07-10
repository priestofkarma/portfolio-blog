import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import rndColors from "../utils/randomColor"

const ProjectsListItem = ({ index, nodeObj }) => {

  // destructuring nodeObj
  const {
    frontmatter: { title, description, path, tags, featuredImageAlt, featuredImage },
  } = nodeObj

  const image = getImage(featuredImage)

  return (
    <li>
      <Link to={path} className="list-item project-list_item">
        <div className="project-list_tag-list">
          {tags && tags.map((tag, i) => (
            <span className={`project-list_tag" ${rndColors.getRndColor(tag)}`} key={`project-tag${i}`}>{tag}</span>
          ))}
        </div>
        <GatsbyImage
          loading="lazy"
          className="project-list_image"
          image={image}
          alt={featuredImageAlt}
          quality="100"
        />
        <div className="project-list_info">
          <h3 className="h4 project-list_title">{title}</h3>
          <p className="project-list_text">{description}</p>
        </div>
      </Link>
    </li>

  )
}

export default ProjectsListItem