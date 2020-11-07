import React from 'react';
import { withRouter } from 'react-router-dom';

import { default as CollectionItem } from '../CollectionItem/CollectionItem.container';

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './CollectionPreview.styles';

const CollectionPreview = ({ title, items, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
