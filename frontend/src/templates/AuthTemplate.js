import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import kebabIcon from 'assets/icons/kebab.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffd829;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAuthCard = styled.div`
  width: 375px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 0 0 10px;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo>
      <Heading big>Zahir</Heading>
      <StyledImg src={kebabIcon} alt="kebabIcon" />
    </StyledLogo>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

export default AuthTemplate;
