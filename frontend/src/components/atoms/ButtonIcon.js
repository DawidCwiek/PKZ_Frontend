import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: #ffd829;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
`;

export default ButtonIcon;
