export const fetchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `${process.env.API_BEARER}`,
  },
};

export const API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular?&page=1';
export const API_URL_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?&page=1';
export const API_URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list';
export const API_URL_GENRES_FILTER =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc';
export const API_URL_MOVIE_DETAIL = 'https://api.themoviedb.org/3/movie';
