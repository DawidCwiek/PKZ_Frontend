import axios from 'axios';
import qs from 'qs';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGOUT,
  DELETE_EMPLOYEES_REQUEST,
  DELETE_EMPLOYEES_FAILURE,
} from 'reduxFiles/constNames';
import { REMOTE_HOST } from 'reduxFiles/configure';
import { createNotification } from 'react-redux-notify';
import { failedLogin, faillDeleteObject, succesDeleteObject } from 'components/atoms/notifications';
import store from 'reduxFiles/store/store';
import { fetchStoreEmployees, fetchCentral } from 'reduxFiles/actions/centralActions';

export const authenticate = (email, password) => dispatch => {
  dispatch({ type: AUTH_REQUEST });

  const data = { email, password };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    url: `${REMOTE_HOST}/auth/login`,
    data: qs.stringify(data),
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(err => {
      dispatch(createNotification(failedLogin));
      dispatch({ type: AUTH_FAILURE, err });
    });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const deleteEmployee = (userId, storeId, centralId) => dispatch => {
  dispatch({ type: DELETE_EMPLOYEES_REQUEST });

  const data = {
    store_id: storeId,
    central_id: centralId,
  };

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    data: qs.stringify(data),
    url: `${REMOTE_HOST}/users/${userId}`,
  };

  return axios(options)
    .then(() => {
      dispatch(createNotification(succesDeleteObject));
      if (storeId != null) {
        dispatch(fetchStoreEmployees(storeId));
      }
      if (centralId != null) {
        dispatch(fetchCentral());
      }
    })
    .catch(err => {
      dispatch(createNotification(faillDeleteObject));
      dispatch({ type: DELETE_EMPLOYEES_FAILURE, err });
    });
};
