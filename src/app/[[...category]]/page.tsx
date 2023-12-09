import React from 'react';
import HomeContainers from '@containers/home';
import Movies from './../../mocks/movies.json';
import {getPopularMovies} from '@services/movie';

import {IHomePageProps} from './types';

async function HomePage({params}: IHomePageProps) {
  const popularMovies = await getPopularMovies();

  let selectedCategory = false;

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  const filterCategoryMovies = Movies.results.filter((movie) =>
    movie.genre_ids.includes(+params.category?.[0])
  );

  return (
    <HomeContainers
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? filterCategoryMovies.slice(0, 6) : [],
      }}
    />
  );
}

export default HomePage;
