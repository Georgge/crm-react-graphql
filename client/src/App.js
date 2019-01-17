import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// Components imports
import Header from './components/Header';
import Clients from './components/Clients';

console.disableYellowBox = ['Remote debugger'];

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: (error) => {
    console.log(`Ups! ${error}`);
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
        <Clients />
      </ApolloProvider>
    );
  }
}

export default App;
