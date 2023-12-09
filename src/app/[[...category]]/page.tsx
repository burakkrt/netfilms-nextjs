import React from 'react';
import HomeContainers from '@containers/home';

import {IHomePageProps} from './types';

function HomePage({params}: IHomePageProps) {
  return <HomeContainers selectedCategoryId={+params?.category || 0} />;
}

export default HomePage;
