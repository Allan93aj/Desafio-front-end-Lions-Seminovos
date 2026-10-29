import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./VehicleCategories.css";

const categories = [
  {
    name: "Hatch",
    category: "hatch",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=85",
    alt: "Carro hatch",
  },
  {
    name: "Sedan",
    category: "sedan",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=700&q=85",
    alt: "Carro sedan",
  },
  {
    name: "SUV",
    category: "suv",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=85",
    alt: "Veículo SUV",
  },
  {
    name: "Picape",
    category: "picape",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=85",
    alt: "Picape",
  },
  {
    name: "Utilitário ou Van",
    category: "utilitarios",
    image:
      "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?auto=format&fit=crop&w=700&q=85",
    alt: "Veículo utilitário ou van",
  },
  {
    name: "Motos",
    category: "motos",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=700&q=85",
    alt: "Motocicleta",
  },
];

export function VehicleCategories() {
  return (
    <section className="vehicle-categories" aria-labelledby="categories-title">
      <div className="vehicle-categories__container">
        <header className="vehicle-categories__header">
          <span className="vehicle-categories__eyebrow">
            <span className="vehicle-categories__eyebrow-line" />
            Categorias
            <span className="vehicle-categories__eyebrow-line" />
          </span>

          <h2 id="categories-title" className="vehicle-categories__title">
            Navegue por tipo de <span>veículo</span>
          </h2>

          <p className="vehicle-categories__subtitle">
            Encontre o modelo ideal para sua rotina e seu estilo de vida.
          </p>
        </header>

        <div className="vehicle-categories__grid">
          {categories.map((category) => (
            <Link
              key={category.category}
              to={`/catalogo?categoria=${category.category}`}
              className="vehicle-category"
            >
              <img
                className="vehicle-category__image"
                src={category.image}
                alt={category.alt}
                loading="lazy"
              />

              <span className="vehicle-category__overlay" />

              <span className="vehicle-category__content">
                <span className="vehicle-category__name">{category.name}</span>

                <ArrowRight
                  className="vehicle-category__arrow"
                  size={22}
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
