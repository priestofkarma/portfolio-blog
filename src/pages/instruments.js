import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>

      <Seo pageTitle="Инструменты" />

      <section className="hero-section">
        <div className="wrapper">
          <div className="hero-title fadeInRight">
            {/* <span className="subtitle" id="subtitle">Сын маминой подруги</span><span className="typed-cursor typed-cursor--blink">|</span> */}
            <h1>Портфолио веб-разработчика 💻</h1>
          </div>
          <p className="hero-description fadeInLeft">В настоящее время доступен для найма,
            не стесняйтесь связаться со мной,
            чтобы обсудить детали Вашего проекта.</p>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage