import React from 'react';
import {notFound} from 'next/navigation';

import MovieContainer from '@/containers/movie';

import {getMovieDetail} from '@services/movie';

async function MoviePage({params, searchParams}: any) {
  const movieDetail = await getMovieDetail(params.id);

  if (searchParams.error === 'true') {
    throw new Error('Something went wrong!');
  }

  console.log(movieDetail);

  if (movieDetail.title) {
    return <MovieContainer movie={movieDetail} />;
  } else notFound();
}

export default MoviePage;
