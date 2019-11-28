import React from 'react';
import CentralTemplate from 'templates/CentralTemplate';
import Chart from 'components/organisms/Chart';
import StoreList from 'components/organisms/StoreList';
import CreateUser from 'components/organisms/CreateUser';

const CentralPage = () => {
  return (
    <CentralTemplate>
      <h1>Strona Centrali</h1>
      <Chart />
      <StoreList />
      <CreateUser />
    </CentralTemplate>
  );
};

export default CentralPage;
