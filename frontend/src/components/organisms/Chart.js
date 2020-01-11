import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Heading from 'components/atoms/Heading';
import { fetchChart as fetchChartAction } from 'reduxFiles/actions/centralActions';

const StyledWrapper = styled.div`
  margin: 10px 10px 10px 10px;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 20px 0;
  text-align: center;
`;

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.chartData,
      title: props.title ? props.title : 'Średni obrót w całej sieci',
    };
    const { fetchChart } = props;
    if (props.central) {
      fetchChart();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () => this.setState({ data: this.props.chartData });

  render() {
    return (
      <StyledWrapper>
        <StyledHeading>{this.state.title}</StyledHeading>
        <ResponsiveContainer width="95%" height={400}>
          <BarChart
            data={this.state.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => {
  const { chartData } = state.root;
  return { chartData };
};

const mapDispatchToProps = dispatch => ({
  fetchChart: centralId => dispatch(fetchChartAction(centralId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
