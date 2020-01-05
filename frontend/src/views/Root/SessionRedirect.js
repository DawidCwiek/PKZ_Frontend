import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SessionRedirect = ({ children, userToken }) => {
  if (!userToken) {
    return <Redirect to="/" />;
  }
  return children;
};

const mapStateToProps = state => {
  return {
    userToken: state.root.userToken,
  };
};

export default connect(mapStateToProps, null)(SessionRedirect);
