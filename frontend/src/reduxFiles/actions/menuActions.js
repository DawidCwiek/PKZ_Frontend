import axios from 'axios';
import { REMOTE_HOST } from 'reduxFiles/configure';

import store from 'reduxFiles/store/store';
import {
  MENU_REQUEST,
  MENU_SUCCESS,
  MENU_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  COMPONENT_REQUEST,
  COMPONENT_SUCCESS,
  COMPONENT_FAILURE,
} from 'reduxFiles/constNames';

export const fetchMenus = () => dispatch => {
  dispatch({ type: MENU_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central/${store.getState().root.central.id}/menus`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: MENU_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: MENU_FAILURE, err });
    });
};

export const fetchProducts = () => dispatch => {
  dispatch({ type: PRODUCT_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central/${store.getState().root.central.id}/products`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: PRODUCT_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE, err });
    });
};

export const fetchComponents = () => dispatch => {
  dispatch({ type: COMPONENT_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central/${store.getState().root.central.id}/components`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: COMPONENT_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: COMPONENT_FAILURE, err });
    });
};
