import axios from 'axios';
import { REMOTE_HOST } from 'reduxFiles/configure';
import qs from 'qs';
import store from 'reduxFiles/store/store';
import {
  CENTRAL_REQUEST,
  CENTRAL_SUCCESS,
  CENTRAL_FAILURE,
  ADD_CENTRAL_USER_REQUEST,
  ADD_CENTRAL_USER_SUCCESS,
  ADD_CENTRAL_USER_FAILURE,
} from 'reduxFiles/constNames';

export const fetchCentral = () => dispatch => {
  dispatch({ type: CENTRAL_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().userToken,
    },
    url: `${REMOTE_HOST}/central`,
  };

  return axios(options)
    .then(payload => {
      console.log(payload);
      dispatch({ type: CENTRAL_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: CENTRAL_FAILURE, err });
    });
};

export const addCentralUser = (
  email,
  name,
  surname,
  phoneNumber,
  centralId,
  storeId,
  manager,
) => dispatch => {
  dispatch({ type: ADD_CENTRAL_USER_REQUEST });

  const data = {
    email,
    name,
    surname,
    phone_number: phoneNumber,
    central_id: centralId,
    store_id: storeId,
    manager,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().userToken,
    },
    data: qs.stringify(data),
    url: `${REMOTE_HOST}/signup`,
  };

  return axios(options)
    .then(payload => {
      console.log(payload);
      dispatch({ type: ADD_CENTRAL_USER_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_CENTRAL_USER_FAILURE, err });
    });
};