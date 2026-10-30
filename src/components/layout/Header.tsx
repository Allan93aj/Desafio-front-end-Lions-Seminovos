
import { Link, NavLink } from 'react-router-dom'
import { CarFront } from 'lucide-react'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand">
          <CarFront size={30} />
          <span>
            Lions <strong>Seminovos</strong>
          </span>
        </Link>

        <nav className="main-navigation" aria-label="Navegação principal">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/catalogo">Catálogo</NavLink>
          <NavLink to="/agende-uma-visita">Agendar visita</NavLink>
        </nav>

        <a
          className="header-cta"
          href="https://www.lionsseminovos.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          Site oficial
        </a>
      </div>
    </header>
  )
}
