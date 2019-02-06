import React, { Component } from 'react';

export default class Pager extends Component {
  state = {
    pager: {
      pages: Math.ceil(Number(this.props.totalClients) / this.props.limit),
    }
  }

  render() {
    const { current } = this.props;
    const btnPrevious = (current > 1) ? <button type="button" className="btn btn-success mr-2">Previous</button> : '';
    const { pages } = this.state.pager;
    const btnNext = (current !== pages) ? <button type="button" className="btn btn-success">Next</button> : '';
    return (
      <div className="mt-5  d-flex  justify-content-center">
        {btnPrevious}
        {btnNext}
      </div>
    );
  }
}
