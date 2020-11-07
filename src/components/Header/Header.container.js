import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './Header';

const GET_CART_HIDDEN_AND_CURRENT_USER = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderContainer = () => {
  return (
    <Query query={GET_CART_HIDDEN_AND_CURRENT_USER}>
      {({ data: { cartHidden, currentUser } }) => (
        <Header hidden={cartHidden} currentUser={currentUser} />
      )}
    </Query>
  );
};

export default HeaderContainer;
