const API_KEY = "3079c265fc993d70d00b8bf669642108";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopulerMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/populer?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};