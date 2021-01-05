import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutPage from './CheckoutPage';

const GET_CART_ITEMS_AND_CART_TOTAL_AND_CURRENT_USER = gql`
  {
    cartItems @client
    cartTotal @client
    currentUser @client
  }
`;

const CheckoutPageContainer = () => (
  <Query query={GET_CART_ITEMS_AND_CART_TOTAL_AND_CURRENT_USER}>
    {({ data: { cartItems, cartTotal, currentUser } }) => (
      <CheckoutPage
        cartItems={cartItems}
        total={cartTotal}
        currentUser={currentUser}
      />
    )}
  </Query>
);

export default CheckoutPageContainer;
