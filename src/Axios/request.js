const API_KEY = 'b63bbf8f30bba2efe74be42ddbe4f175';
export const tmdbImg = 'https://image.tmdb.org/t/p/original';

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}& with_networks-213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres-10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres-99`,
}

export default requests;


