import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AboutUsTemplate from 'templates/AboutUsTemplate';
import Heading from 'components/atoms/Heading';

const StyledHeading = styled(Heading)`
  margin: 10px 0 0 0;
`;

const AboutUs = () => (
  <AboutUsTemplate>
    <StyledHeading>About us:</StyledHeading>
  </AboutUsTemplate>
);

export default connect(null)(AboutUs);
