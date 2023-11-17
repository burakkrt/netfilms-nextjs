import React from 'react';
import {ISkeletonProps} from './types';
import styles from './styled.module.css';

const Skeleton: React.FC<ISkeletonProps> = ({width, height}) => {
  return <div className={styles.skeleton} style={{width: width, height: height}}></div>;
};

export default Skeleton;
