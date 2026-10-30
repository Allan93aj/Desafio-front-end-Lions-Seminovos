# Lions Seminovos — Desafio Front-end

Aplicação front-end inspirada no site da **Lions Seminovos**, desenvolvida como parte do desafio técnico para a vaga de Desenvolvedor Front-end.

O projeto apresenta uma interface para explorar veículos, consultar detalhes e demonstrar interesse em agendar uma visita à concessionária.

## Sobre o projeto

O objetivo foi desenvolver uma aplicação inspirada no site público da Lions Seminovos, com foco em três áreas principais:

- **Página inicial:** apresentação da concessionária, categorias e veículos em destaque.
- **Catálogo:** listagem de veículos com busca, filtros e opções de ordenação.
- **Agende uma visita:** formulário para preenchimento dos dados de interesse do visitante.

A interface foi desenvolvida buscando uma experiência de navegação simples, organizada e responsiva, adaptada a diferentes tamanhos de tela.

Os veículos apresentados utilizam dados demonstrativos para fins de avaliação e portfólio.

## Funcionalidades

- Página inicial com apresentação visual e veículos em destaque.
- Navegação entre as páginas da aplicação.
- Categorias de veículos: hatch, sedan, SUV, picape, utilitários e motos.
- Catálogo com busca por marca, modelo e ano.
- Filtros por categoria, marca e preço máximo.
- Ordenação por preço e ano do veículo.
- Página de detalhes dos veículos.
- Formulário para agendamento de visita.
- Link para acesso ao site oficial da Lions Seminovos.
- Layout responsivo para diferentes tamanhos de tela.
- Testes automatizados dos principais componentes e comportamentos implementados.

## Tecnologias utilizadas

- **React** — construção da interface por componentes.
- **TypeScript** — tipagem estática e maior segurança durante o desenvolvimento.
- **Vite** — ambiente de desenvolvimento e build para produção.
- **React Router DOM** — navegação entre páginas.
- **Lucide React** — ícones da interface.
- **CSS** — estilização e responsividade.
- **Vitest** — execução dos testes automatizados.
- **React Testing Library** — testes dos componentes e da interface.

## Organização do código

O projeto foi organizado por responsabilidades, separando componentes de layout, páginas e funcionalidades específicas.

```text
src/
├── components/
│   ├── appointments/
│   │   └── AppointmentForm.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── VehicleCategories.tsx
│   │   ├── VehicleCard.tsx
│   │   └── WhyChooseUs.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── vehicles/
│       ├── VehicleCatalog.tsx
│       ├── VehicleCatalog.css
│       ├── VehicleCard.tsx
│       └── VehicleDetails.tsx
├── data/
│   └── vehicles.ts
├── __tests__/
│   ├── App.test.tsx
│   └── AppointmentForm.test.tsx
├── App.tsx
├── index.css
└── main.tsx
```

A estrutura acima representa a organização principal dos componentes e arquivos utilizados no projeto.

## Decisões de desenvolvimento

Durante a implementação, foram adotadas as seguintes decisões:

- **Componentização:** separação da interface em componentes reutilizáveis para facilitar a manutenção e a evolução do código.
- **Separação de responsabilidades:** organização dos componentes de layout, catálogo, página inicial e agendamento em diretórios específicos.
- **Dados demonstrativos:** utilização de uma estrutura local de veículos para permitir a navegação e a aplicação dos filtros sem depender de uma API externa.
- **Navegação:** utilização do React Router DOM para organizar as rotas da aplicação.
- **Responsividade:** aplicação de estilos CSS para adaptar a interface a diferentes resoluções.
- **Testes automatizados:** utilização de Vitest e React Testing Library para validar elementos da aplicação e comportamentos do formulário.
- **Escopo do desafio:** priorização das páginas solicitadas pela Lions Seminovos, sem implementar funcionalidades de backend que não eram necessárias para a avaliação.

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado, caso deseje clonar o repositório.

### 1. Clone o repositório

```bash
git clone https://github.com/Allan93aj/Desafio-front-end-Lions-Seminovos.git
```

### 2. Acesse a pasta do projeto

```bash
cd Desafio-front-end-Lions-Seminovos
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente:

```text
http://localhost:5173/
```

Abra o endereço indicado no navegador.

## Build de produção

Para verificar os tipos do TypeScript e gerar os arquivos otimizados para produção, execute:

```bash
npm run build
```

Os arquivos gerados serão disponibilizados no diretório `dist/`.

Para visualizar localmente a versão de produção, execute:

```bash
npm run preview
```

## Testes automatizados

Para executar os testes uma única vez:

```bash
npx vitest run
```

Os testes foram implementados com Vitest e React Testing Library.

Na última validação realizada durante o desenvolvimento, os dois arquivos de teste passaram, totalizando **7 testes aprovados**.

## Referência visual

O site público da Lions Seminovos foi utilizado como referência para a proposta visual e para a definição das páginas principais.

Site oficial: https://lionsseminovos.com.br/

Os elementos gráficos públicos foram utilizados como referência para a construção de uma aplicação independente, desenvolvida exclusivamente para o desafio técnico.

## Considerações finais

O desenvolvimento deste projeto permitiu aplicar conhecimentos de React, TypeScript, componentização, navegação, estilização responsiva e testes automatizados em uma aplicação prática.

A implementação priorizou a organização do código, a facilidade de manutenção e a experiência de navegação, respeitando o escopo proposto pela equipe da Lions Seminovos.

---

**Projeto desenvolvido para fins de avaliação técnica e portfólio.**
