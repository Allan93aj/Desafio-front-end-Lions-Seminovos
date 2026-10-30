import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/home/Hero";
import { VehicleCategories } from "./components/home/VehicleCategories";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import FeaturedVehicles from "./components/home/FeaturedVehicles";
import { VehicleCatalog } from "./components/vehicles/VehicleCatalog";
import VehicleDetails from "./components/vehicles/VehicleDetails";
import AppointmentForm from "./components/appointments/AppointmentForm";
import { vehicles } from "./data/vehicles";

import "./index.css";

// Volta para o topo da página sempre que a rota muda.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  // Exibe somente 6 veículos em destaque na página inicial.
  const featuredVehicles = vehicles.slice(0, 6);

  return (
    <>
      <Hero />
      <VehicleCategories />
      <FeaturedVehicles vehicles={featuredVehicles} />
      <WhyChooseUs />
    </>
  );
}

function NotFound() {
  return (
    <section style={{ padding: "96px 24px", textAlign: "center" }}>
      <h1>Página não encontrada</h1>
      <p style={{ margin: "12px 0 24px" }}>
        O endereço que você tentou acessar não existe.
      </p>
      <Link to="/">Voltar para a página inicial</Link>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<VehicleCatalog />} />
          <Route path="/veiculo/:id" element={<VehicleDetails />} />
          <Route path="/agende-uma-visita" element={<AppointmentForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}