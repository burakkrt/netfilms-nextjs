import React from 'react';
import FeaturedMovie from '@/components/featured-movie';
import Movies from './../../mocks/movies.json';
import Genres from './../../mocks/genres.json';
import Categories from '@/components/categories/Categories';

const HomeContainers = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
    </div>
  );
};

export default HomeContainers;
