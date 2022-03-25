import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import ContactForm from '../components/ContactForm'


const AboutPage = () => {

	const pageData = {
		title: "Про мене 🧑🏻‍💻",
		description: "Про мене, резюме.",
	}
	return (
		<Layout pageTitle={pageData.title}>
			<Seo pageTitle="Про мене" pageDescription={pageData.description} />
			<section>
				<div className="wrapper">
					<h1>{pageData.title}</h1>

					<div>
						<p>
							Мені подобається створювати щось нове, шукати цікаві рішення та втілювати свої ідеї та ідеї клієнтів у життя.
							Мені дуже подобається дизайн і все, що з ним пов'язано (я ще той поціновувач 🧐).
							Люблю волейбол, обробляти фотогорафії, дивитися аніме, читати розумні книги, тикати по кнопочках і вчитися усьому новому.
						</p>
					</div>

					<div>
						<h5>Досвід роботи:</h5>

						<p>Верстаю сайти з нуля, в основному лендинги та корпоративні.
							Верстаю на Tilda <a href="https://zero.tilda.cc/ru" target="_blank" rel="noreferrer">Zero Block</a>.
							Користуюся як плагінами для jQuery, так і пишу JavaScript різні поведінки інтерфейсу сайту.
						</p>
						<p>
							Знайомий з Wordpress, можу робити редагування, доповнення та натягувати сторінки на цю CMS. <br />
							Знаковий проект на Wordpress - <Link to="/projects/autolife">Autolife UA - Автомобілі з Європи/Кореї</Link>
						</p>
						<p>
							Інтегрував верстку у GetCourse.
						</p>
						<p>
							Пишу анімації на CSS3 для прелоадерів сайтів та різних частин інтерфейсу.
						</p>

						<p>Приклади робіт можна переглянути на сторінці <Link to="/projects">проекти</Link>.
							Завжди намагаюся максимально ідеально виконати роботу. <a href="https://drive.google.com/file/d/1JNPoiQe5T7ulkb-RJo711kLRPKa4i3rU/view?usp=sharing" target="_blank" rel="noreferrer">Ознайомитись з резюме</a></p>
					</div>
					<ContactForm />
				</div>
			</section>
		</Layout>
	)
}

export default AboutPage