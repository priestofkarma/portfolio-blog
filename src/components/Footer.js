import React from 'react'
import { socialMenuItems } from '../utils/MenuItems'
import { Link, graphql, useStaticQuery } from 'gatsby'
import sliceString from '../utils/sliceString'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const _ = require("lodash")

const Footer = () => {

	const lstThree = useStaticQuery(lastThreePosts)
	const dt = new Date();
	
	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="footer-wrapper">
					<div className="footer-menu">

						<div className="footer-menu_item">
							<Link to="/tags" className="first-link">Теги</Link>
							<ul className="footer-menu_list">
								{lstThree.allTagsMdx.group.map((tag, index) => (
									<li key={tag + index}>
										<Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`} title={tag.fieldValue} >{tag.fieldValue}</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="footer-menu_item">
							<Link to="/projects" className="first-link">Проєкти</Link>
							<ul className="footer-menu_list">
								{lstThree.allProjectsMdx.edges.map(({ node }) => (
									<li key={node.id}>
										<Link to={node.frontmatter.path} title={node.frontmatter.title} >{sliceString(node.frontmatter.name, 25)}</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="footer-menu_item">
							<p className="first-link">Корисності</p>
							<ul className="footer-menu_list">
								<li>
									<Link to="/notes/instruments" title="Чим я користуюсь">Інструменти</Link>
								</li>
								<li>
									<AnchorLink to="/about#write-me" stripHash={true} title="Напишіть мені!">Зв'язатися зі мною</AnchorLink>
								</li>
							</ul>
						</div>

						<div className="footer-menu_item">
							<p className="first-link">Соц мережі</p>
							<ul className="footer-menu_list">
								{socialMenuItems.map((item, index) => (
									<li key={`footerSocialItems-${index}`}><a href={item.url} target="_blank" rel="noreferrer" title={item.name}>{item.name}</a></li>
								))}
							</ul>
						</div>
					</div>

					<div className="footer-copyright">
						<span>© {dt.getFullYear()} by <a href="https://t.me/priestofkarma" target="_blank" rel="noreferrer">Zhenya Petrenko</a> Всі права захищені.</span>
						<p>В даний час доступний для найму, не соромтеся зв'язатися зі мною, щоб обговорити деталі вашого проекту.</p>
					</div>

				</div>
			</div>
		</footer>

	)

}

export default Footer

const lastThreePosts = graphql`
  query {
    allProjectsMdx: allMdx(
      filter: {fileAbsolutePath: {regex: "/content/projects/"}}
      limit: 5
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            title
            path
          }
        }
      }
    }
    allBlogMdx: allMdx(
      filter: {fileAbsolutePath: {regex: "/content/notes/"}}
      limit: 5
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
    allTagsMdx: allMdx(limit: 5) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`