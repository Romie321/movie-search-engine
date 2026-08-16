const API_KEY = "edded60ab8c03cfc342e282d61a210be";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = aysnc () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
}