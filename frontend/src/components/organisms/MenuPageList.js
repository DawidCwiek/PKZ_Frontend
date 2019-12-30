import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0 10px;
`;

const ColectionWrapper = styled.div`
  margin: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const Item = styled.div`
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;

  :nth-child(odd) {
    background-color: #fcfcfc;
  }
`;

const MenuPageList = ({ data = [], title = '' }) => {
  if (data.length < 1) {
    return (
      <Wrapper>
        <StyledHeading>{title}</StyledHeading>
        <ColectionWrapper>
          <Item>
            <h3>Nothing to display</h3>
          </Item>
        </ColectionWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <StyledHeading>{title}</StyledHeading>
      <ColectionWrapper>
        {data.map(el => (
          <Item key={el.name + el.id}>{el.name}</Item>
        ))}
      </ColectionWrapper>
    </Wrapper>
  );
};

export default MenuPageList;
