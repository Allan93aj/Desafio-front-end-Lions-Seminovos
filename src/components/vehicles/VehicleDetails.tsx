
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  CalendarDays,
  Gauge,
  Fuel,
  Settings2,
  ShieldCheck,
} from 'lucide-react'
import { vehicles } from '../../data/vehicles'
import './VehicleDetails.css'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(price)

const formatMileage = (mileage: number) =>
  `${new Intl.NumberFormat('pt-BR').format(mileage)} km`

export default function VehicleDetails() {
  const { id } = useParams()
  const vehicle = vehicles.find((item) => item.id === Number(id))

  if (!vehicle) {
    return (
      <section className="vehicle-not-found">
        <h1>Veículo não encontrado</h1>
        <p>Não encontramos esse veículo em nosso catálogo demonstrativo.</p>
        <Link to="/catalogo">Voltar ao catálogo</Link>
      </section>
    )
  }

  const appointmentUrl = `/agendar-visita?veiculo=${vehicle.id}`

  return (
    <section className="vehicle-details-page">
      <Link to="/catalogo" className="details-back-link">
        <ArrowLeft size={18} />
        Voltar ao catálogo
      </Link>

      <div className="vehicle-details-layout">
        <div className="vehicle-details-photo">
          <img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
          />
          <span className="details-demo-badge">Veículo demonstrativo</span>
        </div>

        <div className="vehicle-details-info">
          <span className="details-brand">{vehicle.brand}</span>
          <h1>{vehicle.model}</h1>
          <p className="details-version">{vehicle.version}</p>

          <div className="details-price">
            <span>Preço demonstrativo</span>
            <strong>{formatPrice(vehicle.price)}</strong>
          </div>

          <div className="details-specifications">
            <div>
              <CalendarDays size={20} />
              <span>Ano</span>
              <strong>{vehicle.year}</strong>
            </div>

            <div>
              <Gauge size={20} />
              <span>Quilometragem</span>
              <strong>{formatMileage(vehicle.mileage)}</strong>
            </div>

            <div>
              <Settings2 size={20} />
              <span>Câmbio</span>
              <strong>{vehicle.transmission}</strong>
            </div>

            <div>
              <Fuel size={20} />
              <span>Combustível</span>
              <strong>{vehicle.fuel}</strong>
            </div>
          </div>

          <div className="details-assurance">
            <ShieldCheck size={20} />
            <p>
              Consulte as condições e informações do veículo antes de qualquer
              negociação. Os dados desta demonstração são fictícios.
            </p>
          </div>

          <Link to={appointmentUrl} className="details-appointment-button">
            Tenho interesse neste veículo
          </Link>
        </div>
      </div>
    </section>
  )
}
