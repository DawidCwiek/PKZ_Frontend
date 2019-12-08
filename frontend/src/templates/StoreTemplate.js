import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const StoreTemplate = () => (
  <StyledWrapper>
    <Heading big>Zahir</Heading>
  </StyledWrapper>
);

export default StoreTemplate;
