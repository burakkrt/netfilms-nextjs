'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaPlus} from 'react-icons/fa';
import {usePathname} from 'next/navigation';

import styles from './styles.module.css';
import {IFeaturedMovieProps} from './types';

function FeaturedMovie({movie, isCompact = true}: IFeaturedMovieProps) {
  const {poster_path, title, overview} = movie;
  const pathname = usePathname();

  return (
    <div className={styles.movieWrapper}>
      {pathname.startsWith('/movie') && (
        <div className="flex flex-row items-center gap-4">
          <Link href="/">Home</Link>
          <span className="font-bold">{'>'}</span>
          <span>{title}</span>
        </div>
      )}

      <h1 className={styles.movieTitle}>{title}</h1>
      <p className={`${styles.overview} ${isCompact ? styles.shortOverview : ''}`}>
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title ? title : 'Movie Poster'}
          fill
        />
      </div>
    </div>
  );
}

export default FeaturedMovie;
