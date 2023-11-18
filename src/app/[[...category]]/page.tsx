import React from 'react';
import HomeContainers from '@containers/home';
import Movies from './../../mocks/movies.json';

import {IHomePageProps} from './types';

function HomePage({params}: IHomePageProps) {
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
