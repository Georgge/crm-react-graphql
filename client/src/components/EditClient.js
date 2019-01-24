import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';

import { CLIENT_QUERY } from '../queries';

class EditClient extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <h2 className="text-center">Editing Client</h2>
        <Query query={CLIENT_QUERY} variables={{id}}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            console.log(data);
          }}
        </Query>
      </Fragment>
    );
  }
}

export default EditClient;
