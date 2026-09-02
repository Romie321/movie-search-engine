import "../css/Skeleton.css";

function MovieSkeletonGrid({ count = 8 }) {
  return (
    <div className="movie-grid" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-poster skeleton-shimmer" />
          <div className="skeleton-lines">
            <div className="skeleton-line skeleton-shimmer" />
            <div className="skeleton-line short skeleton-shimmer" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieSkeletonGrid;
