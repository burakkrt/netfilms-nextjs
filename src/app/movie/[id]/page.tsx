import React from 'react';
import {notFound} from 'next/navigation';

import MovieContainer from '@/containers/movie';
import Movies from './../../../mocks/movies.json';

function MoviePage({params, searchParams}: any) {
  const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id);

  if (searchParams.error === 'true') {
    throw new Error('Something went wrong!');
  }

  if (movieDetail) {
    return <MovieContainer movie={movieDetail} />;
  } else notFound();
}

export default MoviePage;
