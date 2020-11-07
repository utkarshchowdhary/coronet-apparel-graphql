import React from 'react';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
