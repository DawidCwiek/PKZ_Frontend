import React from 'react';
import Griddle, { RowDefinition, ColumnDefinition, plugins } from 'griddle-react';
import ListWraper from 'components/atoms/ListWraper';

const initialStores = [
  {
    id: 1,
    name: 'Zahir 1',
    place: 'Lodz',
    size: 'big',
  },
  {
    id: 2,
    name: 'Zahir 2',
    place: 'Lodz',
    size: 'big',
  },
  {
    id: 3,
    name: 'Zahir 3',
    place: 'Lodz',
    size: 'small',
  },
  {
    id: 4,
    name: 'Zahir 4',
    place: 'Warszawa',
    size: 'small',
  },
];

const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />
    <Table />
    <Pagination />
    <SettingsWrapper />
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
    Table: { border: '2px solid #555 ', fontSize: 20, color: '#8884d8' },
  },
};

const StoreList = () => (
  <ListWraper>
    <h1>Lista sklepów</h1>
    <Griddle
      plugins={[plugins.LocalPlugin]}
      styleConfig={styleConfig}
      data={initialStores}
      components={{ Layout: NewLayout }}
    >
      <RowDefinition>
        <ColumnDefinition id="id" title="Numer" />
        <ColumnDefinition id="name" title="Nazwa" />
        <ColumnDefinition id="place" title="Miasto" />
        <ColumnDefinition id="size" title="Rozmiar" />
      </RowDefinition>
    </Griddle>
  </ListWraper>
);

export default StoreList;
