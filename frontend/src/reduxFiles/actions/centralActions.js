import axios from 'axios';
import { REMOTE_HOST } from 'reduxFiles/configure';
import qs from 'qs';
import { createNotification } from 'react-redux-notify';
import { faillAddObject, succesAddObject } from 'components/atoms/notifications';
import store from 'reduxFiles/store/store';
import {
  CENTRAL_REQUEST,
  CENTRAL_SUCCESS,
  CENTRAL_FAILURE,
  CHART_REQUEST,
  CHART_SUCCESS,
  CHART_FAILURE,
  ADD_CENTRAL_USER_REQUEST,
  ADD_CENTRAL_USER_FAILURE,
  ADD_STORE_REQUEST,
  ADD_STORE_FAILURE,
  STORE_EMPLOYEES_REQUEST,
  STORE_EMPLOYEES_SUCCESS,
  STORE_EMPLOYEES_FAILURE,
  STORE_ORDERS_REQUEST,
  STORE_ORDERS_SUCCESS,
  STORE_ORDERS_FAILURE,
} from 'reduxFiles/constNames';

export const fetchCentral = () => dispatch => {
  dispatch({ type: CENTRAL_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: CENTRAL_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: CENTRAL_FAILURE, err });
    });
};

export const fetchStoreEmployees = storeId => dispatch => {
  dispatch({ type: STORE_EMPLOYEES_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/store/${storeId}/employees`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: STORE_EMPLOYEES_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: STORE_EMPLOYEES_FAILURE, err });
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
    manager: manager === 'true',
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    data: qs.stringify(data),
    url: `${REMOTE_HOST}/signup`,
  };

  return axios(options)
    .then(() => {
      dispatch(createNotification(succesAddObject));
      if (storeId != null) {
        dispatch(fetchStoreEmployees(storeId));
      }
      if (centralId != null) {
        dispatch(fetchCentral());
      }
    })
    .catch(err => {
      dispatch(createNotification(faillAddObject));
      dispatch({ type: ADD_CENTRAL_USER_FAILURE, err });
    });
};

export const addStore = (name, city, street, zipCode, centralId) => dispatch => {
  dispatch({ type: ADD_STORE_REQUEST });

  const data = {
    name,
    address: {
      city,
      street,
      zip_code: zipCode,
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    data: qs.stringify(data),
    url: `${REMOTE_HOST}/central/${centralId}/store`,
  };

  return axios(options)
    .then(() => {
      dispatch(createNotification(succesAddObject));
      dispatch(fetchCentral());
    })
    .catch(err => {
      dispatch(createNotification(faillAddObject));
      dispatch({ type: ADD_STORE_FAILURE, err });
    });
};

export const fetchChart = () => dispatch => {
  dispatch({ type: CHART_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central/avg_total_price`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: CHART_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: CHART_FAILURE, err });
    });
};

export const fetchStoreChart = storeId => dispatch => {
  dispatch({ type: CHART_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/store/${storeId}/total_price`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: CHART_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: CHART_FAILURE, err });
    });
};

export const fetchStoreOrders = storeId => dispatch => {
  dispatch({ type: STORE_ORDERS_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/store/${storeId}/orders`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: STORE_ORDERS_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: STORE_ORDERS_FAILURE, err });
    });
};
