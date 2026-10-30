
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("Aplicação Lions Seminovos", () => {
  it("deve renderizar o cabeçalho", () => {
    render(<App />);

    expect(document.querySelector(".site-header")).not.toBeNull();
  });

  it("deve disponibilizar o link oficial no cabeçalho", () => {
    render(<App />);

    const header = document.querySelector(".site-header");

    expect(header).not.toBeNull();

    const officialLink = within(header as HTMLElement).getByRole("link", {
      name: /site oficial/i,
    });

    expect(officialLink).toHaveAttribute(
      "href",
      "https://www.lionsseminovos.com.br/",
    );

    expect(officialLink).toHaveAttribute("target", "_blank");
  });

  it("deve exibir os links de navegação principais", () => {
    render(<App />);

    const header = document.querySelector(".site-header");

    expect(header).not.toBeNull();

    const navigation = within(header as HTMLElement);

    expect(
      navigation.getByRole("link", { name: /início/i }),
    ).toBeInTheDocument();

    expect(
      navigation.getByRole("link", { name: /catálogo/i }),
    ).toBeInTheDocument();

    expect(
      navigation.getByRole("link", { name: /agendar visita/i }),
    ).toBeInTheDocument();
  });

  it("deve renderizar um título principal", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1 }),
    ).toBeInTheDocument();
  });

  it("deve renderizar conteúdo da página inicial", () => {
    render(<App />);

    expect(document.querySelector("main")).not.toBeNull();
  });
});
