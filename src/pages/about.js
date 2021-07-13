import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
// import PageIntro from '../components/PageIntro'
import ContactForm from '../components/ContactForm'

const AboutPage = () => {

    const pageData = {
        title: "Обо мне",
        // description: "Мои наблюдения, зметочки и кое-что еще 🙃",
    }
    return (
        <Layout pageTitle={pageData.title}>
            <Seo pageTitle="Обо мне" pageDescription={pageData.title} />
            {/* <PageIntro
                pageTitle={pageData.title}
                text={pageData.description}
            /> */}
            <section>
                <div className="wrapper">
                    <h1>{pageData.title}</h1>
                    <a href="../images/resume.pdf" download>резюме</a>
                    <ContactForm/>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage