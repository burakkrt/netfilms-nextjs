export const fetchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `${process.env.API_BEARER}`,
  },
};

export const API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular?&page=1';
