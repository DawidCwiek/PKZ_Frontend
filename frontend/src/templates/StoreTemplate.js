import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar';
import CreateUser from 'components/organisms/CreateUser';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const StoreTemplate = ({ children, storeId }) => (
  <StyledWrapper>
    <Sidebar>
      <CreateUser storeId={storeId} />
    </Sidebar>
    {children}
  </StyledWrapper>
);

StoreTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default StoreTemplate;
