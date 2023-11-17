import React from 'react';
import CategoriesLoading from '@/components/categories/loading';
import FeatureMovieLoading from '@/components/featured-movie/loading';
import MovieSectionLoading from '@components/movies-section/loading';

function loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <MovieSectionLoading key={index} />
        ))}
    </div>
  );
}

export default loading;
