import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageIntro from '../components/PageIntro'
import PostList from '../components/PostList'
import TagList from '../components/TagList'

const postsQuery = graphql`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/content/projects/"}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            slug
            frontmatter {
              description
              path
              tags
              title
              featuredImageAlt
              featuredImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
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

const ProjectsPage = () => {

  const [tagName, setTagName] = useState('')

  function setTag(tag) {
    setTagName(tagName => tag)
  }

  const posts = useStaticQuery(postsQuery)

  const tags = posts.allMdx.group

  const pageData = {
    title: "Мои проекты",
    description: "Проекты и задачи, над которыми я работал.",
    color: "gradient-violet"
  }

  return (
    <Layout pageTitle={pageData.title} clazzName="projects">
      <Seo pageTitle="Проекты" pageDescription={pageData.title} />
      <PageIntro
        bgColor={pageData.color}
        pageTitle={pageData.title}
        text="Проекты и задачи, над которыми я работал. Это только малая часть, большинство проектов по договору не могу показать в портфолио."
      ></PageIntro>
      <div className="posts-list-wrapper">
        <div className="wrapper">

          <TagList query={tags} onTagChange={setTag} />

          <PostList postType="projects" tagNameFilter={tagName} query={posts.allMdx} linkText="Все заметки" />

        </div>
      </div>

    </Layout>
  )
}

export default ProjectsPage