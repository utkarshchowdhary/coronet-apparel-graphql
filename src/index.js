import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { typeDefs, resolvers } from './graphql/resolvers';

import { default as data } from './graphql/initial-data';

import { default as App } from './components/App/App.container';

import './index.css';

const httpLink = createHttpLink({
  uri: 'https://coronet-apparel-prisma.herokuapp.com/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
});

client.writeData({
  data,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
);
