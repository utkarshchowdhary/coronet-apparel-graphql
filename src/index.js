import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.querySelector('#root')
);
