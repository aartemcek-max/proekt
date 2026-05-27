import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="logo" to="/">
          BarberHub
        </Link>

        <nav className="nav">

          <Link className="nav__link" to="/about">
            О нас
          </Link>

          <Link className="nav__link" to="/contacts">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header