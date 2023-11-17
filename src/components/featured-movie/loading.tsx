import React from 'react';
import Loading from '@components/loading';
import styles from './styles.module.css';

function loading() {
  return (
    <div style={{height: 178}} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}

export default loading;
