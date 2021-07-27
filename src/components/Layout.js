import React, { useEffect } from 'react'
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/merriweather/400.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/merriweather/900.css";
import "@fontsource/source-code-pro/300.css";
import "@fontsource/source-code-pro/400.css";
import Header from './Header'
import Footer from './Footer'
import '../styles/main.scss'

const Layout = ({ clazzName, children }) => {

  useEffect(() => {

    const btnToTop = document.querySelector(".scroll-up");

    if (btnToTop) {
      window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 800) {
          btnToTop.classList.add('scroll-up-active');
        } else {
          btnToTop.classList.remove('scroll-up-active');
        }
      });
      btnToTop.addEventListener('click', () => {
        window.scroll({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  }, [])


  return (
    <>
      <Header />

      <main className={`page_container ${clazzName ? clazzName : ''}`}>
        {children}

      </main>
      
      <div className="scroll-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004">
          <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
              c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
              v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
              c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
              l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" />
        </svg>
      </div>

      <Footer />
    </>
  )
}

export default Layout