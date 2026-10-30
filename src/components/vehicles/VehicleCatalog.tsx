
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { vehicles } from "../../data/vehicles";
import { VehicleCard } from "./VehicleCard";
import "./VehicleCatalog.css";

const categoryNames: Record<string, string> = {
  hatch: "Hatches",
  sedan: "Sedãs",
  suv: "SUVs",
  picape: "Picapes",
  utilitarios: "Utilitários",
  motos: "Motos",
};

export function VehicleCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("categoria") ?? "";

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("recommended");

  const brands = useMemo(
    () => [...new Set(vehicles.map((vehicle) => vehicle.brand))].sort(),
    [],
  );

  const filteredVehicles = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return vehicles
      .filter((vehicle) => {
        const searchableText =
          `${vehicle.brand} ${vehicle.model} ${vehicle.version} ${vehicle.year}`.toLowerCase();

        const matchesSearch = searchableText.includes(normalizedSearch);
        const matchesBrand =
          !selectedBrand || vehicle.brand === selectedBrand;
        const matchesPrice =
          !maxPrice || vehicle.price <= Number(maxPrice);
        const matchesCategory =
          !selectedCategory || vehicle.category === selectedCategory;

        return (
          matchesCategory &&
  matchesSearch &&
  matchesBrand &&
  matchesPrice
        );
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "year-desc":
            return b.year - a.year;
          default:
            return 0;
        }
      });
  }, [search, selectedBrand, maxPrice, sortBy, selectedCategory]);

  function clearFilters() {
    setSearch("");
    setSelectedBrand("");
    setMaxPrice("");
    setSortBy("recommended");
    setSearchParams({});
  }


  return (
    <main className="catalog-page">
      <section className="catalog-header">
        <div className="catalog-container">
          <span className="catalog-eyebrow">ENCONTRE SEU PRÓXIMO CARRO</span>

          <h1>
            {selectedCategory && categoryNames[selectedCategory]
              ? categoryNames[selectedCategory]
              : "Nosso catálogo"}
          </h1>

          <p>
            Explore nosso estoque e encontre o veículo ideal para você.
          </p>

          <Link to="/catalogo" className="catalog-all-link">
            Ver todas as categorias
          </Link>
        </div>
      </section>

      <section className="catalog-container catalog-content">
        <div className="catalog-toolbar">
          <div className="catalog-results">
            <strong>{filteredVehicles.length}</strong>{" "}
            {filteredVehicles.length === 1
              ? "veículo encontrado"
              : "veículos encontrados"}
          </div>

          <label className="catalog-sort">
            <ArrowUpDown size={17} aria-hidden="true" />
            <span>Ordenar por</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="recommended">Recomendados</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
              <option value="year-desc">Ano mais recente</option>
            </select>
          </label>
        </div>

        <div className="catalog-layout">
          <aside className="catalog-filters">
            <div className="catalog-filter-heading">
              <SlidersHorizontal size={19} aria-hidden="true" />
              <h2>Filtros</h2>
            </div>

            <div className="catalog-filter-group">
              <label htmlFor="vehicle-search">Buscar veículo</label>
              <div className="catalog-search-input">
                <Search size={18} aria-hidden="true" />
                <input
                  id="vehicle-search"
                  type="search"
                  placeholder="Modelo, marca ou ano..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>

            <div className="catalog-filter-group">
              <label htmlFor="vehicle-category">Categoria</label>
              <select
                id="vehicle-category"
                value={selectedCategory}
                onChange={(event) => {
                  const category = event.target.value;
                  const nextParams = new URLSearchParams(searchParams);

                  if (category) {
                    nextParams.set("categoria", category);
                  } else {
                    nextParams.delete("categoria");
                  }

                  setSearchParams(nextParams);
                }}
              >
                <option value="">Todas as categorias</option>
                {Object.entries(categoryNames).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="catalog-filter-group">
              <label htmlFor="vehicle-brand">Marca</label>
              <select
                id="vehicle-brand"
                value={selectedBrand}
                onChange={(event) => setSelectedBrand(event.target.value)}
              >
                <option value="">Todas as marcas</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="catalog-filter-group">
              <label htmlFor="vehicle-price">Preço máximo</label>
              <select
                id="vehicle-price"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
              >
                <option value="">Qualquer preço</option>
                <option value="30000">Até R$ 30.000</option>
                <option value="50000">Até R$ 50.000</option>
                <option value="70000">Até R$ 70.000</option>
                <option value="100000">Até R$ 100.000</option>
                <option value="150000">Até R$ 150.000</option>
              </select>
            </div>

            <button
              type="button"
              className="catalog-clear-button"
              onClick={clearFilters}
            >
              Limpar filtros
            </button>
          </aside>

          <div className="catalog-results-area">
            {filteredVehicles.length > 0 ? (
              <div className="catalog-grid">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            ) : (
              <div className="catalog-empty">
                <Search size={36} aria-hidden="true" />
                <h2>Nenhum veículo encontrado</h2>
                <p>
                  Não encontramos veículos com os filtros selecionados.
                  Experimente alterar sua busca.
                </p>
                <button
                  type="button"
                  className="catalog-clear-button"
                  onClick={clearFilters}
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="catalog-disclaimer">
          Os veículos e preços exibidos são dados demonstrativos para este
          projeto de portfólio.
        </p>
      </section>
    </main>
  );
}
