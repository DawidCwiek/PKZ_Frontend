import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import notifyReducer from 'react-redux-notify';
import rootReducer from 'reduxFiles/reducers/rootReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({ notifications: notifyReducer, root: rootReducer });
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

export default store;
