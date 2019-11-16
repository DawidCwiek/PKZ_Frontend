import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'reduxFiles/store/store';
import GlobalStyle from 'theme/GlobalStyle';
import LoginPage from 'views/User/LoginPage';

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
