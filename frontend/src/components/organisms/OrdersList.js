import React, { Component } from 'react';
import styled from 'styled-components';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
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

class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      date: [new Date(), new Date()],
      filteredData: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () =>
    this.setState({ data: this.props.data || [], filteredData: this.props.data || [] });

  onChange = date => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const filteredData = this.state.data.filter(item => {
      const itemData = new Date(item.created_at);
      return itemData >= date[0] && itemData <= date[1];
    });
    this.setState({ date, filteredData });
  };

  render() {
    if (this.state.filteredData.length < 1) {
      return (
        <Wrapper>
          <StyledTitle>Orders</StyledTitle>
          <DateTimeRangePicker onChange={this.onChange} value={this.state.date} />
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
        <DateTimeRangePicker onChange={this.onChange} value={this.state.date} />
        <ColectionWrapper>
          {this.state.filteredData.map(el => (
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
  }
}

export default OrdersList;
