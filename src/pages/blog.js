import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import PageIntro from '../components/PageIntro'

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
  const pageData = {
    title: "Статейки и закладочки",
    // title: "Головные мюсли 🧠",
    description: "Мои наблюдения, зметочки и кое-что еще 🙃",
    // description: "О чем-то пишу, о чем-то не пишу 🤷‍♂️",
  }

  return (
    <Layout pageTitle="Блог">
      <Seo pageTitle={pageData.title} pageDescription={pageData.description} />
      <PageIntro
        bgColor="gradient-green"
        pageTitle={pageData.title}
        text={pageData.description}
      ></PageIntro>

      <section className="blog-section">
        <div className="wrapper">
          <ul>
            {posts.allMdx.edges.map(({ node }, index) => (
              <li key={`blog-post-index-${index}`}>
                <Link to={node.frontmatter.path}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage