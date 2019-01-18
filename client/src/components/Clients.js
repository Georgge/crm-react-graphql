import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { CLIENTS_QUERY } from '../queries';

const Contacts = () => (
  <Query query={CLIENTS_QUERY} pollInterval={1000}>
    {({
      loading, error, data, startPolling, stopPolling,
    }) => {
      if (loading) return 'Loading...';
      if (error) return `Error: ${error.message}`;

      return (
        <Fragment>
          <h2 className="text-center">Clients</h2>
          <ul className="list-group  mt-4">
            {data.getClients.map(item => (
              <li className="list-group-item" key={item.id}>
                <div className="row  justify-content-between  align-item-center">
                  <div className="col-md-8  d-flex  justify-content-between  align-items-center">
                    {item.name}
                    {item.lastName}
                  </div>
                  <div className="col-md-4  d-flex  justify-content-end">
                    <Link
                      className="btn  btn-success  d-block  d-md-inline-block"
                      to={`/client/edit/${item.id}`}
                    >
                      Edit client
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    }}
  </Query>
);

export default Contacts;
