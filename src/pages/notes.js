import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageIntro from '../components/PageIntro'
import PostList from '../components/PostList'
import TagList from '../components/TagList'

const postsQuery = graphql`
 query {
    allMdx(filter: {fileAbsolutePath: {regex: "/content/notes/"}}, sort: {fields: frontmatter___date, order: DESC}) {
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

  const posts = useStaticQuery(postsQuery)

  const [tagName, setTagName] = useState('')

  function setTag(tag) {
    setTagName(tagName => tag)
  }

  const tags = posts.allMdx.group

  const pageData = {
    title: "Нотатки і закладки",
    description: "Мої нотатки і дещо ще 🙃",
  }

  return (
    <Layout pageTitle="Нотатки" clazzName="notes">
      <Seo pageTitle={pageData.title} pageDescription={pageData.description} />
      <PageIntro
        // bgColor="gradient-green"
        pageTitle={pageData.title}
        text={pageData.description}
      ></PageIntro>

      <div className="blog-section">
        <div className="wrapper">
          <TagList query={tags} onTagChange={setTag}/>
          <PostList postType="notes" tagNameFilter={tagName} query={posts.allMdx} linkText="Всі нотатки" />

        </div>
      </div>
    </Layout>
  )
}

export default BlogPage