import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import { CLIENTS_QUERY } from '../queries';
import { DELETE_CLIENT } from '../mutations';

import Pager from './Pager';

class Clients extends Component {
  state = {
    pager: {
      offset: 0,
      current: 1,
    },
  }

  render() {
    return (
      <Query query={CLIENTS_QUERY} pollInterval={1000}>
        {({
          loading, error, data, startPolling, stopPolling,
        }) => {
          if (loading) return 'Loading...';
          if (error) return `Error: ${error.message}`;
          console.log(data);

          return (
            <Fragment>
              <h2 className="text-center">Clients</h2>
              <ul className="list-group  mt-4">
                {data.getClients.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <div className="row  justify-content-between  align-item-center">
                      <div className="col-md-8  d-flex  justify-content-between  align-items-center">
                        {`${item.name} - ${item.lastName}`}
                      </div>
                      <div className="col-md-4  d-flex  justify-content-end">
                        <Mutation mutation={DELETE_CLIENT}>
                          {deleteClient => (
                            <button
                              type="button"
                              className="btn  btn-danger  d-block  d-md-inline-block  mr-2"
                              onClick={() => {
                                const { id } = item;
                                if (window.confirm(
                                  `Are you sure that want to delete ${item.name} ${item.lastName}`)
                                ) {
                                  deleteClient({
                                    variables: {
                                      id,
                                    },
                                  });
                                }
                              }}
                            >
                              Delete
                            </button>
                          )}
                        </Mutation>

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
              <Pager
                current={this.state.pager.current}
                totalClients={data.totalClients}
              />
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Clients;
