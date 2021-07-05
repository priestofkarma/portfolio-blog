import React from 'react'


const ProjectIntro = ({ children }) => {


  return (
    <section className="project-intro">
      <div className="wrapper">
        <h1 className="project-intro_title">Мои работы</h1>
        <p className="project-intro_text">Проекты и задачи, над которыми я работал. Это только малая часть, большинство проектов по договору не могу показать в портфолио.</p>
        {children}

      </div>
    </section>
  )
}

export default ProjectIntro