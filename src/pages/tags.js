import React from "react"
import Layout from '../components/Layout'
import AllTagList from '../components/AllTagList'
import Seo from "../components/Seo"

const TagsPage = () => {
  
  return (
    <Layout>
      <Seo pageTitle="Список тегов" pageDescription="Список тегов" />
      <AllTagList/>
    </Layout>
  )
}


export default TagsPage

