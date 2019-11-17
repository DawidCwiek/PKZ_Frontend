import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Heading from 'components/atoms/Heading';

const tempData = [
  {
    day: 'Poniedzialek',
    income: 30100,
  },
  {
    day: 'Wtorek',
    income: 28030,
  },
  {
    day: 'Sroda',
    income: 32010,
  },
  {
    day: 'Czwartek',
    income: 24000,
  },
  {
    day: 'Piatel',
    income: 54000,
  },
  {
    day: 'Sobota',
    income: 73000,
  },
  {
    day: 'Niedziela',
    income: 64000,
  },
];

const StyledWrapper = styled.div`
  margin: 10px 10px 10px 10px;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 20px 0;
  text-align: center;
`;

const Chart = ({ data = tempData, title = 'Średni obrót w całej sieci' }) => (
  <StyledWrapper>
    <StyledHeading>{title}</StyledHeading>
    <ResponsiveContainer width="95%" height={400}>
      <BarChart
        data={data}
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
        <Bar dataKey="income" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </StyledWrapper>
);

export default Chart;
