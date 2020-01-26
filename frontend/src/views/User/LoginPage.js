import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  authenticate as authenticateAction,
  logout as logoutAction,
} from 'reduxFiles/actions/userActions';
import { Redirect, NavLink } from 'react-router-dom';
import Button from 'components/atoms/Button';
import inputCss from 'components/atoms/inputCss';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading';
import { routes } from 'routes';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Field)`
  ${inputCss}
  margin: 0 0 20px 0;
  height: 40px;
  width: 300px;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 30px 0;
`;

const LoginPage = ({ authenticate, userToken, home, logout }) => {
  if (userToken) {
    if (home.central != null) {
      return <Redirect to={routes.central} />;
    }
    if (home.worker != null && home.worker.manager) {
      return <Redirect to={`store/${home.worker.store_id}`} />;
    }
    return (
      <AuthTemplate>
        <StyledHeading>You donot have permission</StyledHeading>
        <Button as={NavLink} exact to="/" onClick={logout}>
          Logout
        </Button>
      </AuthTemplate>
    );
  }
  return (
    <AuthTemplate>
      <StyledHeading>Sign in</StyledHeading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={({ email, password }) => {
          authenticate(email, password);
        }}
      >
        {() => (
          <StyledForm>
            <StyledInput type="email" name="email" placeholder="Email" />
            <StyledInput type="password" name="password" placeholder="Password" />
            <Button type="submit">Submit</Button>
          </StyledForm>
        )}
      </Formik>
    </AuthTemplate>
  );
};

const mapStateToProps = state => {
  return {
    userToken: state.root.userToken,
    home: state.root.home,
  };
};

const mapDispatchToProps = dispatch => ({
  authenticate: (email, password) => dispatch(authenticateAction(email, password)),
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
