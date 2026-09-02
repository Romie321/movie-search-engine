import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieDetails.css";

const POSTER_BASE = "https://image.tmdb.org/t/p/w500";
const BACKDROP_BASE = "https://image.tmdb.org/t/p/w1280";

function MovieDetails() {
  const { id } = useParams();
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieDetails(id);
        if (!cancelled) setMovie(data);
      } catch (err) {
        console.log(err);
        if (!cancelled) setError("Sorry, failed to load this movie.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return <div className="details-status">Loading movie...</div>;
  }

  if (error || !movie) {
    return (
      <div className="details-status">
        <p>{error ?? "Movie not found."}</p>
        <Link to="/" className="details-back">
          Back to search
        </Link>
      </div>
    );
  }

  const favorite = isFavorite(movie.id);
  const year = movie.release_date?.split("-")[0] ?? "N/A";
  const runtime = movie.runtime ? `${movie.runtime} min` : "N/A";
  const rating =
    typeof movie.vote_average === "number"
      ? movie.vote_average.toFixed(1)
      : "N/A";

  return (
    <article
      className="movie-details"
      style={
        movie.backdrop_path
          ? {
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), var(--main)), url(${BACKDROP_BASE}${movie.backdrop_path})`,
            }
          : undefined
      }
    >
      <Link to="/" className="details-back">
        ← Back
      </Link>
      <div className="details-layout">
        {movie.poster_path ? (
          <img
            className="details-poster"
            src={`${POSTER_BASE}${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="details-poster poster-placeholder">No poster</div>
        )}
        <div className="details-info">
          <h1>
            {movie.title} <span className="details-year">({year})</span>
          </h1>
          {movie.tagline ? <p className="details-tagline">{movie.tagline}</p> : null}
          <p className="details-meta">
            {runtime} · ★ {rating}
            {movie.genres?.length
              ? ` · ${movie.genres.map((genre) => genre.name).join(", ")}`
              : ""}
          </p>
          <p className="details-overview">
            {movie.overview || "No description available."}
          </p>
          <button
            type="button"
            className={`details-favorite ${favorite ? "active" : ""}`}
            onClick={() =>
              favorite ? removeFromFavorites(movie.id) : addToFavorites(movie)
            }
            aria-pressed={favorite}
          >
            {favorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default MovieDetails;
