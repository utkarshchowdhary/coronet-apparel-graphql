import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './CollectionsOverview';
import Spinner from '../Spinner/Spinner';

const GET_COLLECTIONS_AND_ITEMS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => {
  return (
    <Query query={GET_COLLECTIONS_AND_ITEMS}>
      {({ loading, data }) => {
        if (loading) return <Spinner />;
        return <CollectionsOverview collections={data.collections} />;
      }}
    </Query>
  );
};

export default CollectionsOverviewContainer;
