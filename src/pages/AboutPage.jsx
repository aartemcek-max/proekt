import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <>
      <Header />

      <main>

        <section className="page-title">
          <div className="container">
            <h1 className="page-title__h1">
              Не просто стрижка. Атмосфера
            </h1>

            <p className="page-title__p">
              Мы делаем модный и эксклюзивный стиль
            </p>
          </div>
        </section>

        <section className="about-story">
          <div className="container">
            <div className="story-centered">

              <h2 className="section-title">
                Наша история
              </h2>

              <p className="text">
                BarberShop — барбершоп,
                где прилагают усилия к вашему желанию.
                Мы создали пространство,
                где каждый мужчина может
                почувствовать себя особенным.
              </p>

              <p className="text">
                Наша команда — это не просто мастера,
                это настоящие художники своего дела,
                которые горятся своей работой
                и любят то, что делают.
              </p>

              <div className="badges-centered">
                <span className="badge">Стиль</span>
                <span className="badge">Комфорт</span>
                <span className="badge">Уют</span>
                <span className="badge">Кайф</span>
              </div>

            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="container">

            <h2 className="section__title">
              Наша атмосфера
            </h2>

            <div className="cards">

              <article className="card">
                <img
                  className="card__img"
                  src="/IMG/23c8445d998336abe858634a7343860c.jpg"
                  alt="Атмосфера 1"
                />

                <h3 className="card__title">
                  Стильный интерьер
                </h3>

                <p className="card__text">
                  Продуманный дизайн для вашего комфорта
                </p>
              </article>

              <article className="card">
                <img
                  className="card__img"
                  src="/IMG/yceygc4gcfig4fj.png"
                  alt="Атмосфера 2"
                />

                <h3 className="card__title">
                  Профессиональный подход
                </h3>

                <p className="card__text">
                  Мастера с опытом от 5 лет
                </p>
              </article>

              <article className="card">
                <img
                  className="card__img"
                  src="/IMG/bgfywerbgf8ie4bcfeyhvbfyub.png"
                  alt="Атмосфера 3"
                />

                <h3 className="card__title">
                  Настоящий отдых
                </h3>

                <p className="card__text">
                  Музыка, кофе и уютная атмосфера
                </p>
              </article>

            </div>
          </div>
        </section>

        <section className="faq">
          <div className="container">

            <h2 className="section-title">
              Частые вопросы
            </h2>

            <div className="faq-list">

              <details className="faq__item">
                <summary className="faq__summary">
                  Как выбрать мастера?
                </summary>

                <div className="faq__content">
                  В нашем сайте и Instagram —
                  актуальные работы каждого барбера
                  с подписанным стилем.
                </div>
              </details>

              <details className="faq__item">
                <summary className="faq__summary">
                  А если я не знаю,
                  какая стрижка мне подойдет?
                </summary>

                <div className="faq__content">
                  Мы предложим несколько вариантов
                  и поможем подобрать лучший образ.
                </div>
              </details>

              <details className="faq__item">
                <summary className="faq__summary">
                  Есть ли девушки-мастера?
                </summary>

                <div className="faq__content">
                  Да, у нас работают
                  как мужчины, так и девушки-барберы.
                </div>
              </details>

              <details className="faq__item">
                <summary className="faq__summary">
                  У вас строго по записи?
                </summary>

                <div className="faq__content">
                  Да. Мы работаем по записи,
                  чтобы не создавать очередей.
                </div>
              </details>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default AboutPage