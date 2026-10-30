import { Calendar, Fuel, Gauge, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Vehicle } from "../../data/vehicles";
import "./FeaturedVehicleCard.css";

interface FeaturedVehicleCardProps {
  vehicle: Vehicle;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price);

const formatMileage = (mileage: number) =>
  `${new Intl.NumberFormat("pt-BR").format(mileage)} km`;

export default function FeaturedVehicleCard({ vehicle }: FeaturedVehicleCardProps) {
  const name = `${vehicle.brand} ${vehicle.model}`;

  return (
    <article className="featured-card">
      <div className="featured-card__media">
        <img
          src={vehicle.image}
          alt={name}
          className="featured-card__image"
          loading="lazy"
        />
        <span className="featured-card__badge">Destaque</span>
      </div>

      <div className="featured-card__body">
        <span className="featured-card__brand">{vehicle.brand}</span>
        <h3 className="featured-card__model">{vehicle.model}</h3>
        <p className="featured-card__version">{vehicle.version}</p>

        <ul className="featured-card__specs">
          <li>
            <Calendar size={15} aria-hidden="true" />
            {vehicle.year}
          </li>
          <li>
            <Gauge size={15} aria-hidden="true" />
            {formatMileage(vehicle.mileage)}
          </li>
          <li>
            <Fuel size={15} aria-hidden="true" />
            {vehicle.fuel}
          </li>
          <li>
            <Settings2 size={15} aria-hidden="true" />
            {vehicle.transmission}
          </li>
        </ul>

        <strong className="featured-card__price">{formatPrice(vehicle.price)}</strong>

        <div className="featured-card__actions">
          <Link
            to={`/veiculo/${vehicle.id}`}
            className="featured-card__button featured-card__button--outline"
            aria-label={`Ver detalhes de ${name}`}
          >
            Ver detalhes
          </Link>
          <Link
            to={`/agende-uma-visita?veiculo=${vehicle.id}`}
            className="featured-card__button featured-card__button--primary"
            aria-label={`Agendar visita para ${name}`}
          >
            Agendar visita
          </Link>
        </div>
      </div>
    </article>
  );
}