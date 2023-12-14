import {IMovie, IMovieDetail} from '@app/global/types';

export interface IFeaturedMovieProps {
  movie: IMovie | IMovieDetail | {};
  isCompact?: boolean;
}
