import { css } from 'styled-components';

const inputCss = css`
  padding: 15px 30px;
  font-size: '1.6rem';
  font-weight: 300;
  background-color: #f5f5f5;
  border: none;
  border-radius: 50px;
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #b3b3b3;
  }
`;
export default inputCss;
