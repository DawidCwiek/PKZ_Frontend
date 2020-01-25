import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreTemplate from 'templates/StoreTemplate';
import Chart from 'components/organisms/Chart';
import EmployeesList from 'components/organisms/EmployeesList';
import { fetchStoreEmployees as fetchStoreEmployeesAction } from 'reduxFiles/actions/centralActions';

class CentralStorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeId: props.match.params.storeId,
      employees: [],
    };
    const { fetchStoreEmployees } = props;
    fetchStoreEmployees(props.match.params.storeId);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () => this.setState({ employees: this.props.storeEmployees });

  render() {
    return (
      <>
        <StoreTemplate storeId={this.props.match.params.storeId}>
          <h1>Shop page</h1>
          <Chart storeId={this.state.storeId} />
          <EmployeesList data={this.state.employees} title="Store" storeId={this.state.storeId} />
        </StoreTemplate>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchStoreEmployees: storeId => dispatch(fetchStoreEmployeesAction(storeId)),
});

const mapStateToProps = state => {
  const { storeEmployees } = state.root;
  return { storeEmployees };
};

export default connect(mapStateToProps, mapDispatchToProps)(CentralStorePage);
