import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>

      <Seo pageTitle="Инструменты" />

      <section className="hero-section">
        <div className="hero-image"></div>
        <div className="wrapper">
          <div className="hero-section_wrapper">
            <h1 className="hero-title">Инструменты 👋</h1>
            <div className="hero-description">
              <p><b>Веб-разработчик</b> с двухлетним стажем, в основном работаю в аутсорсе.

                <b> Верстаю сайты</b> и натягиваю на <b>Wordpress</b> :)
              </p>
              <p>В настоящее время доступен для найма,
                не стесняйтесь связаться со мной,
                чтобы обсудить детали Вашего проекта.</p>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage