import React from 'react';
import { Query } from 'react-apollo';

import { CLIENTS_QUERY } from '../queries';

const Contacts = () => (
  <Query query={CLIENTS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error: ${error.message}`;

      return <h2 className="text-center">Clients List</h2>
    }}
  </Query>
);

export default Contacts;
