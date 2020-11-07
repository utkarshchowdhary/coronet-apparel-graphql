import React from 'react';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './CartIcon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
