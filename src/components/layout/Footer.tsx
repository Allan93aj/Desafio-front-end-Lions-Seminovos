import { ArrowUpRight, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__main">
          <Link to="/" className="site-footer__brand">
            <span className="site-footer__logo">L</span>

            <span className="site-footer__brand-name">
              <strong>LIONS</strong> Seminovos
            </span>
          </Link>

          <p className="site-footer__description">
            Encontre seu próximo veículo com praticidade e uma
            experiência de compra mais simples.
          </p>

          <nav className="site-footer__nav" aria-label="Navegação do rodapé">
            <Link to="/">Página inicial</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/agendar-visita">Agendar uma visita</Link>
            <a
              href="https://www.lionsseminovos.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Site oficial
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span className="site-footer__copyright">
            © {new Date().getFullYear()} Lions Seminovos. Projeto demonstrativo.
          </span>

          <a
            className="site-footer__credit"
            href="https://github.com/Allan93aj"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={16} aria-hidden="true" />
            Desenvolvido por <strong>Allan Andrade</strong>
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}