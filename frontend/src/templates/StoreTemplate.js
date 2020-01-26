import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import centralIcon from 'assets/icons/central.svg';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Sidebar from 'components/organisms/Sidebar';
import CreateUser from 'components/organisms/CreateUser';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const StoreTemplate = ({ children, storeId, storeMod }) => (
  <StyledWrapper>
    <Sidebar>
      {storeMod ? null : <ButtonIcon as={NavLink} exact to="/central" icon={centralIcon} />}
      <CreateUser storeId={storeId} />
    </Sidebar>
    {children}
  </StyledWrapper>
);

StoreTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default StoreTemplate;
