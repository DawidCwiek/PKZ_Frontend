import React from 'react';
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
    Filter: { fontSize: 20, width: '100%' },
    Table: { fontSize: 20, width: '100%' },
    TableBody: { border: '2px dotted solid double dashed #555 ' },
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
