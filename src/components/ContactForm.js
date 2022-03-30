import React from 'react'
import { useForm } from '@formspree/react';

const ContactForm = () => {
	const [state, handleSubmit] = useForm("mrgyynbw");

	if (state.succeeded) {
		document.getElementById("get-in-touch").reset();
	}

	return (
		<>
			<h2 id="write-me">Напишіть мені ✌️</h2>
			<form id="get-in-touch" className="contact-form" onSubmit={handleSubmit}>
				<div className="contact-grid">
					<fieldset>
						<label htmlFor="name">
							Ваше імʼя: *
						</label>
						<input
							id="name"
							type="text"
							name="name"
							required
						/>

						<label htmlFor="email">
							Ваш email:
						</label>
						<input
							id="email"
							type="email"
							name="email"
						/>

						<label htmlFor="tel">
							Ваш номер або логін Telegram / Viber: *
						</label>
						<input
							id="tel"
							type="text"
							name="number"
							required
						/>

					</fieldset>
					<fieldset>
						<label htmlFor="message">
							Ваше повідомлення: *
						</label>
						<textarea
							id="message"
							name="message"
							required
						/>
					</fieldset>

					<fieldset className="form-services">
						<legend>Ціль звернення? *</legend>
						<div className="form-services_radio">
							<input type="radio" id="contactChoice1"
								name="service" value="розробка" required />
							<label htmlFor="contactChoice1">Розробка</label>

							<input type="radio" id="contactChoice2"
								name="service" value="консультація" />
							<label htmlFor="contactChoice2">Консультація</label>

							<input type="radio" id="contactChoice3"
								name="service" value="співробітництво" />
							<label htmlFor="contactChoice3">Співробітництво</label>

							<input type="radio" id="contactChoice4"
								name="service" value="інше" />
							<label htmlFor="contactChoice4">Інше</label>
						</div>

					</fieldset>

				</div>
				<button type="submit" disabled={state.submitting}>
					Відправити
				</button>
			</form>
			{state.succeeded && <p>Дякуємо за заявку!</p>}
		</>
	);
}

export default ContactForm