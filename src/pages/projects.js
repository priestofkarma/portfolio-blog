import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProjectIntro from '../components/ProjectIntro'
import ProjectsList from '../components/ProjectsList'

const ProjectsPage = () => {

  return (
    <Layout pageTitle="Мои проекты">
      <Seo pageTitle="Проекты" pageDescription="Проекты и задачи, над которыми я работал." />
      <ProjectIntro></ProjectIntro>
      <div className="">
        <div className="wrapper">
          <ProjectsList />
        </div>
      </div>

    </Layout>
  )
}

export default ProjectsPage