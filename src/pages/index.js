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
  query ($limitProj: Int = 4, $limitBlog: Int = 3) {
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
    notes: allMdx(filter: {fileAbsolutePath: {regex: "/content/notes/"}},  limit: $limitBlog, sort: {fields: frontmatter___date, order: DESC}) {
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
		new Parallax(particlesWrap, {
			invertX: false,
			invertY: false,
			hoverOnly: true,
			clipRelativeInput: true,
		});
	}, [])

	const posts = useStaticQuery(postsQuery)

	return (
		<Layout>
			<Seo />

			<section className="hero-section" >

				<div className="particles" >
					<svg data-depth="0.25" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 34C0 27.54 27.54 0 34 0C40.46 0 68 27.54 68 34C68 40.46 40.46 68 34 68C27.54 68 0 40.46 0 34Z" fill="#74C69D" />
					</svg>
					<svg data-depth="0.1" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.77372 48.3952C0.47416 15.9868 2.43934 13.0733 34.8478 6.7737C67.2562 0.474146 70.1697 2.43933 76.4692 34.8477C82.7688 67.2562 80.8036 70.1697 48.3952 76.4692C15.9868 82.7688 13.0733 80.8036 6.77372 48.3952Z" fill="#FADB5F" />
					</svg>
					<svg data-depth="0.2" width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.9575 55.4657C20.5186 43.8179 77.7329 13.3965 89.3807 16.9576C101.029 20.5186 131.45 77.733 127.889 89.3808C124.328 101.029 67.1134 131.45 55.4656 127.889C43.8178 124.328 13.3964 67.1135 16.9575 55.4657Z" fill="#7242F8" />
					</svg>
					<svg data-depth="0.5" width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M46.1399 11.2325C48.8509 11.6631 71.9076 43.429 71.4769 46.14C71.0463 48.851 39.2804 71.9077 36.5694 71.477C33.8584 71.0463 10.8017 39.2805 11.2324 36.5694C11.6631 33.8584 43.4289 10.8018 46.1399 11.2325Z" fill="#1085FA" />
					</svg>
					<svg data-depth="0.14" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.3646 28.3516C42.729 0 42.729 0 71.0806 21.3644C99.4321 42.7289 99.4321 42.7289 78.0677 71.0804C56.7033 99.432 56.7033 99.432 28.3517 78.0676C0.00013572 56.7031 0.00013572 56.7031 21.3646 28.3516Z" fill="#F34F63" />
					</svg>
				</div>

				<div className="wrapper">
					<div className="hero-section_wrapper">
						<h1 className="hero-title">Привіт, я Женя <span>👋</span>🇺🇦</h1>
						<div className="hero-description">
							<p><strong>Веб-розробник,</strong>дизайнер-початківець зазвичай працюю в аутсорсі. 
								{/* <strong> Роблю добротні сайти</strong> и натягиваю на <b>Wordpress :)</b> */}
							</p>
							<p>В даний час доступний для найму, не соромтеся зв'язатися зі мною, щоб обговорити деталі Вашого проекту.</p>
						</div>
						<AnchorLink to="/about#write-me" className="button" stripHash={true} title="Напишіть мені!">Зв'язатися зі мною</AnchorLink>
						<ul className="soc-links">
							{socialMenuItems && socialMenuItems.map((item, index) => (
								<li key={`socialitems-${index}`}><a href={item.url} target="_blank" rel="noreferrer">{item.icon}</a></li>
							))}
						</ul>
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
								src="../images/me.jpeg"
								alt="It`s me :)"
							/>
							<ul className="soc-links">
								{socialMenuItems && socialMenuItems.map((item, index) => (
									<li key={`socialitems-${index}`}><a href={item.url} target="_blank" rel="noreferrer">{item.icon}</a></li>
								))}
							</ul>
						</div>
						<div className="about-section_text">
							<p>Мені просто подобаються сайти, дизайн, технології та все, що з цим пов'язано.</p>
							<h4>Мої послуги:</h4>
							<ul>
								<li>Верстка сайтів
									<ul>
										<li>на <a href="https://tilda.cc" target="_blank" rel="noreferrer">Tilda</a>, лендінги на <a href="https://zero.tilda.cc/ru" target="_blank" rel="noreferrer">Zero
											Block</a></li>
										<li>на <a href="https://elementor.com" target="_blank" rel="noreferrer">Elementor</a> на WordPress</li>
										<li>трохи <a href="https://getcourse.ru" target="_blank" rel="noreferrer">GetCourse</a></li>
									</ul>
								</li>
								<li>Натяжка верстки на CMS <a href="https://wordpress.org" target="_blank" rel="noreferrer">WordPress</a></li>
								<li>Різні правки по верстці та JavaScript</li>
							</ul>
							<h4>Я працюю з такими технологіями:</h4>
							<ul>
								<li>HTML/CSS, SASS/SCSS, Grid/Flexbox</li>
								<li>Bootstrap 4/5</li>
								<li>Elementor, Tilda, Webflow, карта Leaflet</li>
								<li>JavaScript, jQuery, Gsap</li>
								<li>WordPress, GetCourse, Gatsby</li>
								<li>WordPress:
									<ul>
										<li>ACF, CF7, Elementor</li>
									</ul>
								</li>
								<li>Adobe Photoshop, Pixelmator Pro, Figma, Squoosh</li>
							</ul>
							<p>Моя погодинна ставка 8-15 $. Залежно від виду, обсягу та складності роботи, ціна може змінюватись.</p>
						</div>
					</div>

					{/* <ProjectsList title="Останні роботи"  query={posts.projects} /> */}

					<PostList title="Останні роботи" postType="projects" query={posts.projects} linkText="Всі проекти" />
					<PostList title="Останні нотатки" postType="notes" query={posts.notes} linkText="Всі нотатки" />

					{/* <NotesList title="Останні записи" query={posts.notes} /> */}

				</div>
			</section>

		</Layout>
	)

}

export default IndexPage