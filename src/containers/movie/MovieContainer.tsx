import React from 'react';
import {IMovieContainerProps} from './types';
import FeaturedMovie from '@/components/featured-movie/FeaturedMovie';

const MovieContainer: React.FC<IMovieContainerProps> = ({movie}) => {
  return <FeaturedMovie movie={movie} isCompact={false} />;
};

export default MovieContainer;
