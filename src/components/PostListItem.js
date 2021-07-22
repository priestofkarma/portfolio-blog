import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import rndColors from "../utils/randomColor"

const ProjectsListItem = ({ nodeObj, postType, cardGradient }) => {

  // destructuring nodeObj
  const {
    frontmatter: { title, description, path, tags, featuredImage, featuredImageAlt },
  } = nodeObj

  const image = getImage(featuredImage)

  return (
    <li>
      <Link to={path} title={description} className={`list-item ${cardGradient ? `card-gradient-${cardGradient}` : ""}`}>
        {tags && (<div className="tag-list">
          {tags.map((tag, i) => (
            <span className={`tag-list_item ${rndColors.getRndColor(tag)}`} key={`${postType}-tag${i}`}>{tag}</span>
          ))}
        </div>)}

        {featuredImage && <GatsbyImage
          loading="lazy"
          className="list-item_image"
          image={image}
          alt={featuredImageAlt}
          quality="100"
        />}

        <div className="list-item_info">
          <h3 className="h4 list-item_title">{title}</h3>
          <p className="list-item_text">{description}</p>
        </div>
      </Link>
    </li>

  )
}

export default ProjectsListItem