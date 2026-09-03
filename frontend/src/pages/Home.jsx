import MovieCard from "../components/MovieCard";
import MovieSkeletonGrid from "../components/MovieSkeletonGrid";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import { searchMovies, discoverMovies, getGenres } from "../services/api";
import "../css/Home.css";

const SORT_OPTIONS = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "vote_average.desc", label: "Rating" },
  { value: "release_date.desc", label: "Newest" },
  { value: "original_title.asc", label: "Title A–Z" },
];

function sortClientSide(movies, sortBy) {
  const copy = [...movies];
  switch (sortBy) {
    case "vote_average.desc":
      return copy.sort((a, b) => (b.vote_average ?? 0) - (a.vote_average ?? 0));
    case "release_date.desc":
      return copy.sort((a, b) =>
        (b.release_date ?? "").localeCompare(a.release_date ?? ""),
      );
    case "original_title.asc":
      return copy.sort((a, b) =>
        (a.title ?? "").localeCompare(b.title ?? "", undefined, {
          sensitivity: "base",
        }),
      );
    default:
      return copy.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
  }
}

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGenres()
      .then(setGenres)
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const next = searchQuery.trim();
      if (next !== debouncedQuery) {
        setDebouncedQuery(next);
        setPage(1);
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, debouncedQuery]);

  useEffect(() => {
    let cancelled = false;

    const loadMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const isSearch = debouncedQuery.length > 0;
        const data = isSearch
          ? await searchMovies(debouncedQuery, page)
          : await discoverMovies({ page, genreId, sortBy });

        let results = data.results ?? [];
        if (isSearch) {
          if (genreId) {
            results = results.filter((movie) =>
              movie.genre_ids?.includes(Number(genreId)),
            );
          }
          results = sortClientSide(results, sortBy);
        }

        if (!cancelled) {
          setMovies(results);
          setTotalPages(data.totalPages ?? 1);
        }
      } catch (err) {
        console.log(err);
        if (!cancelled) {
          setError(
            debouncedQuery
              ? "Sorry, failed to search movies..."
              : "Sorry, failed to load movies....",
          );
          setMovies([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadMovies();
    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, page, genreId, sortBy]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setDebouncedQuery(searchQuery.trim());
    setPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setDebouncedQuery("");
    setPage(1);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search for movies"
        />
        {searchQuery ? (
          <button
            type="button"
            className="clear-button"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        ) : null}
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="filters">
        <label className="filter-field">
          Genre
          <select
            value={genreId}
            onChange={(e) => {
              setGenreId(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
        <label className="filter-field">
          Sort
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setPage(1);
            }}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <MovieSkeletonGrid />
      ) : movies.length === 0 ? (
        <div className="empty-results">
          <h2>No movies found.</h2>
          <p>
            Try another title, clear the search, or pick a different genre.
          </p>
        </div>
      ) : (
        <>
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}

export default Home;
