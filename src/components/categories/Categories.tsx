'use client';

import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';
import {Genre, ICategoriesProps} from './types';

function Categories({categories}: ICategoriesProps) {
  return (
    <div className={styles.categories}>
      {categories.map((category: Genre) => (
        <Link key={category.id} className={styles.category} href={`/${category.id}`}>
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
