import React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link, graphql, useStaticQuery } from "gatsby"


const AllTagList = () => {

  const tagsQuery = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const tags = tagsQuery.allMdx.group

  return (
    <div className="tags-section">
      <div className="wrapper">
        <h3>Теги</h3>
        <div className="overflow-x-block">
          <ul>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default AllTagList