import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <movieCard
        movie={{ title: "Example Movie", releaseDate: "2023-01-01" }}
      />
      <MovieCard
        movie={{ title: "Another Movie", releaseDate: "2023-02-01" }}
      />
    </>
  );
}

export default App;
