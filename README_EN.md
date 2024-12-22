## 🌐 [English Version of README](README_EN.md)

# Cinetag (Favorite Movies/Videos Project)

This project is a React application that allows you to list, view, and favorite videos, using the [Context API](https://react.dev/reference/react/useContext) for global state management. It was developed following best practices in folder structure and component organization, aiming at scalability and simple maintenance.

---

## 🔨 Project Features

- **Video Listing:** Videos are fetched from a mock API (JSON Server) and displayed on the home page.  
- **Favorite/Unfavorite:** By clicking on the “Favorite” icon, the selected video is added or removed from the favorites list.  
- **Video Playback (Player):** Clicking on a video redirects you to a route containing a video player.  
- **Global Favorites Management:** Implemented with the `Context API`, keeping the favorites list available throughout the app.  
- **Internal Routing:** [React Router](https://reactrouter.com) is used for navigation between pages (Home, Favorites, Player, and 404).  
- **Favorites Page:** Displays only the videos marked as favorites.  
- **Error Page (404):** Displayed when the user tries to access a non-existent route.

### Visual Example of the Project

![chrome-capture-2024-12-22](https://github.com/user-attachments/assets/bc34dc48-5e90-4ab0-9ec0-827969cdfa8a)

## ✔️ Techniques and Technologies Used

- [React.js](https://reactjs.org/)
  - Hooks (useEffect, useState, useContext)
  - Context API for global state
- [React Router](https://reactrouter.com) for route management
- [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) for encapsulated styling
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for HTTP requests
- Component organization into individual folders (`ComponentName/index.js` + `ComponentName.module.css`)

---

## 📁 Project Structure

Below is an overview of the folder structure (some files are omitted to maintain focus):

- **LICENSE**  
- **README.md**  
- **README_EN.md**  
- **package.json** / **package-lock.json**: Project configurations and dependencies.  
- **public/**  
  - **favicon.ico**: Site icon.  
  - **imagens/**: Stores banners (home, favorites, player).  
  - **index.html**: Main HTML file that loads the React application.  
- **src/**  
  - **components/**: Reusable components (Banner, Cabecalho, Card, etc.).  
  - **contextos/**: Definitions of the Context API (e.g., `Favoritos.js`).  
  - **pages/**: Pages corresponding to routes (Home, Favorites, Player, etc.).  
  - **index.css**: Global styles (variables and reset).  
  - **index.js**: React entry point (renders `AppRoutes`).  
  - **routes.js**: Declaration of routes using React Router.

---

## 🛠️ How to Open and Run the Project

To run the project locally, follow the steps below:

1. **Make Sure Node.js Is Installed**  
   [Node.js](https://nodejs.org/) is required to run the project.  
   Check the installed version with:
   ```bash
   node -v
   ```
If not installed, download and install the recommended version.

2. **Clone the Repository**  
   Copy the repository URL and run the following command in your terminal:
   ```bash
   git clone <REPOSITORY_URL>
   ```

3. **Install Dependencies**  
   Enter the project folder and run:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

4. **Run the Project**  
   After installing, run:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   The application will be available at `http://localhost:3000`.

---

## 🌐 Deploy

To deploy this React application to a hosting service such as [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/), you can follow these steps:

1. **Production Build**  
   Generate the optimized production build:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
   A `build/` folder with all the ready-to-use static files will be created.

2. **Host the `build/` Folder**
    - Upload the `build/` folder (or point your service to it).
    - On platforms like Netlify or Vercel, simply drag the `build/` folder or configure the Git repository.
    - Done! Your application will be online.
