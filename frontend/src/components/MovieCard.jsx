function MovieCard({ movie }) {
  function handleFavoriteClick() {}

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className="favorite-btn"
            onClick={handleFavoriteClick}
          ></button>
        </div>
      </div>
    </div>
  );
}
