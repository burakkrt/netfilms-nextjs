import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';
import {IMoviesSectionProps} from './types';

function MoviesSection({title, movies}: IMoviesSectionProps) {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                style={{objectFit: 'cover'}}
                objectPosition="center"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSection;
