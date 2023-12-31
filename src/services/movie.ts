import {
  fetchOptions,
  API_URL_POPULAR,
  API_URL_TOP_RATED,
  API_URL_GENRES,
  API_URL_GENRES_FILTER,
  API_URL_MOVIE_DETAIL,
} from './constants';
import {IPopularMovies, ITopRatedMovies, IGenreMovies, IGenreFilterMovies} from './types';
import {IMovieDetail} from '@app/global/types';

export const getPopularMovies = async () => {
  try {
    const res: IPopularMovies = await (await fetch(API_URL_POPULAR, fetchOptions)).json();
    if (res?.success && !res.success) throw new Error();
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getTopRatedMovies = async () => {
  const res: ITopRatedMovies = await (
    await fetch(API_URL_TOP_RATED, fetchOptions)
  ).json();

  return res;
};

export const getGenreMovies = async () => {
  const res: IGenreMovies = await (await fetch(API_URL_GENRES, fetchOptions)).json();

  return res;
};

export const getGenreFilterMovies = async (genreId: number) => {
  const res: IGenreFilterMovies = await (
    await fetch(`${API_URL_GENRES_FILTER}&with_genres=${genreId}`, fetchOptions)
  ).json();

  return res;
};

export const getMovieDetail = async (movieId: number) => {
  try {
    const res: IMovieDetail = await (
      await fetch(`${API_URL_MOVIE_DETAIL}/${movieId}`, fetchOptions)
    ).json();
    if (!res.title) {
      throw new Error();
    }

    return res;
  } catch (error) {
    throw new Error();
  }
};
