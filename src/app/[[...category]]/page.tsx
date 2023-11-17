import React from 'react';
import HomeContainers from '@containers/home';
import Movies from './../../mocks/movies.json';

import {IHomePageProps} from './types';

export default function HomePage({params}: IHomePageProps) {
  let selectedCategory = false;

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <HomeContainers
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}
