import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import PageIntro from '../components/PageIntro'
import NotesList from '../components/NotesList'
import TagList from '../components/TagList'

const blogPostsQuery = graphql`
 query {
    allMdx(filter: {fileAbsolutePath: {regex: "/content/notes/"}}) {
      edges {
        node {
          id
          slug
          frontmatter {
            description
            path
            tags
            title
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

const BlogPage = () => {

  const posts = useStaticQuery(blogPostsQuery)

  const tags = posts.allMdx.group

  const pageData = {
    title: "Заметочки и закладочки",
    // title: "Головные мюсли 🧠",
    description: "Мои зметочки и кое-что еще 🙃",
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
          <TagList query={tags} />
          <NotesList query={posts.allMdx} />
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage