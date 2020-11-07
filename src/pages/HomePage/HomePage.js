import React from 'react';

import { default as Directory } from '../../components/Directory/Directory.container';

import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
