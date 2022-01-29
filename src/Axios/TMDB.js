import axios from "axios";

// use baseURL to make request to the the moviedb database;
const tmdb = axios.create( { baseURL: 'https://api.themoviedb.org/3' } );

export default tmdb;