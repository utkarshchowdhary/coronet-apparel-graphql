import React from 'react';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './CartDropdown.styles';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </CartItemsContainer>
      {cartItems.length ? null : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
