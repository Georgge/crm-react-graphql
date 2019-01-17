import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components imports
import Header from './components/Header';
import Clients from './components/Clients';
import EditClient from './components/EditClient';
import NewClient from './components/NewClient';

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
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clients} />
                <Route exact path="/client/new" component={NewClient} />
                <Route exact path="/client/edit/:id" component={EditClient} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
