import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import PostList from '../components/PostList'
import { socialMenuItems } from '../utils/MenuItems'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const postsQuery = graphql`
  query ($limitProj: Int = 2, $limitBlog: Int = 3) {
    projects: allMdx(filter: {fileAbsolutePath: {regex: "/content/projects/"}},  limit: $limitProj, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          slug
          frontmatter {
            description
            path
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
    }
    notes: allMdx(filter: {fileAbsolutePath: {regex: "/content/notes/"}},  limit: $limitBlog) {
      edges {
        node {
          id
          slug
          frontmatter {
            description
            path
            title
          }
        }
      }
    }
  }
  `

const IndexPage = () => {

  const posts = useStaticQuery(postsQuery)

  return (
    <Layout>
      <Seo pageTitle="Женя Петренко" />
      <section className="hero-section">
        <div className="wrapper">
          <div className="hero-section_wrapper">
            <h1 className="hero-title">Привет, я Женя <span>👋</span></h1>
            <div className="hero-description">
              <p><strong>Веб-разработчик</strong> с двухлетним стажем, в основном работаю в аутсорсе.
                <strong> Верстаю сайты</strong> и натягиваю на <b>Wordpress :)</b>
              </p>
              <p>В настоящее время доступен для найма,
                не стесняйтесь <AnchorLink to="/about#write-me" stripHash={true} title="Напишите мне!">связаться со мной</AnchorLink>,
                чтобы обсудить детали Вашего проекта.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrapper">
          <div className="about-section_wrapper">
            <div className="about-section_image">
              <StaticImage
                loading="lazy"
                layout="fullWidth"
                src="../images/me.jpg"
                alt="It`s me :)"
              />
              <ul className="soc-links">
                {socialMenuItems && socialMenuItems.map((item, index) => (
                  <li key={`socialitems-${index}`}><a href={item.url} target="_blank" rel="noreferrer">{item.icon}</a></li>
                ))}
              </ul>
            </div>
            <div className="about-section_text">
              <h4>Мои услуги включают в себя:</h4>
              <ul>
                <li>Вёрстка сайтов
                  <ul>
                    <li>на Tilda, лендинги на <a href="https://zero.tilda.cc/ru" target="_blank" rel="noreferrer">Zero
                      Block</a></li>
                    <li>интеграция вёрстки в <a href="https://getcourse.ru/" target="_blank" rel="noreferrer">GetCourse</a></li>
                  </ul>
                </li>
                <li>Натяжка вёрстки на CMS <a href="https://wordpress.org" target="_blank" rel="noreferrer">WordPress</a></li>
              </ul>
              <h4>Я работаю с такими технологиями:</h4>
              <ul>
                <li>HTML/CSS, SASS/SCSS, grid/flexbox</li>
                {/* <li>Bootstrap 4</li> */}
                <li>JavaScript, jQuery и плагины к нему</li>
                <li>Tilda, WordPress, React, Gatsby, GetCourse</li>
                <li>Adobe Photoshop, Figma, Avocode</li>
                <li>Изучаю React, Gatsby</li>
              </ul>
              <p>Моя почасовая ставка 120 грн. В зависимости от вида, объема и сложности работы, цена может изменятся.</p>
            </div>
          </div>

          {/* <ProjectsList title="Последние работы"  query={posts.projects} /> */}

          <PostList title="Последние работы" postType="projects" query={posts.projects} linkText="Все проекты" />
          <PostList title="Последние посты" postType="notes" query={posts.notes} linkText="Все заметки" />

          {/* <NotesList title="Последние записи" query={posts.notes} /> */}

        </div>
      </section>

    </Layout>
  )

}

export default IndexPage