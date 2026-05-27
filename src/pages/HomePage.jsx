import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__text">
              <h1 className="hero__title">
                Место силы,
                <br />
                где рождается стиль
              </h1>

              <p className="hero__subtitle">
                Удобная прическа, уютный стайлинг и атмосфера,
                в которую хочется возвращаться
              </p>

              <a className="btn" href="#">
                Забронировать визит →
              </a>
            </div>

            <div className="about__media">
              <div className="about__photo">
                <img
                  src="/IMG/gfhfgh.png"
                  alt="BarberHub Интерьер"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="feature" id="about">
          <div className="container">
            <h2 className="section-title">
              Почему выбирают нас
            </h2>

            <div className="cards">

              <article className="card">
                <img
                  className="card__img"
                  src="/IMG/58366269-878c-44ba-96cb-4383bac12a69.jpg"
                  alt="Уютная атмосфера"
                />

                <h3 className="card__title">
                  Уютная атмосфера
                </h3>

                <p className="card__text">
                  Универсальный персонал и дружелюбная обстановка
                </p>
              </article>

              <article className="card">
                <img
                  className="card__img"
                  src="/IMG/9e5ee713906fc8da4d98ed78b029e28d.jpg"
                  alt="Качественное обслуживание"
                />

                <h3 className="card__title">
                  Качественное обслуживание
                </h3>

                <p className="card__text">
                  Каждое утро - новая прическа и свежий взгляд
                </p>
              </article>

              <article className="card">
                <img
                  className="card__img"
                  src="/IMG/ade5fa26e9638b77e09871f07d5da183.jpg"
                  alt="Лучший сервис"
                />

                <h3 className="card__title">
                  Лучший сервис
                </h3>

                <p className="card__text">
                  Индивидуальный подход к каждому клиенту
                </p>
              </article>

            </div>
          </div>
        </section>

        <section className="feature">
          <div className="container">
            <h2 className="section-title">
              Наши мастера
            </h2>

            <div className="staff-grid">

              <article className="staff-card">
                <div className="staff-img-wrapper">
                  <img
                    className="staff-img"
                    src="https://cdn.shopify.com/s/files/1/0052/6018/1607/files/beard_vs_goatee.jpg?v=1740601165"
                    alt="Александр"
                  />
                </div>

                <h3 className="staff-name">
                  Александр
                </h3>

                <p className="staff-role">
                  Старший барбер
                </p>

                <p className="staff-desc">
                  Мастер с 8-летним опытом.
                  Специализируется на классических
                  и современных мужских стрижках.
                  Идеально работает с бородой и усами.
                </p>

                <span className="staff-exp">
                  Опыт: 8 лет
                </span>
              </article>

              <article className="staff-card">
                <div className="staff-img-wrapper">
                  <img
                    className="staff-img"
                    src="/IMG/hgjghjkk.png"
                    alt="Дмитрий"
                  />
                </div>

                <h3 className="staff-name">
                  Дмитрий
                </h3>

                <p className="staff-role">
                  Барбер-стилист
                </p>

                <p className="staff-desc">
                  Креативный мастер,
                  который не боится экспериментов.
                  Знает все тренды сезона.
                </p>

                <span className="staff-exp">
                  Опыт: 6 лет
                </span>
              </article>

              <article className="staff-card">
                <div className="staff-img-wrapper">
                  <img
                    className="staff-img"
                    src="/IMG/gfdgdf.jpg"
                    alt="Максим"
                  />
                </div>

                <h3 className="staff-name">
                  Максим
                </h3>

                <p className="staff-role">
                  Топ-барбер
                </p>

                <p className="staff-desc">
                  Эксперт по фейд-стрижкам
                  и сложным переходам.
                </p>

                <span className="staff-exp">
                  Опыт: 10 лет
                </span>
              </article>

              <article className="staff-card">
                <div className="staff-img-wrapper">
                  <img
                    className="staff-img"
                    src="/IMG/woman.png"
                    alt="Екатерина"
                  />
                </div>

                <h3 className="staff-name">
                  Екатерина
                </h3>

                <p className="staff-role">
                  Барбер-универсал
                </p>

                <p className="staff-desc">
                  Особое внимание уделяет
                  деталям и комфорту клиента.
                </p>

                <span className="staff-exp">
                  Опыт: 5 лет
                </span>
              </article>

            </div>
          </div>
        </section>

        <section className="tools">
          <div className="container">
            <h2 className="section-title">
              Профессиональные инструменты
            </h2>

            <div className="tools-grid">

              <div className="tool-card">
                <div className="tool-icon">
                  <img
                    className="staff-img"
                    src="https://ir.ozone.ru/s3/multimedia-1-y/7129897882.jpg"
                    alt=""
                  />
                </div>

                <h3 className="tool-title">
                  Японские ножницы
                </h3>

                <p className="tool-desc">
                  Прецизионная заточка позволяет
                  создавать идеальные линии.
                </p>
              </div>

              <div className="tool-card">
                <div className="tool-icon">
                  <img
                    className="staff-img"
                    src="https://main-cdn.sbermegamarket.ru/big2/hlr-system/-64/472/396/081/215/53/600020175264b1.jpg"
                    alt=""
                  />
                </div>

                <h3 className="tool-title">
                  Беспроводные машинки
                </h3>

                <p className="tool-desc">
                  Мощные и бесшумные машинки
                  Wahl и Babyliss.
                </p>
              </div>

              <div className="tool-card">
                <div className="tool-icon">
                  <img
                    className="staff-img"
                    src="https://earth-chronicles.ru/Publications_12/165/snimok_ehkrana_2017-06-12_v_12.00.21.png"
                    alt=""
                  />
                </div>

                <h3 className="tool-title">
                  Опасные бритвы
                </h3>

                <p className="tool-desc">
                  Классическое влажное бритье
                  с итальянской косметикой.
                </p>
              </div>

              <div className="tool-card">
                <div className="tool-icon">
                  <img
                    className="staff-img"
                    src="https://catalog-cdn.detmir.st/media/SurX74aFyFgLOALMObgIIw7soPDNCLpBUy8VyPu7rgc=.jpeg"
                    alt=""
                  />
                </div>

                <h3 className="tool-title">
                  Премиум-стайлинг
                </h3>

                <p className="tool-desc">
                  Воски, пасты и глины
                  от ведущих брендов.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

<section className="products">
  <div className="container">

    <h2 className="section-title">
      Продукция
    </h2>

    <div className="products-grid">

      <article className="product-card">
        <img
          className="product-img"
          src="/IMG/clay.png"
          alt="Глина"
        />

        <h3 className="product-title">
          Матовая глина
        </h3>

        <p className="product-text">
          Сильная фиксация и натуральный эффект
        </p>

        <div className="product-bottom">
          <span className="product-price">
            1490₽
          </span>

          <button className="btn">
            Купить
          </button>
        </div>
      </article>

      <article className="product-card">
        <img
          className="product-img"
          src="/IMG/wax.png"
          alt="Воск"
        />

        <h3 className="product-title">
          Воск для волос
        </h3>

        <p className="product-text">
          Идеален для классических укладок
        </p>

        <div className="product-bottom">
          <span className="product-price">
            1190₽
          </span>

          <button className="btn">
            Купить
          </button>
        </div>
      </article>

      <article className="product-card">
        <img
          className="product-img"
          src="/IMG/powder.png"
          alt="Пудра"
        />

        <h3 className="product-title">
          Пудра для объема
        </h3>

        <p className="product-text">
          Легкость и объем на весь день
        </p>

        <div className="product-bottom">
          <span className="product-price">
            990₽
          </span>

          <button className="btn">
            Купить
          </button>
        </div>
      </article>

    </div>

  </div>
</section>

      <Footer />
    </>
  )
}

export default HomePage