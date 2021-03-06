import React, { Component } from 'react';
import CentralTemplate from 'templates/CentralTemplate';
import Chart from 'components/organisms/Chart';
import StoreList from 'components/organisms/StoreList';
import EmployeesList from 'components/organisms/EmployeesList';
import { connect } from 'react-redux';
import { fetchCentral as fetchCentralAction } from 'reduxFiles/actions/centralActions';

class CentralPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      central: props.central,
    };
    const { fetchCentral } = props;
    fetchCentral();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () => this.setState({ central: this.props.central });

  render() {
    return (
      <CentralTemplate centralId={this.state.central.id}>
        <h1>Central Page</h1>
        <Chart central title="Average turnover throughout the structure" />
        {this.state.central.stores.length > 0 ? (
          <StoreList data={this.state.central.stores} />
        ) : null}
        <EmployeesList
          data={this.state.central.users}
          title="Central"
          centralId={this.props.central.id}
        />
      </CentralTemplate>
    );
  }
}

const mapStateToProps = state => {
  const { central } = state.root;
  return { central };
};

const mapDispatchToProps = dispatch => ({
  fetchCentral: () => dispatch(fetchCentralAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CentralPage);
