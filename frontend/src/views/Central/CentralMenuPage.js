import React from 'react';
import { connect } from 'react-redux';
import MenuTemplete from 'templates/MenuTemplete';

const CentralMenuPage = () => (
  <MenuTemplete>
    <h1>Menu page</h1>
  </MenuTemplete>
);

export default connect(null)(CentralMenuPage);
