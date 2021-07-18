import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import PostList from '../components/PostList'
import { socialMenuItems } from '../utils/MenuItems'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Parallax from 'parallax-js'

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

    useEffect(() => {
      let particlesWrap = document.querySelector(".particles");
      let parallaxInstance = new Parallax(particlesWrap, {
        invertX: false,
        invertY: false,
      });
    }, [])

  const posts = useStaticQuery(postsQuery)

  return (
    <Layout>
      <Seo pageTitle="Женя Петренко" />

      <section className="hero-section" >
        
        <div className="particles" >
          <svg data-depth="0.10" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 34C0 27.54 27.54 0 34 0C40.46 0 68 27.54 68 34C68 40.46 40.46 68 34 68C27.54 68 0 40.46 0 34Z" fill="#74C69D"/>
          </svg>
          <svg data-depth="0.05" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.77372 48.3952C0.47416 15.9868 2.43934 13.0733 34.8478 6.7737C67.2562 0.474146 70.1697 2.43933 76.4692 34.8477C82.7688 67.2562 80.8036 70.1697 48.3952 76.4692C15.9868 82.7688 13.0733 80.8036 6.77372 48.3952Z" fill="#FADB5F"/>
          </svg>
          <svg data-depth="0.16" width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9575 55.4657C20.5186 43.8179 77.7329 13.3965 89.3807 16.9576C101.029 20.5186 131.45 77.733 127.889 89.3808C124.328 101.029 67.1134 131.45 55.4656 127.889C43.8178 124.328 13.3964 67.1135 16.9575 55.4657Z" fill="#7242F8"/>
          </svg>
          <svg data-depth="0.20" width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.1399 11.2325C48.8509 11.6631 71.9076 43.429 71.4769 46.14C71.0463 48.851 39.2804 71.9077 36.5694 71.477C33.8584 71.0463 10.8017 39.2805 11.2324 36.5694C11.6631 33.8584 43.4289 10.8018 46.1399 11.2325Z" fill="#1085FA"/>
          </svg>
          <svg data-depth="0.09" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3646 28.3516C42.729 0 42.729 0 71.0806 21.3644C99.4321 42.7289 99.4321 42.7289 78.0677 71.0804C56.7033 99.432 56.7033 99.432 28.3517 78.0676C0.00013572 56.7031 0.00013572 56.7031 21.3646 28.3516Z" fill="#F34F63"/>
          </svg>


        </div>
        <div className="wrapper">
          <div  className="hero-section_wrapper">
            <h1 className="hero-title">Привет, я Женя <span>👋</span></h1>
            <div className="hero-description">
              <p><strong>Веб-разработчик</strong> с двухлетним стажем, в основном работаю в аутсорсе.
                <strong> Верстаю сайты</strong> и натягиваю на <b>Wordpress :)</b>
              </p>
              <p>В настоящее время доступен для найма,
                не стесняйтесь связаться со мной,
                чтобы обсудить детали Вашего проекта.</p>
            </div>
              <AnchorLink to="/about#write-me" className="button" stripHash={true} title="Напишите мне!">Cвязаться со мной</AnchorLink>
              <ul className="soc-links">
                {socialMenuItems && socialMenuItems.map((item, index) => (
                  <li key={`socialitems-${index}`}><a href={item.url} target="_blank" rel="noreferrer">{item.icon}</a></li>
                ))}
              </ul>
          </div>
        </div>
        {/* <svg id="visual" className="pic"  viewBox="0 0 900 600" width="900" height="600" ><rect x="0" y="0" width="900" height="600" fill="#f9f9f9"></rect><defs><linearGradient id="grad1_0" x1="33.3%" y1="100%" x2="100%" y2="0%"><stop offset="20%" stop-color="#f9f9f9" stop-opacity="1"></stop><stop offset="80%" stop-color="#f9f9f9" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="100%" x2="66.7%" y2="0%"><stop offset="20%" stop-color="#f9f9f9" stop-opacity="1"></stop><stop offset="80%" stop-color="#f9f9f9" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(900, 600)"><path d="M-324.5 0C-314.1 -39.5 -303.6 -79 -290.1 -120.2C-276.6 -161.3 -259.9 -204.2 -229.5 -229.5C-199 -254.7 -154.6 -262.4 -114 -275.3C-73.5 -288.2 -36.7 -306.4 0 -324.5L0 0Z" fill="#1085fa"></path></g><g transform="translate(0, 0)"><path d="M324.5 0C309.6 38.5 294.8 76.9 280.9 116.3C267 155.7 254 196.1 228.4 228.4C202.7 260.7 164.4 285.1 124.2 299.8C84 314.5 42 319.5 0 324.5L0 0Z" fill="#1085fa"></path></g></svg> */}
          {/* <svg viewBox="0 0 30 30" className="pic-1 pic"><path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path></svg> */}
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