import { ArrowUpRight, Gauge, Fuel, Settings2 } from "lucide-react";
import type { Vehicle } from "../../data/vehicles";
import { Link } from "react-router-dom";
import "./VehicleCard.css";

interface VehicleCardProps {
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

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-image-wrapper">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="vehicle-image"
          loading="lazy"
        />

        <span className="vehicle-year">{vehicle.year}</span>
      </div>

      <div className="vehicle-info">
        <span className="vehicle-brand">{vehicle.brand}</span>

        <h3>{vehicle.model}</h3>

        <p className="vehicle-version">{vehicle.version}</p>

        <div className="vehicle-specs">
          <span>
            <Gauge size={15} />
            {formatMileage(vehicle.mileage)}
          </span>

          <span>
            <Settings2 size={15} />
            {vehicle.transmission}
          </span>

          <span>
            <Fuel size={15} />
            {vehicle.fuel}
          </span>
        </div>

        <div className="vehicle-card-footer">
          <div>
            <span className="vehicle-price-label">Preço demonstrativo</span>
            <strong>{formatPrice(vehicle.price)}</strong>
          </div>

          <Link
            to={`/veiculo/${vehicle.id}`}
            className="vehicle-details-button"
            aria-label={`Ver detalhes de ${vehicle.brand} ${vehicle.model}`}
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
}
