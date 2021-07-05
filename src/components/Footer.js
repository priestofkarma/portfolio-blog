import React from 'react'
import { footerMenuItems } from '../components/MenuItems'
import { Link, useStaticQuery, graphql } from 'gatsby'

const data = graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `

const Footer = () => {

  const { site } = useStaticQuery(data)

  // const {
  //   title,
  //   description,
  // } = site.siteMetadata;

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-wrapper">
          {footerMenuItems && (
            <div className="footer-menu">
              {footerMenuItems.map((item, index) => (
                <div className="footer-menu-item" key={`footerMenuItem${index}`}>
                  <Link to={item.firstLink.path} className="first-link">{item.firstLink.title}</Link>
                  <ul className="footer-menu-list">
                    {item.externalLinks.map((extItem, extIndex) => (
                      <li key={`footerMenuLi${extIndex + 1000}`}>
                        <Link to={extItem.path} target={extItem.target}>{extItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="footer-copyright">
            <span>© 2021 by <a href="https://t.me/priestofkarma" target="_blank">Zhenya Petrenko</a> Все права защищены.</span>
            <p>В настоящее время доступен для найма, не стесняйтесь связаться со мной, чтобы обсудить
              детали
              Вашего проекта.</p>
          </div>

        </div>
      </div>
    </footer>

  )

}

export default Footer
