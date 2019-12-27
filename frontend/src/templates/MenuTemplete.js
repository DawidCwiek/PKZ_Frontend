import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { NavLink } from 'react-router-dom';
import centralIcon from 'assets/icons/central.svg';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const MenuTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar>
      <ButtonIcon as={NavLink} exact to="/central" icon={centralIcon} />
    </Sidebar>
    {children}
  </StyledWrapper>
);

MenuTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default MenuTemplate;
