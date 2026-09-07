# 🎬 Movie Search Engine
A responsive React application that allows users to search for movies using the TMDB API and explore detailed information such as posters, release dates, genres, runtime, and descriptions. Built to strengthen my front‑end development skills through real‑world API integration, component architecture, and clean UI design.

## 🚀 Features
- Search movies by title with debounce + clear button

- Display posters, titles, release years, and descriptions

- Dedicated movie details page (overview, genres, runtime, rating)

- Save favorites locally and view them on a Favorites page

- Genre filters + sorting (popularity, rating, newest, title)

- Pagination and loading skeletons

- Light / dark mode toggle

- Responsive layout with custom CSS

- Clean component structure (NavBar, MovieCard, Home, Favorites, MovieDetails)

- API integration using fetch (TMDB)

- Error handling for empty searches or failed requests

## 🛠️ Tech Stack
- React

- JavaScript (ES6+)

- Vite

- React Router

- CSS

- TMDB API

## 📦 Installation
bash
### Clone the repository
git clone https://github.com/Romie321/movie-search-engine.git

### Navigate into the project folder
cd movie-search-engine/frontend

### Install dependencies
npm install

### Start the development server
npm run dev
## 📁 Project Structure
Code
movie-search-engine/
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieCard.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   └── MovieSkeletonGrid.jsx
│   │   ├── contexts/
│   │   │   ├── MovieContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── css/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Favorites.jsx
│   │   │   └── MovieDetails.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│── README.md
## 🔮 Future Enhancements
- Add UI screenshots

- Improve global search + genre filtering across all pages

- Optional infinite scroll mode

## 🤝 Contributors
A special thanks to **@echandsome** for contributing major features to this project, including:

- Movie Details page

- Genre filtering system

- Light/Dark theme support

- Home page UX improvements

Your contributions helped shape the final version of this app — thank you!

## 📚 Purpose
This project helped me practice:

- React component architecture

- State management

- API calls and async flows

- Clean UI structure

- Building in public and documenting progress

## 🙌 Acknowledgements
Thanks to TMDB for providing the movie data API.
