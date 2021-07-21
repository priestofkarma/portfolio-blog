import React from 'react'
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
            <section>
                <div className="wrapper">
                    <h1>{pageData.title}</h1>
                    <p>
                        <b>Опыт работы:</b> 
                         в опыте постарайтесь максимально подробно описать задачи, которые вы решали.
                    </p>
                    <p>
                        Ключевые навыки: указывайте то в чем действительно понимаете и можете работать
                    </p>

                    <p>
                        О себе: указывайте профессиональную информацию, опишите проекты, опишите куда хотите развиваться и над какими проектами работать. Также будет полезно указать особые достижения (красный диплом, курсы, олимпиады и т.п.). Не указывайте информацию про спорт, курение, домашних животных и прочую ерунду, она никому не интересна, так как это резюме, а не анкета на сайте знакомств.
                    </p>
                    <p>
                        Сертификаты: если у вас есть электронные сертификаты, то обязательно их надо указать, они дают значительный плюс в выборе кандидатов.
                    </p>

                    <a href="../../static/resume.pdf" download>резюме</a>
                    <ContactForm />
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage