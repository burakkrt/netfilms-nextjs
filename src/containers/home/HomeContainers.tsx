import React from 'react';
import FeaturedMovie from '@/components/featured-movie';
import Movies from './../../mocks/movies.json';
import Genres from './../../mocks/genres.json';
import Categories from '@/components/categories/Categories';
import MoviesSection from '@/components/movies-section/MoviesSection';
import {IHomeContainersProps} from './types';

import {getPopularMovies} from '@/services/movie';

const HomeContainers = async ({selectedCategory}: IHomeContainersProps) => {
  const popularMovies = await getPopularMovies();

  const selectedGenre = Genres.genres.find(
    (genre) => genre.id.toString() === selectedCategory.id
  );

  return (
    <div>
      <FeaturedMovie movie={Movies.results[1]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={selectedGenre?.name || ''}
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Populer Films" movies={popularMovies.results.slice(0, 7)} />
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 13)} />
    </div>
  );
};

export default HomeContainers;
