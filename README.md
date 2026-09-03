# 🎬 Movie Search Engine
A simple and responsive React application that allows users to search for movies using a public API and view key details like posters, release dates, and descriptions.

## 🚧 Work in Progress
This project is in its early stages. I’m actively building out the core features, refining the UI, and documenting progress as I go. More updates coming soon.

# 🚀 Features
- Search for movies by title (search stays in the box, with debounce and a clear button)

- Display movie posters, titles, release years, and descriptions

- Dedicated movie details page (overview, genres, runtime, rating)

- Save favorites locally and view them on the Favorites page

- Genre filters and sorting (popularity, rating, newest, title)

- Pagination and loading skeletons

- Light / dark mode toggle

- Responsive layout built with custom CSS

- Clean component structure (NavBar, MovieCard, Home, Favorites, MovieDetails)

- API integration using fetch (TMDB)

- Error handling for empty searches or failed requests

## 🛠️ Tech Stack
- React

- JavaScript (ES6+)

- CSS

- Vite

- React Router

- Movie API (TMDB)

## 📦 Installation & Setup
bash
### # Clone the repository
git clone https://github.com/Romie321/movie-search-engine.git

### # Navigate into the project folder
cd movie-search-engine/frontend

### # Install dependencies
npm install

### # Start the development server
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
## 🔮 Future Improvements
- Add screenshots of the current UI

- Improve search + genre filtering together (filter across all pages, not only the current page)

- Optional infinite scroll instead of pagination

## 📸 Screenshots
(To be added once UI is ready.)

## 📚 Purpose
This project helps me practice:

- React components

- State management

- API calls

- Clean UI structure

- Building in public and documenting progress

## 🙌 Acknowledgements
Thanks to TMDB for providing the movie data API.
