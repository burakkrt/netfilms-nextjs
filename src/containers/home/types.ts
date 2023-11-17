import {IMovie} from '@app/global/types';

export interface ISelectedCategory {
  id: string;
  movies: IMovie[] | [];
}

export interface IHomeContainersProps {
  selectedCategory: ISelectedCategory;
}
