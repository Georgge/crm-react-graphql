import React, { Component } from 'react';

class EditClientForm extends Component {
  state = {
    client: this.props.client,
    emails: this.props.client.emails,
  }

  newField = () => {
    this.setState({
      emails: this.state.emails.concat([{ email: '' }]),
    });
  }

  readField = i => (e) => {
    const nuevoMail = this.state.emails.map((email, index) => {
      if (i !== index) return email;
      return { ...email, email: e.target.value };
    });
    this.setState({ emails: nuevoMail });
  }

  removeField = i => () => {
    this.setState({
      emails: this.state.emails.filter((s, index) => i !== index),
    });
  }


  render() {
    const {
      name, lastName, company, type
    } = this.state.client;
    const { emails } = this.state;

    return (
      <form className="col-md-8 m-3">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue={name}
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
              defaultValue={lastName}
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
          <div className="form-group col-md-12">
            <label>Company</label>
            <input
              type="text"
              className="form-control"
              defaultValue={company}
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

          {emails.map((input, index) => (
            <div key={index} className="form-group col-md-12">
              <label>
                Email {index + 1} :
              </label>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="email"
                  className="form-control"
                  onChange={this.readField(index)}
                  defaultValue={input.email}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={this.removeField(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="form-group d-flex justify-content-center col-md-12">
            <button
              onClick={this.newField}
              type="button"
              className="btn btn-warning"
            >
              Add Email
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Membership</label>
            <select
              className="form-control"
              value={type}
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
        <button type="submit" className="btn btn-success float-right">Save Changes</button>
      </form>
    );
  }
}

export default EditClientForm;
