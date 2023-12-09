import {IMovie} from '@app/global/types';

export interface IPopularMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface ITopRatedMovies extends IPopularMovies {}

export interface IGenreMovies {
  genres: {id: number; name: string}[];
}
export interface IGenreFilterMovies extends IPopularMovies {}
