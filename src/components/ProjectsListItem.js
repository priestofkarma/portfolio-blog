import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsListItem = ({ index, nodeObj }) => {

  // destructuring nodeObj
  const {
    frontmatter: { title, description, path, tags, featuredImageAlt, featuredImage },
  } = nodeObj
  console.log(tags);
  const image = getImage(featuredImage)

  return (
    <li>
      <Link to={path} className="list-item project-list_item">
        <div className="project-list_tag-list">
          {tags.map((tag, ind) => (
            <span className="project-list_tag" key={`project-tag${ind}`}>{tag}</span>
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