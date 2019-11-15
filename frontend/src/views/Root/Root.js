import React from 'react';
import { Provider } from 'react-redux';
import store from 'reduxFiles/store/store';

function Root() {
  return (
    <Provider store={store}>
      <div>
        <h1>dupa</h1>
      </div>
    </Provider>
  );
}

export default Root;
