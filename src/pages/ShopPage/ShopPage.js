import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../components/Spinner/Spinner';

import { ShopPageContainer } from './ShopPage.styles';

const CollectionsOverview = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverview.container')
);
const CollectionPage = lazy(() =>
  import('../CollectionPage/CollectionPage.container')
);

const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

export default ShopPage;
