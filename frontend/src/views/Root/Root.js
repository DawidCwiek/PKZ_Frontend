import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'reduxFiles/store/store';
import GlobalStyle from 'theme/GlobalStyle';
import LoginPage from 'views/User/LoginPage';
import Contact from 'views/User/Contact';
import AboutUs from 'views/User/AboutUs';

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/AboutUs" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
