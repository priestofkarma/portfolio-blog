import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from '../components/Layout'

const TagsPage = () => {
  
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
    <Layout>
      <section className="tags-section">
        <div className="wrapper">
          <h1>Теги</h1>
          <ul>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}


export default TagsPage

