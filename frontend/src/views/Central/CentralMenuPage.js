import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMenus as fetchMenusAction,
  fetchProducts as fetchProductsAction,
  fetchComponents as fetchComponentsAction,
} from 'reduxFiles/actions/menuActions';
import MenuTemplete from 'templates/MenuTemplete';
import MenuPageList from 'components/organisms/MenuPageList';

class CentralMenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      products: [],
      components: [],
    };
    const { fetchMenus, fetchProducts, fetchComponents } = props;
    fetchMenus();
    fetchProducts();
    fetchComponents();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () =>
    this.setState({
      menus: this.props.menus,
      products: this.props.products,
      components: this.props.components,
    });

  render() {
    return (
      <MenuTemplete>
        <h1>Menu page</h1>
        <h5>
          <MenuPageList data={this.state.menus} />
          <MenuPageList data={this.state.products} />
          <MenuPageList data={this.state.components} />
        </h5>
      </MenuTemplete>
    );
  }
}

const mapStateToProps = state => {
  const { menus, components, products } = state.root;
  return { menus, components, products };
};

const mapDispatchToProps = dispatch => ({
  fetchMenus: () => dispatch(fetchMenusAction()),
  fetchProducts: () => dispatch(fetchProductsAction()),
  fetchComponents: () => dispatch(fetchComponentsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CentralMenuPage);
