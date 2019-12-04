import React, { Component } from 'react';
import CentralTemplate from 'templates/CentralTemplate';
import Chart from 'components/organisms/Chart';
import StoreList from 'components/organisms/StoreList';
import CreateUser from 'components/organisms/CreateUser';
import { connect } from 'react-redux';
import { fetchCentral as fetchCentralAction } from 'reduxFiles/actions/centralActions';

class CentralPage extends Component {
  componentDidMount() {
    const { fetchCentral } = this.props;
    fetchCentral();
  }

  render() {
    return (
      <CentralTemplate>
        <h1>Strona Centrali</h1>
        <Chart />
        <StoreList />
        <CreateUser />
      </CentralTemplate>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCentral: () => dispatch(fetchCentralAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CentralPage);
