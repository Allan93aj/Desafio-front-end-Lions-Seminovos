import { Link } from "react-router-dom";
import "./VehicleCategories.css";

import hatchImg from "../../assets/categorias/hatch.png";
import sedanImg from "../../assets/categorias/sedan.png";
import suvImg from "../../assets/categorias/suv.png";
import picapeImg from "../../assets/categorias/picape.png";
import utilitarioImg from "../../assets/categorias/van.png";
import motosImg from "../../assets/categorias/moto.png";
import "./VehicleCategories.css";

const categories = [
  { name: "Hatch", category: "hatch", image: hatchImg, alt: "Carro hatch" },
  { name: "Sedan", category: "sedan", image: sedanImg, alt: "Carro sedan" },
  { name: "SUV", category: "suv", image: suvImg, alt: "Veículo SUV" },
  { name: "Picape", category: "picape", image: picapeImg, alt: "Picape" },
  { name: "Utilitário", category: "utilitarios", image: utilitarioImg, alt: "Veículo utilitário" },
  { name: "Motos", category: "motos", image: motosImg, alt: "Motocicleta" },
];

export function VehicleCategories() {
  return (
    <section className="vehicle-categories" aria-labelledby="categories-title">
      <div className="vehicle-categories__container">
        <header className="vehicle-categories__header">
          <span className="vehicle-categories__eyebrow">Categorias</span>
          <h2 id="categories-title" className="vehicle-categories__title">
            Navegue por tipo de veículo
          </h2>
        </header>

        <div className="vehicle-categories__grid">
          {categories.map((item) => (
            <Link
              key={item.category}
              to={`/catalogo?categoria=${item.category}`}
              className="vehicle-category"
            >
              <span className="vehicle-category__media">
                <img
                  className="vehicle-category__image"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
              </span>
              <span className="vehicle-category__name">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}