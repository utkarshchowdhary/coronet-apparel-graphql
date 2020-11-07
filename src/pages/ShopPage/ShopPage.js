import React from 'react';
import { Route } from 'react-router-dom';

import { default as CollectionsOverview } from '../../components/CollectionsOverview/CollectionsOverview.container';
import { default as CollectionPage } from '../CollectionPage/CollectionPage.container';

import { ShopPageContainer } from './ShopPage.styles';

const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default ShopPage;
