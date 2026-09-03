import { Link } from "react-router-dom";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const POSTER_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const year = movie.release_date?.split("-")[0] ?? "N/A";
  const posterUrl = movie.poster_path
    ? `${POSTER_BASE}${movie.poster_path}`
    : null;

  function handleFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <article className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-card-link">
        <div className="movie-poster">
          {posterUrl ? (
            <img src={posterUrl} alt={movie.title} />
          ) : (
            <div className="poster-placeholder" aria-hidden="true">
              No poster
            </div>
          )}
          <div className="movie-overlay" />
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{year}</p>
          <p className="user-rating"></p>
        </div>
      </Link>
      <button
        type="button"
        className={`favorite-btn ${favorite ? "active" : ""}`}
        onClick={handleFavoriteClick}
        aria-pressed={favorite}
        aria-label={
          favorite
            ? `Remove ${movie.title} from favorites`
            : `Add ${movie.title} to favorites`
        }
      >
        &#9733;
      </button>
    </article>
  );
}

export default MovieCard;
