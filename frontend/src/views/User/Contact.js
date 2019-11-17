import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ContactTemplate from 'templates/ContactTemplate';
import Heading from 'components/atoms/Heading';

const StyledHeading = styled(Heading)`
  margin: 0 500px 0px 0;
`;

const Contact = () => (
  <ContactTemplate>
    <StyledHeading>Some ways to contact with us:</StyledHeading>
  </ContactTemplate>
);

export default connect(null)(Contact);
