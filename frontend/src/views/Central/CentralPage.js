import React from 'react';
import CentralTemplate from 'templates/CentralTemplate';
import Chart from 'components/organisms/Chart';

const CentralPage = () => {
  return (
    <CentralTemplate>
      <h1>Strona Centrali</h1>
      <Chart />
    </CentralTemplate>
  );
};

export default CentralPage;
