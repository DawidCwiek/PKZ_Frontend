import React from 'react';
import CentralTemplate from 'templates/CentralTemplate';
import Chart from 'components/organisms/Chart';
import StoreList from 'components/organisms/StoreList';

const CentralPage = () => {
  return (
    <CentralTemplate>
      <h1>Strona Centrali</h1>
      <Chart />
      <StoreList />
    </CentralTemplate>
  );
};

export default CentralPage;
