import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const BlogPage = () => {
  return (
    <Layout pageTitle="Blog">
      <Seo pageTitle="Блог" pageDescription="Cтатейки" />

      <p>Hi there, blog! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default BlogPage