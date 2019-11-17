import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import contactIcon from 'assets/icons/contact.svg';
import callIcon from 'assets/icons/call-center.svg';
import emailIcon from 'assets/icons/email.svg';
import placeIcon from 'assets/icons/school.svg';
import rotate from 'components/atoms/rotate';
import Map from 'components/atoms/MapContainer';
import Label from 'components/atoms/Label';

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

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 0 0 10px;
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const StyledLabel = styled(Label)`
  margin: 20px 500px 20px 0;
  text-align: left;
`;

const ContactTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo>
      <Heading big>Zahir</Heading>
      <Rotate>
        <StyledImg src={contactIcon} alt="contactIcon" />
      </Rotate>
    </StyledLogo>
    <StyledContact>
      {children}
      <StyledLabel>
        <StyledImg src={callIcon} alt="callIcon" /> Phone number: +48 321 123 342
      </StyledLabel>
      <StyledLabel>
        <StyledImg src={emailIcon} alt="emailIcon" /> E-Mail: www.FoodCenter.com
      </StyledLabel>
      <StyledLabel>
        <StyledImg src={placeIcon} alt="placeIcon" /> Our location: Łódź, Al. Politechniki 1234
      </StyledLabel>
    </StyledContact>
    <Map />
  </StyledWrapper>
);

export default ContactTemplate;
