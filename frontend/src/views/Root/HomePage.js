import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SignInButton = styled(NavLink)`
  width: 100px;
  height: 100px;
`;
const HomePage = () => (
  <>
    <h1>Home page</h1>
    <SignInButton as={NavLink} exact to="/login ">
      Sign in
    </SignInButton>
  </>
);

export default HomePage;
