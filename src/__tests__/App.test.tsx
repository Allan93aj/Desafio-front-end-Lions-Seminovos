
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import App from "../App";

describe("Aplicação Lions Seminovos", () => {
  it("deve exibir a marca da concessionária", () => {
    render(<App />);

    const header = document.querySelector(".site-header");

    expect(header).not.toBeNull();

    expect(
      within(header as HTMLElement).getByRole("link", {
        name: /Lions Seminovos/i,
      }),
    ).toBeInTheDocument();
  });

 it("deve exibir o título principal da página inicial", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1 }),
  ).toBeInTheDocument();
});

  it("deve exibir os links de navegação", () => {
    render(<App />);

    const header = document.querySelector(".site-header");

    expect(header).not.toBeNull();

    const navigation = within(header as HTMLElement);

    expect(
      navigation.getByRole("link", { name: "Início" }),
    ).toBeInTheDocument();

    expect(
      navigation.getByRole("link", { name: "Catálogo" }),
    ).toBeInTheDocument();

    expect(
      navigation.getByRole("link", { name: "Agendar visita" }),
    ).toBeInTheDocument();
  });

  it("deve exibir apenas seis veículos em destaque na Home", () => {
    render(<App />);

    const section = document.querySelector(".featured-vehicles");

    expect(section).not.toBeNull();

    expect(
      within(section as HTMLElement).getAllByRole("link", {
        name: /Ver detalhes de/i,
      }),
    ).toHaveLength(6);
  });
});
