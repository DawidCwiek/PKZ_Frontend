import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar';
import CreateUser from 'components/organisms/CreateUser';
import CreateStore from 'components/organisms/CreateStore';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const CentralTemplate = ({ children, centralId }) => (
  <StyledWrapper>
    <Sidebar>
      <CreateUser centralId={centralId} />
      <CreateStore centralId={centralId} />
    </Sidebar>
    {children}
  </StyledWrapper>
);

CentralTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default CentralTemplate;
