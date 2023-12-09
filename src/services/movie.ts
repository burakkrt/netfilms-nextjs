import {fetchOptions, API_URL_POPULAR} from './constants';
import {IPopularMovies} from './types';

export const getPopularMovies = async () => {
  const res: IPopularMovies = await (await fetch(API_URL_POPULAR, fetchOptions)).json();

  return res;
};
