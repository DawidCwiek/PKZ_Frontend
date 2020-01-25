import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Heading)`
  margin: 15px auto;
`;

const ColectionWrapper = styled.div`
  margin: 5px;
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
  display: flex;

  :nth-child(odd) {
    background-color: #fcfcfc;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 1.5rem;
  flex: 30%;
`;

const StyledPrice = styled(Heading)`
  font-size: 1.5rem;
  flex: 10%;
  display: inline-block;
`;

const StyledProductsTitle = styled(Heading)`
  font-size: 1.5rem;
`;

const StyledProductsWrapper = styled.div`
  padding: 0 100px;
  margin: auto 10px;
  color: #787878;
  flex: 40%;
  display: table;
  clear: both;
`;

const StyledProduct = styled.div`
  margin-top: 10px;
  float: left;
  width: 50%;
`;

const OrdersList = ({ data = [] }) => {
  if (data.length < 1) {
    return (
      <Wrapper>
        <StyledTitle>Orders</StyledTitle>
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
      <StyledTitle>Orders</StyledTitle>
      <ColectionWrapper>
        {data.map(el => (
          <Item key={el.id}>
            <StyledHeading>{el.created_at}</StyledHeading>
            <StyledProductsTitle>Products:</StyledProductsTitle>
            <StyledProductsWrapper>
              {el.products.map(product => (
                <StyledProduct key={el.created_at + Math.random()}>{product.name}</StyledProduct>
              ))}
            </StyledProductsWrapper>
            <StyledPrice>Price: {el.total_price} zł</StyledPrice>
          </Item>
        ))}
      </ColectionWrapper>
    </Wrapper>
  );
};

export default OrdersList;
