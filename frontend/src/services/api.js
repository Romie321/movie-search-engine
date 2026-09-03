const API_KEY = "edded60ab8c03cfc342e282d61a210be";
const BASE_URL = "https://api.themoviedb.org/3";

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }
  return response.json();
}

function pagedResults(data) {
  return {
    results: data.results ?? [],
    page: data.page ?? 1,
    totalPages: Math.min(data.total_pages ?? 1, 500),
  };
}

export const getPopularMovies = async (page = 1) => {
  const data = await getJson(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
  );
  return pagedResults(data);
};

export const searchMovies = async (query, page = 1) => {
  const data = await getJson(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`,
  );
  return pagedResults(data);
};

export const discoverMovies = async ({
  page = 1,
  genreId = "",
  sortBy = "popularity.desc",
} = {}) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: String(page),
    sort_by: sortBy,
  });
  if (genreId) params.set("with_genres", genreId);
  const data = await getJson(`${BASE_URL}/discover/movie?${params}`);
  return pagedResults(data);
};

export const getMovieDetails = async (id) => {
  return getJson(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const getGenres = async () => {
  const data = await getJson(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return data.genres ?? [];
};
