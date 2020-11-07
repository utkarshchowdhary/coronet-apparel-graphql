import React from 'react';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  AddButton,
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <span>{name}</span>
        <span>{price}</span>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
