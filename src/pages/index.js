import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import ProjectsList from '../components/ProjectsList'

const projectsQuery = graphql`
  query ($limitPages: Int = 2) {
    allMdx(filter: {fileAbsolutePath: {regex: "/content/projects/"}},  limit: $limitPages) {
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
    }
  } `

const IndexPage = () => {

  const projects = useStaticQuery(projectsQuery)

  return (
    <Layout>
      <Seo pageTitle="Женя Петренко" />
      <section className="hero-section">
        <div className="hero-image"></div>
        <div className="wrapper">
          <div className="hero-section_wrapper">
            <h1 className="hero-title">Привет, я Женя <span>👋</span></h1>
            {/* <h1 className="hero-title">Привет, я Женя 👋</h1> */}
            <div className="hero-description">
              <p><b>Веб-разработчик</b> с двухлетним стажем, в основном работаю в аутсорсе.
                <b> Верстаю сайты</b> и натягиваю на <b>Wordpress</b> :)
              </p>
              <p>В настоящее время доступен для найма,
                не стесняйтесь связаться со мной,
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
                <li>Натяжка сайта на CMS <a href="https://wordpress.org" target="_blank" rel="noreferrer">WordPress</a></li>
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
          <ProjectsList title="Последние работы" query={projects} />

        </div>
      </section>

    </Layout>
  )


}

export default IndexPage