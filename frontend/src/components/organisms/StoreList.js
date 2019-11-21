import React from 'react';
import ListWraper from 'components/atoms/ListWraper';

const initialStores = [
  {
    id: 1,
    name: 'store 1',
  },
  {
    id: 2,
    name: 'store 2',
  },
  {
    id: 3,
    name: 'store 3',
  },
];

const StoreList = () =>
  initialStores.map(store => (
    <ListWraper dupa>
      <li>
        <h1>{store.id}</h1>
        <h1>{store.name}</h1>
      </li>
    </ListWraper>
  ));

export default StoreList;
