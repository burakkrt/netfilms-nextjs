import React from 'react';
import {notFound} from 'next/navigation';

import MovieContainer from '@/containers/movie';

import {getMovieDetail} from '@services/movie';

async function MoviePage({params}: any) {
  const movieDetail = await getMovieDetail(params.id);

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
