import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ big }) => (big ? '4rem' : '2.4rem')};
  font-weight: 600;
`;

export default Heading;
