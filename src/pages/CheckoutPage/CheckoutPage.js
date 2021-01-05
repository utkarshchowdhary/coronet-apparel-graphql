import React from 'react';

import { default as CheckoutItem } from '../../components/CheckoutItem/CheckoutItem.container';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  RemindContainer,
} from './CheckoutPage.styles';

const CheckoutPage = ({ cartItems, total, currentUser }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: Any future date - CVV- Any 3 digit number
      </WarningContainer>
      {!currentUser && (
        <RemindContainer>*Please Login before checkout*</RemindContainer>
      )}
      {currentUser && total > 0 && <StripeCheckoutButton price={total} />}
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
