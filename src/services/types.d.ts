import {IMovie} from '@app/global/types';

export interface IPopularMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
