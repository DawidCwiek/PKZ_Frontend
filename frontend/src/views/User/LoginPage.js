import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'reduxFiles/actions/userActions';
import { Redirect } from 'react-router-dom';
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

const LoginPage = ({ authenticate, userToken }) => {
  if (userToken) {
    return <Redirect to={routes.central} />;
  }
  return (
    <AuthTemplate>
      <StyledHeading>Sing in</StyledHeading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={({ email, password }) => {
          authenticate(email, password);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledInput type="email" name="email" placeholder="Email" />
            <StyledInput type="password" name="password" placeholder="Password" />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthTemplate>
  );
};

const mapStateToProps = state => {
  return {
    userToken: state.userToken,
  };
};

const mapDispatchToProps = dispatch => ({
  authenticate: (email, password) => dispatch(authenticateAction(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
