import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar';
import CreateUser from 'components/organisms/CreateUser';
import CreateStore from 'components/organisms/CreateStore';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { NavLink } from 'react-router-dom';
import menuIcon from 'assets/icons/menu.svg';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const CentralTemplate = ({ children, centralId }) => (
  <StyledWrapper>
    <Sidebar>
      <CreateUser centralId={centralId} />
      <CreateStore centralId={centralId} />
      <ButtonIcon as={NavLink} exact to={`/central/${centralId}/menu/`} icon={menuIcon} />
    </Sidebar>
    {children}
  </StyledWrapper>
);

CentralTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default CentralTemplate;
