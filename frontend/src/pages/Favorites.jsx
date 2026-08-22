import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";

function Favorites() {
  return (
    <div className="favorites-empty">
      <h2>No Favorite movies found.</h2>
      <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
}

export default Favorites;
