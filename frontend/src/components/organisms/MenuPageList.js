import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const ItemWrapper = styled.div`
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;

  :nth-child(odd) {
    background-color: #fcfcfc;
  }
`;

const MenuPageList = ({ data = [] }) => {
  if (data.length < 1) {
    return (
      <Wrapper>
        <ItemWrapper>
          <h3>Nothing to display</h3>
        </ItemWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {data.map(el => (
        <ItemWrapper key={el.name + el.id}>{el.name}</ItemWrapper>
      ))}
    </Wrapper>
  );
};

export default MenuPageList;
