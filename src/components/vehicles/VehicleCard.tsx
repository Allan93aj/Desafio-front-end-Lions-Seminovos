
import { Link } from "react-router-dom";
import { Gauge, Calendar, ArrowRight } from "lucide-react";
import type { Vehicle } from "../../data/vehicles";
import "./VehicleCard.css";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const formattedPrice = vehicle.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

  return (
    <article className="vehicle-card">
      <Link
        to={`/veiculo/${vehicle.id}`}
        className="vehicle-card-image-link"
        aria-label={`Ver detalhes de ${vehicle.brand} ${vehicle.model}`}
      >
        <div className="vehicle-card-image">
          <img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version}`}
            loading="lazy"
          />
          <span className="vehicle-card-year">{vehicle.year}</span>
        </div>
      </Link>

      <div className="vehicle-card-content">
        <span className="vehicle-card-brand">{vehicle.brand}</span>

        <h3 className="vehicle-card-title">
          {vehicle.model} {vehicle.version}
        </h3>

        <div className="vehicle-card-specs">
          <span>
            <Calendar size={15} aria-hidden="true" />
            {vehicle.year}
          </span>

          <span>
            <Gauge size={15} aria-hidden="true" />
            {vehicle.mileage.toLocaleString("pt-BR")} km
          </span>
        </div>

        <div className="vehicle-card-footer">
          <div>
            <span className="vehicle-card-price-label">Preço</span>
            <strong className="vehicle-card-price">
              {formattedPrice}
            </strong>
          </div>

          <Link
            to={`/veiculo/${vehicle.id}`}
            className="vehicle-card-button"
            aria-label={`Ver detalhes do ${vehicle.model}`}
          >
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
