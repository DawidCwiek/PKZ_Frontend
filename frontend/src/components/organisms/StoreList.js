import React from 'react';
import styled from 'styled-components';
import Griddle, { RowDefinition, ColumnDefinition, plugins } from 'griddle-react';
import { NavLink } from 'react-router-dom';
import Heading from 'components/atoms/Heading';

const ListWraper = styled.div`
  margin: 20px;
  justify-content: center;
`;

const NewLayout = ({ Table, Pagination, Filter }) => (
  <div>
    <Filter />
    <Table />
    <Pagination />
  </div>
);
// Jedynie na co musisz zerknąć to żeby link prowadził do naszych sklepów. Value bierze z nazwy.
const customRefComponent = ({ value }) => (
  <NavLink to={`/central/store/${value}/`}>{value}</NavLink>
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
  if (data.id === undefined) {
    return [];
  }
  return {
    id: data.id,
    name: data.name,
    city: data.address.city,
    street: data.address.street,
  };
};

const StoreList = ({ data }) => (
  <ListWraper>
    <StyledHeading>Store List</StyledHeading>
    <Griddle
      plugins={[plugins.LocalPlugin]}
      styleConfig={styleConfig}
      data={data.map(x => getCorrectData(x))}
      components={{ Layout: NewLayout }}
    >
      <RowDefinition>
        <ColumnDefinition id="id" title="ID" customComponent={customRefComponent} />
        <ColumnDefinition id="name" title="Name" />
        <ColumnDefinition id="city" title="City" />
        <ColumnDefinition id="street" title="Street" />
      </RowDefinition>
    </Griddle>
  </ListWraper>
);

export default StoreList;
