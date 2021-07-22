import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import ContactForm from '../components/ContactForm'


const AboutPage = () => {

    const pageData = {
        title: "Обо мне 🧑🏻‍💻",
        description: "Обо мне, резюме.",
    }
    return (
        <Layout pageTitle={pageData.title}>
            <Seo pageTitle="Обо мне" pageDescription={pageData.description} />
            <section>
                <div className="wrapper">
                    <h1>{pageData.title}</h1>

                    <div>
                        <p>
                            Мне нравится создавать что-то новое, искать интересные решения, и воплощать свои идеи и идеи клиентов в жизнь.
                            Мне очень нравится дизайн и всё что с ним связано (я еще тот ценитель 🧐).
                            Люблю волейбол, обрабатывать фотогорафии и учиться всему новому.
                            Недавно попробовал библиотеку React для построения веб-приложений, и мне очень понравилось!
                            Этот сайт работает на генераторе статических сайтов - Gatsby, ранее мой сайт работал на Jekyll,
                            но gatsby мне больше нравится из-за схожести с React-ом (на нем то он и базируется).
                            На данный момент все мои силы направлены на изучение JavaScript и React.
                        </p>
                    </div>

                    <div>
                        <h5>Опыт работы:</h5>

                        <p>Верстаю сайты с нуля, в основном лендинги и корпоративные.
                            Верстаю на Tilda <a href="https://zero.tilda.cc/ru" target="_blank" rel="noreferrer">Zero Block</a>.
                            Пользуюсь как плагинами для jQuery, так и  пишу на JavaScript разные поведения интерфейса сайта.
                        </p>
                        <p>
                            Знаком с Wordpress, могу делать правки, дополнения и натягивать страницы на эту CMS. <br />
                            Знаковый проект на Wordpress - <Link to="/projects/autolife">Autolife UA - Автомобили из Европы/Кореи</Link>
                        </p>
                        <p>
                            Интегрировал верстку в GetCourse.
                        </p>
                        <p>
                            Пишу анимации на CSS3 для прелоадеров сайтов и различных частей интерфейса.
                        </p>

                        <p>Примеры работ можно посмотреть на странице <Link to="/projects">проекты</Link>.
                            Всегда стараюсь максимально идеально выполнить работу. <a href="https://drive.google.com/file/d/1JNPoiQe5T7ulkb-RJo711kLRPKa4i3rU/view?usp=sharing" target="_blank" rel="noreferrer">Ознакомиться с резюме</a></p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage