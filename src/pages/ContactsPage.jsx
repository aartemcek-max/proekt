import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactsPage() {
  return (
    <>
      <Header />

      <main>

        <section className="page-title">
          <div className="container">

            <h1 className="page-title__h1">
              Контакты
            </h1>

            <p className="page-title__p">
              Свяжитесь с нами любым удобным способом
            </p>

          </div>
        </section>

        <section className="contacts">
  <div className="container">

    <div className="contacts-layout">

      <div className="contacts-left">

        <div className="contacts-grid">

  <div className="contact-card">
    <div>
      <h3 className="contact-card__title">
        Телефон
      </h3>

      <p className="contact-card__text">
        +7 (999) 123-45-67
      </p>

      <span className="contact-small">
        Ежедневно с 9:00 до 21:00
      </span>
    </div>
  </div>

  <div className="contact-card">

    <div>
      <h3 className="contact-card__title">
        Email
      </h3>

      <p className="contact-card__text">
        barberhub@mail.ru
      </p>

      <span className="contact-small">
        Ответим в течение часа
      </span>
    </div>
  </div>

  <div className="contact-card">

    <div>
      <h3 className="contact-card__title">
        Адрес
      </h3>

      <p className="contact-card__text">
        Москва, ул. Центральная 15
      </p>

      <span className="contact-small">
        Бесплатная парковка рядом
      </span>
    </div>
  </div>
  </div>

</div>

      <div className="contacts-right">

        <div className="booking-box">

          <h2 className="section-title">
            Онлайн запись
          </h2>

          <form className="booking-form">

            <input
              className="booking-input"
              type="text"
              placeholder="Ваше имя"
            />

            <input
              className="booking-input"
              type="tel"
              placeholder="Телефон"
            />

            <select className="booking-input">
              <option>
                Выберите услугу
              </option>

              <option>
                Мужская стрижка
              </option>

              <option>
                Стрижка бороды
              </option>

              <option>
                Бритье
              </option>
            </select>

            <button
              className="btn booking-btn"
              type="submit"
            >
              Записаться
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>
</section>

        <section className="map-section">
          <div className="container">

            <h2 className="section-title">
              Где мы находимся
            </h2>

            <div className="map-box">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.847198932543!2d37.617635!3d55.755826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a5f4f4f4f%3A0x1234567890abcdef!2sMoscow!5e0!3m2!1sen!2sru!4v1710000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default ContactsPage