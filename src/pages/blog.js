import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const blogPostsQuery = graphql`
 query {
  allMdx(filter: {fileAbsolutePath: {regex: "/content/blog/"}}) {
    edges {
      node {
        id
        slug
        frontmatter {
          title
          description
          path
        }
      }
    }
  }
}
`

const BlogPage = () => {

  const posts = useStaticQuery(blogPostsQuery)

  return (
    <Layout pageTitle="Blog">
      <Seo pageTitle="Блог" pageDescription="Cтатейки" />
      <section className="blog-section">
        <div className="wrapper">
          <ul>

            {posts.allMdx.edges.map(({ node }, index) => (
              <li key={`blog-post-index-${index}`}>
                <Link to={node.frontmatter.path}>
                  {node.frontmatter.title}
                </Link>
              </li>
              // <ProjectsListItem nodeObj={node} key={`ProjectsListItem${index}`} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage