import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FeaturedVehicleCard  from "./FeaturedVehicleCard";
import type { Vehicle } from "../../data/vehicles";
import "./FeaturedVehicles.css";

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
}

export default function FeaturedVehicles({ vehicles }: FeaturedVehiclesProps) {
  return (
    <section className="featured" aria-labelledby="featured-title">
      <div className="featured__container">
        <header className="featured__header">
          <div>
            <span className="featured__eyebrow">Destaques</span>
            <h2 id="featured-title" className="featured__title">
              Veículos em destaque
            </h2>
            <p className="featured__subtitle">
              Uma seleção demonstrativa de modelos do nosso catálogo.
            </p>
          </div>

          <Link to="/catalogo" className="featured__all">
            Ver todos <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </header>

        <div className="featured__grid">
          {vehicles.map((vehicle) => (
            <FeaturedVehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}