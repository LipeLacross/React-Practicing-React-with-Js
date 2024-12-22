## 🌐 [English Version of README](README_EN.md)

# Cinetag (Projeto de Favoritos de Filmes/Vídeos)

Este projeto é uma aplicação React que permite listar, visualizar e favoritar vídeos, fazendo uso de [Context API](https://react.dev/reference/react/useContext) para gerenciamento global de estado. Foi desenvolvido seguindo boas práticas de estrutura de pastas e organização de componentes, visando escalabilidade e manutenção simples.

---

## 🔨 Funcionalidades do Projeto

- **Listagem de Vídeos:** Os vídeos são obtidos de uma API simulada (JSON Server) e exibidos na página inicial.  
- **Favoritar/Desfavoritar:** Ao clicar no ícone de “Favoritar”, o vídeo selecionado é adicionado ou removido da lista de favoritos.  
- **Visualização de Vídeo (Player):** Ao clicar em um vídeo, você é direcionado para uma rota com um reprodutor do vídeo.  
- **Gerenciamento Global de Favoritos:** Implementado via `Context API`, mantendo a lista de favoritos disponível em todo o app.  
- **Roteamento Interno:** Utilização de [React Router](https://reactrouter.com) para navegação entre páginas (Início, Favoritos, Player e 404).  
- **Página de Favoritos:** Exibe apenas os vídeos marcados como favoritos.  
- **Página de Erro (404):** Exibida quando o usuário tenta acessar uma rota inexistente.

### Exemplo Visual do Projeto

![chrome-capture-2024-12-22](https://github.com/user-attachments/assets/bc34dc48-5e90-4ab0-9ec0-827969cdfa8a)

## ✔️ Técnicas e Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
  - Hooks (useEffect, useState, useContext)
  - Context API para estado global
- [React Router](https://reactrouter.com) para gerenciar rotas
- [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) para estilização encapsulada
- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para requisições HTTP
- Organização de componentes em pastas individuais (`ComponentName/index.js` + `ComponentName.module.css`)

---

## 📁 Estrutura do Projeto

Abaixo, um resumo da estrutura de pastas (alguns arquivos omitidos para manter o foco):

- **LICENSE**  
- **README.md**  
- **README_EN.md**  
- **package.json** / **package-lock.json**: Configurações e dependências do projeto.  
- **public/**  
  - **favicon.ico**: Ícone do site.  
  - **imagens/**: Armazena os banners (home, favoritos, player).  
  - **index.html**: Arquivo HTML principal que carrega a aplicação React.  
- **src/**  
  - **components/**: Componentes reutilizáveis (Banner, Cabecalho, Card, etc.).  
  - **contextos/**: Definições de Context API (ex.: `Favoritos.js`).  
  - **pages/**: Páginas correspondentes às rotas (Início, Favoritos, Player, etc.).  
  - **index.css**: Estilos globais (variáveis e reset).  
  - **index.js**: Ponto de entrada do React (renderiza `AppRoutes`).  
  - **routes.js**: Declaração das rotas usando React Router.

---

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**  
   O [Node.js](https://nodejs.org/) é necessário para rodar o projeto.  
   Verifique a versão instalada com:
   ```bash
   node -v
   ```
Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**  
   Copie a URL do repositório e execute o comando abaixo no terminal:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

3. **Instale as dependências**  
   Entre na pasta do projeto e rode:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn
   ```

4. **Execute o projeto**  
   Após a instalação, rode:
   ```bash
   npm start
   ```
   ou
   ```bash
   yarn start
   ```
   A aplicação estará disponível em `http://localhost:3000`.

---

## 🌐 Deploy

Para efetuar o deploy em algum serviço de hospedagem de aplicações React, como [Netlify](https://www.netlify.com/) ou [Vercel](https://vercel.com/), você pode seguir os passos abaixo:

1. **Build de Produção**  
   Gera a versão otimizada do projeto para produção:
   ```bash
   npm run build
   ```
   ou
   ```bash
   yarn build
   ```
   Será criada uma pasta `build/` com todos os arquivos estáticos prontos.

2. **Hospedar a pasta `build/`**
    - Faça upload da pasta `build/` (ou aponte seu serviço para ela).
    - Em plataformas como Netlify ou Vercel, basta arrastar a pasta `build/` ou configurar o repositório Git.
    - Pronto! Sua aplicação estará online.
