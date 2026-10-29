
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Header from "./components/layout/Header";
import { Hero } from "./components/home/Hero";
import { VehicleCategories } from "./components/home/VehicleCategories";
import VehicleCard from "./components/home/VehicleCard";
import { vehicles } from "./data/vehicles";
import { VehicleCatalog } from "./components/vehicles/VehicleCatalog";
import VehicleDetails from "./components/vehicles/VehicleDetails";
import AppointmentForm from "./components/appointments/AppointmentForm";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import Footer from "./components/layout/Footer";

import "./index.css";

function Home() {
  // Exibe somente 6 veículos em destaque na página inicial.
  const featuredVehicles = vehicles.slice(0, 6);

  return (
    <>
      <Hero />

      <VehicleCategories />

      <section className="featured-vehicles">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">SELEÇÃO ESPECIAL</span>
            <h2>Veículos em destaque</h2>
            <p>
              Encontre opções para acompanhar sua próxima conquista.
            </p>
          </div>

          <Link to="/catalogo" className="view-all-link">
            Ver catálogo completo
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="featured-vehicles-grid">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}

function Catalog() {
  return <VehicleCatalog />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/veiculo/:id" element={<VehicleDetails />} />
          <Route path="/agendar-visita" element={<AppointmentForm />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
