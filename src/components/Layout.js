import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/main.scss'

const Layout = ({ children }) => {

  return (
    <>
      {/* <Seo pageTitle={pageConcatTitle} /> */}
      <Header />

      <main className="page_container">
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout