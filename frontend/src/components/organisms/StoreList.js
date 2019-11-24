import React from 'react';
import Griddle, { RowDefinition, ColumnDefinition, plugins } from 'griddle-react';
import ListWraper from 'components/atoms/ListWraper';
import Heading from 'components/atoms/Heading';

const initialStores = [
  {
    id: 1,
    name: 'Zahir 1',
    city: 'Lodz',
    street: 'big',
  },
  {
    id: 2,
    name: 'Zahir 2',
    city: 'Lodz',
    street: 'big',
  },
  {
    id: 3,
    name: 'Zahir 3',
    city: 'Lodz',
    street: 'small',
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
    street: 'small',
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
    street: 'small',
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
    street: 'small',
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
    street: 'small',
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
    street: 'small',
  },
  {
    id: 4,
    name: 'Zahir 4',
    city: 'Warszawa',
    street: 'small',
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
    Filter: { fontSize: 20 },
    Table: { fontSize: 20 },
  },
};

const StoreList = () => (
  <ListWraper>
    <Heading>Lista sklepów</Heading>
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
