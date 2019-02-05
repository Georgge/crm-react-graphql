import React, { Component } from 'react';

export default class Pager extends Component {
  state = {}

  render() {
    const { current } = this.props;
    const btnPrevious = (current > 1) ? <button type="button" className="btn btn-succes mr-2">Previous</button> : '';
    return (
      <div className="mt-5  d-flex  justify-content-cener">
        {btnPrevious}
      </div>
    );
  }
}
