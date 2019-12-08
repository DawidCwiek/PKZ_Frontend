import React from 'react';
import styled from 'styled-components';
import Griddle, { RowDefinition, ColumnDefinition, plugins } from 'griddle-react';
import ListWraper from 'components/atoms/ListWraper';
import Heading from 'components/atoms/Heading';

const NewLayout = ({ Table, Pagination, Filter }) => (
  <div>
    <Filter />
    <Table />
    <Pagination />
  </div>
);

const styleConfig = {
  icons: {
    TableHeadingCell: {
      sortDescendingIcon: <small>▼</small>,
      sortAscendingIcon: <small>▲</small>,
    },
  },
  classNames: {
    Row: 'row-class',
  },
  styles: {
    Filter: {
      fontSize: '2rem',
      width: '25%',
      float: 'right',
      margin: '0 0 10px',
      backgroundColor: '#f5f5f5',
      border: 'none',
      borderRadius: '50px',
      padding: '10px 20px',
    },
    Table: { fontSize: 20, width: '100%' },
    Cell: { borderBottom: '1px solid hsla(0,0%,0%,0.12)' },
    TableHeadingCell: { borderBottom: '1px solid hsla(0,0%,0%,0.12)', textAlign: 'left' },
    PreviousButton: {
      backgroundColor: '#ffd829',
      border: 'none',
      borderRadius: '50px',
      margin: '5px',
    },
    NextButton: {
      backgroundColor: '#ffd829',
      border: 'none',
      borderRadius: '50px',
      margin: '5px',
    },
  },
};

const StyledHeading = styled(Heading)`
  display: flex;
  justify-content: center;
`;

const getCorrectData = data => {
  if (data.address === undefined) {
    return [];
  }
  return {
    name: data.name,
    city: data.address.city,
    street: data.address.street,
  };
};

const StoreList = ({ data }) => (
  <ListWraper>
    <StyledHeading>Lista sklepów</StyledHeading>
    <Griddle
      plugins={[plugins.LocalPlugin]}
      styleConfig={styleConfig}
      data={data.map(x => getCorrectData(x))}
      components={{ Layout: NewLayout }}
    >
      <RowDefinition>
        <ColumnDefinition id="name" title="Nazwa" />
        <ColumnDefinition id="city" title="Miasto" />
        <ColumnDefinition id="street" title="Ulica" />
      </RowDefinition>
    </Griddle>
  </ListWraper>
);

export default StoreList;
