import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import kebabIcon from 'assets/icons/kebab.svg';
import logoutIcon from 'assets/icons/logout.svg';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { logout as logoutAction } from 'reduxFiles/actions/userActions';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: #ffd829;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${kebabIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ children, logout }) => (
  <StyledWrapper>
    <StyledLogoLink to="/central" />
    {children}
    <StyledLogoutButton as={NavLink} exact to="/" icon={logoutIcon} onClick={logout} />
  </StyledWrapper>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Sidebar);
