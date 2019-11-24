import React from 'react';
import styled from 'styled-components';
import Griddle, { RowDefinition, ColumnDefinition, plugins } from 'griddle-react';
import ListWraper from 'components/atoms/ListWraper';
import Heading from 'components/atoms/Heading';

const initialStores = [
  {
    id: 1,
    name: 'Zahir 1',
    city: 'Lodz',
    street: 'Piotrkowska',
  },
  {
    id: 2,
    name: 'Zahir 2',
    city: 'Lodz',
    street: 'Dabrowskiego',
  },
  {
    id: 3,
    name: 'Zahir 3',
    city: 'Lodz',
    street: 'Politechniki',
  },
  {
    id: 4,
    name: 'Zahir 4',
    city: 'Warszawa',
    street: 'Dabrowskiego',
  },
  {
    id: 3,
    name: 'Zahir 3',
    city: 'Lodz',
    street: 'Politechniki',
  },
  {
    id: 4,
    name: 'Zahir 4',
    city: 'Warszawa',
    street: 'Dabrowskiego',
  },
  {
    id: 3,
    name: 'Zahir 3',
    city: 'Lodz',
    street: 'Politechniki',
  },
  {
    id: 4,
    name: 'Zahir 4',
    city: 'Warszawa',
    street: 'Dabrowskiego',
  },
  {
    id: 3,
    name: 'Zahir 3',
    city: 'Lodz',
    street: 'Piotrkowska',
  },
  {
    id: 4,
    name: 'Zahir 4',
    city: 'Warszawa',
    street: 'Politechniki',
  },
  {
    id: 3,
    name: 'Zahir 3',
    city: 'Lodz',
    street: 'Dabrowskiego',
  },
  {
    id: 4,
    name: 'Zahir 4',
    city: 'Warszawa',
    street: 'small',
  },
  {
    id: 3,
    name: 'Zahir 3',
    city: 'Lodz',
    street: 'Politechniki',
  },
  {
    id: 4,
    name: 'Zahir 4',
    city: 'Warszawa',
    street: 'Politechniki',
  },
];

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

const StoreList = () => (
  <ListWraper>
    <StyledHeading>Lista sklepów</StyledHeading>
    <Griddle
      plugins={[plugins.LocalPlugin]}
      styleConfig={styleConfig}
      data={initialStores}
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
