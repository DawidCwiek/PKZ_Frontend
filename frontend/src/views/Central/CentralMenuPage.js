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
      central: props.match.params.centralId,
    };
    const { fetchMenus, fetchProducts, fetchComponents } = props;
    fetchMenus(this.state.central);
    fetchProducts(this.state.central);
    fetchComponents(this.state.central);
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
      <MenuTemplete centralId={this.state.central}>
        <h1>Menu page</h1>
        <h5>
          <MenuPageList data={this.state.menus} title="Menus" />
          <MenuPageList data={this.state.products} title="Products" />
          <MenuPageList data={this.state.components} title="Components" />
        </h5>
      </MenuTemplete>
    );
  }
}

const mapStateToProps = state => {
  const { menus, components, products, central } = state.root;
  return { menus, components, products, central };
};

const mapDispatchToProps = dispatch => ({
  fetchMenus: centralId => dispatch(fetchMenusAction(centralId)),
  fetchProducts: centralId => dispatch(fetchProductsAction(centralId)),
  fetchComponents: centralId => dispatch(fetchComponentsAction(centralId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CentralMenuPage);
