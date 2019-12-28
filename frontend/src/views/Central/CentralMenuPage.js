import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMenus as fetchMenusAction,
  fetchProducts as fetchProductsAction,
  fetchComponents as fetchComponentsAction,
} from 'reduxFiles/actions/menuActions';
import MenuTemplete from 'templates/MenuTemplete';

class CentralMenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // menus: [],
      // products: [],
      // components: [],
    };
    const { fetchMenus, fetchProducts, fetchComponents } = props;
    fetchMenus();
    fetchProducts();
    fetchComponents();
  }

  render() {
    return (
      <MenuTemplete>
        <h1>Menu page</h1>
      </MenuTemplete>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMenus: () => dispatch(fetchMenusAction()),
  fetchProducts: () => dispatch(fetchProductsAction()),
  fetchComponents: () => dispatch(fetchComponentsAction()),
});

export default connect(null, mapDispatchToProps)(CentralMenuPage);
