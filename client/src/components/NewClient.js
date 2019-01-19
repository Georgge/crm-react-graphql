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
    error: false,
    emails: [],
  }

  newField = () => {
    this.setState({
      emails: this.state.emails.concat([{email: ''}]),
    });
  }

  removeField = (i) => {
    this.setState({
      emails: this.state.emails.filter((email, index) => i !== index),
    });
  }

  readField = (i, e) => {
    const newEmail = this.state.emails.map((email, index) => {
      if (i !== index) return email;
      return {
        ...email,
        email: e.target.value,
      };
    });

    this.setState({
      emails: newEmail,
    });
  }

  render() {
    const { error } = this.state;
    const response = (error)
      ? <p className="alert alert-danger p-3 text-center">Required fields</p>
      : '';
    return (
      <Fragment>
        <h2 className="text-center"> New Client</h2>
        { response }
        <div className="row  justify-content-center">
          <Mutation
            mutation={NEW_CLIENT}
            onCompleted={() => {
              this.props.history.push('/');
            }}
          >
            {createClient => (
              <form
                className="col-md-8 m-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const {
                    name, lastName, company, email, type,
                  } = this.state.client;

                  if (name === '' || email === '' || type === '') {
                    this.setState({
                      error: true,
                    });
                    return;
                  }

                  this.setState({
                    error: false,
                  });

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
                  {
                    this.state.emails.map((input, index) => (
                      <div key={index} className="form-group  col-md-12">
                        <label>Email {index + 1}:</label>
                        <div className="input-group">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            onChange={(e) => { this.readField(index, e); }}
                          />
                          <div className="input-group-append">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => { this.removeField(index) }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  <div className="form-group  d-flex  justify-content-center  col-md-12">
                    <button
                      type="button"
                      className="btn  btn-warning"
                      onClick={this.newField}
                    >
                      Add Email
                    </button>
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
