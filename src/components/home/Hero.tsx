import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__background" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span>Seminovos selecionados</span>
          </div>

          <h1 className="hero__title">
            Seu próximo carro
            <span>está aqui.</span>
          </h1>

          <p className="hero__description">
            Encontre seu próximo seminovo com praticidade,
            transparência e uma seleção de veículos para
            diferentes estilos e necessidades.
          </p>

          <div className="hero__actions">
            <Link to="/catalogo" className="hero__button hero__button--primary">
              Explorar veículos
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link
              to="/agendar-visita"
              className="hero__button hero__button--secondary"
            >
              <CalendarDays size={17} aria-hidden="true" />
              Agendar uma visita
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}