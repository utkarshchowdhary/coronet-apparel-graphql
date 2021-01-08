import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import StripeCheckoutButton from './StripeCheckoutButton';

const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart @client
  }
`;

const StripeCheckoutButtonContainer = (props) => {
  return (
    <Mutation mutation={CLEAR_CART}>
      {(clearCart) => <StripeCheckoutButton {...props} clearCart={clearCart} />}
    </Mutation>
  );
};

export default StripeCheckoutButtonContainer;
