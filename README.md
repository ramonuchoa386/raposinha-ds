# Biblioteca de componentes da Raposinha Festeira

Biblioteca de componentes visuais para acelerar a construção de interfaces digitais. Feita com o tema da Raposinha Festeira.

## Preview

Em breve...

# Como usar

Atenda aos requisitos mínimos e execute as seguintes etapas para utilizar esta biblioteca de componentes.

1. Aplicação em React JS + Styled Components;
2. Instalar a biblioteca com o npm;
3. Importar o tema principal e os estilos globais;
4. Começar a utilizar os componentes!

## Requisitos

Você precisa ter iniciado uma aplicação em React JS e ter o Styled Components como dependência.

<!-- ## Instalar a biblioteca

Em desenvolvimento... -->

## Importando o tema principal e os estilos globais

Em uma aplicação React, importe o tema principal e os estilos globais no ponto de início da aplicação, por padrão o arquivo `index.tsx` no diretório `src` do seu projeto. Por ex.:

```jsx
/**
 * Uma aplicação em React:
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Você precisa ter o styled-components como dependência do seu projeto
 */
import { ThemeProvider } from "styled-components";

/**
 * Importar o tema principal e os estilos globais da biblioteca
 */
import { theme, GlobalStyles } from "raposinha-ds";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>   // usar o tema principal como base do ThemeProvider do styled-components
      <GlobalStyles />              // instânciar os estilos globais
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

## Usar os componentes

Agora podemos utilizar os componentes da biblioteca para construir as páginas da sua aplicação.

```jsx
import React from "react";

/**
 * Importar os componentes da biblioteca
 */
import { Button, Input } from "raposinha-ds";

export default const LoginForm = () => (
  <form>
    <Input type="email" placeholder="Seu e-mail">   // instânciar os componentes
    <Input type="password" placeholder="Sua senha">
    <Button type="submit">Entrar</Button>
  </form>
);
```
