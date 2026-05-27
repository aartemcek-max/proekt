// src/App.jsx — минимальная версия для теста
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && phone) {
      alert(`Спасибо, ${name}! Мы перезвоним на ${phone}`)
      setName('')
      setPhone('')
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container header__inner">
          <a className="logo" href="/">BarberHub</a>
          <nav className="nav">
            <a className="nav__link" href="#contacts">Контакты</a>
            <a className="nav__link" href="#about">О нас</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__text">
              <h1 className="hero__title">Место силы,<br />где рождается стиль</h1>
              <p className="hero__subtitle">
                Удобная прическа, уютный стайлинг и атмосфера, в которую хочется возвращаться
              </p>
              
              {/* Форма записи */}
              <div className="react-booking-form">
                <h3 style={{ marginBottom: '15px', fontSize: '24px', color: '#333' }}>
                  Запись онлайн
                </h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    style={{
                      width: '100%',
                      padding: '12px',
                      marginBottom: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px'
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Ваш телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                    style={{
                      width: '100%',
                      padding: '12px',
                      marginBottom: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px'
                    }}
                  />
                  <button 
                    type="submit" 
                    className="form-button"
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#333',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                      cursor: 'pointer'
                    }}
                  >
                    Записаться
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__text">© 2026 BarberHub</p>
        </div>
      </footer>
    </div>
  )
}