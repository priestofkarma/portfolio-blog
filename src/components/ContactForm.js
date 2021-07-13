import React from 'react'
import { useForm } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mrgyynbw");

  if (state.succeeded) {
    document.getElementById("get-in-touch").reset();
  }

  return (
    <>
      <h2 id="write-me">Напишите мне ✌️</h2>
      <form id="get-in-touch" className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-grid">
          <fieldset>
            <label htmlFor="name">
              Ваше имя: *
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
              Ваш номер или логин Telegram / Viber: *
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
              Ваше сообщение: *
            </label>
            <textarea
              id="message"
              name="message"
              required
            />
          </fieldset>

          <fieldset className="form-services">
            <legend>Цель обращения? *</legend>
            <div className="form-services_radio">
              <input type="radio" id="contactChoice1"
                name="service" value="разработка" required />
              <label htmlFor="contactChoice1">Разработка</label>

              <input type="radio" id="contactChoice2"
                name="service" value="консультация" />
              <label htmlFor="contactChoice2">Консультация</label>

              <input type="radio" id="contactChoice3"
                name="service" value="сотрудничество" />
              <label htmlFor="contactChoice3">Сотрудничество</label>

              <input type="radio" id="contactChoice4"
                name="service" value="другое" />
              <label htmlFor="contactChoice4">Другое</label>
            </div>

          </fieldset>

        </div>
        <button type="submit" disabled={state.submitting}>
          Отправить
        </button>
      </form>
      {state.succeeded && <p>Спасибо за заявку!</p>}
    </>
  );
}

export default ContactForm