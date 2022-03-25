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
		title: "Мої проєкти",
		description: "Проєкти і задачі, над якими я працював",
	}

	return (
		<Layout clazzName="projects">
			<Seo pageTitle={pageData.title} pageDescription={pageData.title} />
			<PageIntro
				bgColor={pageData.color}
				pageTitle={pageData.title}
				text="Проєкти та завдання, над якими я працював. Це не всі роботи, більшість проєктів за договором не можу показати у портфоліо."
			></PageIntro>
			<div className="posts-list-wrapper">
				<div className="wrapper">

					<TagList query={tags} onTagChange={setTag} />

					<PostList postType="projects" tagNameFilter={tagName} query={posts.allMdx} linkText="Всі нотатки" />

				</div>
			</div>

		</Layout>
	)
}

export default ProjectsPage