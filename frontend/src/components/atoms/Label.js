import styled from 'styled-components';

const Label = styled.h1`
  font-size: ${({ big }) => (big ? '2rem' : '2rem')};
  font-weight: 600;
`;

export default Label;
