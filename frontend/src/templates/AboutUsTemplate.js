import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import rotate from 'components/atoms/rotate';
import peopleIcon from 'assets/icons/us.svg';
import food1Img from 'assets/imgs/food1.jpg';
import food2Img from 'assets/imgs/food2.jpg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffd829;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledContact = styled.div`
  width: 1000px;
  height: 300px;
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

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 0 0 10px;
`;
const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 50px 10px 0 0;
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AboutUsTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo>
      <Heading big>Zahir</Heading>
      <Rotate>
        <StyledIcon src={peopleIcon} alt="peopleIcon" />
      </Rotate>
    </StyledLogo>
    <StyledContact>
      {children}
      <StyledContainer>
        <StyledImg src={food1Img} alt="food1Img" /> <StyledImg src={food2Img} alt="food2Img" />
      </StyledContainer>
    </StyledContact>
  </StyledWrapper>
);

export default AboutUsTemplate;
