import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'reduxFiles/store/store';
import { Notify } from 'react-redux-notify';
import 'react-redux-notify/dist/ReactReduxNotify.css';
import GlobalStyle from 'theme/GlobalStyle';
import LoginPage from 'views/User/LoginPage';
import CentralPage from 'views/Central/CentralPage';
import CentralShopPage from 'views/Central/CentralShopPage';

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Notify />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/central" component={CentralPage} />
          <Route exact path="/shop" component={CentralShopPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
