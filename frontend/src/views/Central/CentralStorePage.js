import React from 'react';
import { connect } from 'react-redux';
import StoreTemplate from 'templates/StoreTemplate';

const CentralStorePage = () => <StoreTemplate />;

export default connect(null)(CentralStorePage);
