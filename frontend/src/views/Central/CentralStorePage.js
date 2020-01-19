import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreTemplate from 'templates/StoreTemplate';
import Chart from 'components/organisms/Chart';

class CentralStorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeId: props.match.params.centralId,
    };
  }

  render() {
    return (
      <>
        <StoreTemplate storeId={this.state.storeId}>
          <h1>Shop page</h1>
          <Chart storeId={this.state.storeId} />
        </StoreTemplate>
      </>
    );
  }
}

export default connect(null)(CentralStorePage);
