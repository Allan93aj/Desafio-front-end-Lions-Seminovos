import {
  CarFront,
  ClipboardCheck,
  Headset,
  CalendarCheck,
} from 'lucide-react'
import './WhyChooseUs.css'

const benefits = [
  {
    icon: CarFront,
    title: 'Variedade de veículos',
    description:
      'Hatches, sedans, SUVs, picapes, utilitários e motos.',
  },
  {
    icon: ClipboardCheck,
    title: 'Informações claras',
    description:
      'Ano, quilometragem, câmbio e opcionais em um só lugar.',
  },
  {
    icon: Headset,
    title: 'Atendimento personalizado',
    description:
      'Tire dúvidas e receba orientação para escolher.',
  },
  {
    icon: CalendarCheck,
    title: 'Facilidade para conhecer',
    description:
      'Agende uma visita para ver o veículo de perto.',
  },
]

export function WhyChooseUs() {
  return (
    <section
      className="why-choose-us"
      aria-labelledby="why-choose-us-title"
    >
      <div className="why-choose-us__container">
        <header className="why-choose-us__header">
          <span className="why-choose-us__eyebrow">
            <span />
            Por que escolher
          </span>

          <h2 id="why-choose-us-title">
            Uma experiência de compra <span>mais simples</span>
          </h2>

          <p>
            Tudo para ajudar você a encontrar seu próximo veículo com
            mais praticidade e confiança.
          </p>
        </header>

        <div className="why-choose-us__grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-card__top">
                  <span className="benefit-card__icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>

                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

                <span
                  className="benefit-card__accent"
                  aria-hidden="true"
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}