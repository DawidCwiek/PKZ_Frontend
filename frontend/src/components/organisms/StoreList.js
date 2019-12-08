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
// Jedynie na co musisz zerknąć to żeby link prowadził do naszych sklepów. Value bierze z nazwy.
const customNameComponent = ({ value }) => (
  <a
    href={`https://www.google.com/maps/place/${value}/>`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {value}
  </a>
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

const StoreList = ({ data }) => (
  <ListWraper>
    <StyledHeading>Lista sklepów</StyledHeading>
    <Griddle
      plugins={[plugins.LocalPlugin]}
      styleConfig={styleConfig}
      data={Object.entries(data).map(x => x[1].address)}
      components={{ Layout: NewLayout }}
    >
      <RowDefinition>
        <ColumnDefinition id="addressable_id" title="Nazwa" customComponent={customNameComponent} />
        <ColumnDefinition id="city" title="Miasto" />
        <ColumnDefinition id="street" title="Ulica" />
      </RowDefinition>
    </Griddle>
  </ListWraper>
);

export default StoreList;
