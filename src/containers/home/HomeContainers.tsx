import React from 'react';
import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories/Categories';
import MoviesSection from '@/components/movies-section/MoviesSection';
import {IHomeContainersProps} from './types';

import {
  getPopularMovies,
  getTopRatedMovies,
  getGenreMovies,
  getGenreFilterMovies,
} from '@/services/movie';

const HomeContainers = async ({selectedCategoryId}: IHomeContainersProps) => {
  const [popularMovies, topRatedMovies, genreMovies, genreFilterMovies] =
    await Promise.all([
      getPopularMovies(),
      getTopRatedMovies(),
      getGenreMovies(),
      getGenreFilterMovies(selectedCategoryId),
    ]);

  return (
    <div>
      <FeaturedMovie movie={popularMovies?.results?.[5] || {}} />
      <Categories categories={genreMovies?.genres?.slice(0, 5) || []} />
      {selectedCategoryId !== 0 && genreFilterMovies.results.length > 0 && (
        <MoviesSection
          title={
            genreMovies.genres.find((genre) => genre.id === selectedCategoryId)?.name ||
            ''
          }
          movies={genreFilterMovies?.results?.slice(0, 14) || []}
        />
      )}
      <MoviesSection
        title="Popular Movies"
        movies={popularMovies?.results?.slice(0, 14) || []}
      />
      <MoviesSection
        title="Top Rated Movies"
        movies={topRatedMovies?.results?.slice(0, 14) || []}
      />
    </div>
  );
};

export default HomeContainers;
