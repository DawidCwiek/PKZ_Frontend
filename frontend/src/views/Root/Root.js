import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'reduxFiles/store/store';
import { Notify } from 'react-redux-notify';
import 'react-redux-notify/dist/ReactReduxNotify.css';
import GlobalStyle from 'theme/GlobalStyle';
import LoginPage from 'views/User/LoginPage';
import CentralPage from 'views/Central/CentralPage';
import CentralMenuPage from 'views/Central/CentralMenuPage';
import CentralStorePage from 'views/Central/CentralStorePage';
import StorePage from 'views/Store/StorePage';
import SessionRedirect from 'views/Root/SessionRedirect';
import HomePage from 'views/Root/HomePage';

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Notify />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <SessionRedirect>
            <Route exact path="/central" component={CentralPage} />
            <Route exact path="/central/:centralId/menu/" component={CentralMenuPage} />
            <Route exact path="/central/store/:storeId/" component={CentralStorePage} />
            <Route exact path="/store/:storeId/" component={StorePage} />
          </SessionRedirect>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
