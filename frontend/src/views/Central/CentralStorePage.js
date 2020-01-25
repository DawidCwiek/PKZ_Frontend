import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreTemplate from 'templates/StoreTemplate';
import Chart from 'components/organisms/Chart';
import EmployeesList from 'components/organisms/EmployeesList';
import OrdersList from 'components/organisms/OrdersList';
import {
  fetchStoreEmployees as fetchStoreEmployeesAction,
  fetchStoreOrders as fetchStoreOrdersAction,
} from 'reduxFiles/actions/centralActions';

class CentralStorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeId: props.match.params.storeId,
      employees: [],
      orders: [],
    };
    const { fetchStoreEmployees, fetchStoreOrders } = props;
    fetchStoreEmployees(props.match.params.storeId);
    fetchStoreOrders(props.match.params.storeId);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () =>
    this.setState({ employees: this.props.storeEmployees, orders: this.props.orders });

  render() {
    return (
      <>
        <StoreTemplate storeId={this.props.match.params.storeId}>
          <h1>Shop page</h1>
          <Chart storeId={this.state.storeId} />
          <EmployeesList data={this.state.employees} title="Store" storeId={this.state.storeId} />
          <OrdersList data={this.state.orders} />
        </StoreTemplate>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchStoreEmployees: storeId => dispatch(fetchStoreEmployeesAction(storeId)),
  fetchStoreOrders: storeId => dispatch(fetchStoreOrdersAction(storeId)),
});

const mapStateToProps = state => {
  const { storeEmployees, orders } = state.root;
  return { storeEmployees, orders };
};

export default connect(mapStateToProps, mapDispatchToProps)(CentralStorePage);
