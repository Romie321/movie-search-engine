function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
            <button className="favorite-btn" onClick={}></button>
        </div>
      </div>
    </div>
  );
}
