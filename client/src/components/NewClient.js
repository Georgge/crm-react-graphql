import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { NEW_CLIENT } from '../mutations';

class NewClient extends Component {
  state = {
    client: {
      name: '',
      lastName: '',
      company: '',
      email: '',
      type: '',
    },
  }

  render() {
    return (
      <Fragment>
        <h2 className="text-center"> New Client</h2>
        <div className="row  justify-content-center">
          <Mutation mutation={NEW_CLIENT}>
            {createClient => (
              <form
                className="col-md-8 m-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const {
                    name, lastName, company, email, type,
                  } = this.state.client;

                  const input = {
                    name,
                    lastName,
                    company,
                    email,
                    type,
                  };

                  createClient({
                    variables: { input },
                  });
                }}
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e) => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            name: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={(e) => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            lastName: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Company</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company"
                      onChange={(e) => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            company: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            email: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Subscription Type</label>
                    <select
                      className="form-control"
                      onChange={(e) => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            type: e.target.value,
                          },
                        });
                      }}
                    >
                      <option value="">Select</option>
                      <option value="PREMIUM">PREMIUM</option>
                      <option value="BASIC">BASIC</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-success float-right">Save</button>
              </form>
            )}
          </Mutation>
        </div>
      </Fragment>
    );
  }
}

export default NewClient;
