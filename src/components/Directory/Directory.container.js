import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Directory from './Directory';
import Spinner from '../Spinner/Spinner';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      coverImage
    }
  }
`;

const DirectoryContainer = () => {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, data }) => {
        if (loading) return <Spinner />;
        return <Directory sections={data.collections} />;
      }}
    </Query>
  );
};

export default DirectoryContainer;
