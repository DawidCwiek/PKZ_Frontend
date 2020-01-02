import axios from 'axios';
import { REMOTE_HOST } from 'reduxFiles/configure';
import qs from 'qs';
import { createNotification } from 'react-redux-notify';
import {
  faillAddObject,
  succesAddObject,
  faillDeleteObject,
  succesDeleteObject,
} from 'components/atoms/notifications';

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
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILURE,
  ADD_COMPONENT_REQUEST,
  ADD_COMPONENT_FAILURE,
  ADD_MENU_REQUEST,
  ADD_MENU_FAILURE,
  DELETE_OBJECT_REQUEST,
  DELETE_OBJECT_FAILURE,
} from 'reduxFiles/constNames';

export const fetchMenus = centralId => dispatch => {
  dispatch({ type: MENU_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central/${centralId}/menus`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: MENU_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: MENU_FAILURE, err });
    });
};

export const fetchProducts = centralId => dispatch => {
  dispatch({ type: PRODUCT_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central/${centralId}/products`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: PRODUCT_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE, err });
    });
};

export const fetchComponents = centralId => dispatch => {
  dispatch({ type: COMPONENT_REQUEST });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central/${centralId}/components`,
  };

  return axios(options)
    .then(payload => {
      dispatch({ type: COMPONENT_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: COMPONENT_FAILURE, err });
    });
};

export const addComponent = (name, cost, centralId) => dispatch => {
  dispatch({ type: ADD_COMPONENT_REQUEST });

  const data = {
    component: {
      name,
      cost,
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    data: qs.stringify(data),
    url: `${REMOTE_HOST}/central/${centralId}/components`,
  };

  return axios(options)
    .then(() => {
      dispatch(createNotification(succesAddObject));
      dispatch(fetchComponents(centralId));
    })
    .catch(err => {
      dispatch(createNotification(faillAddObject));
      dispatch({ type: ADD_COMPONENT_FAILURE, err });
    });
};

export const addProduct = (name, price, image, componentsId, centralId) => dispatch => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

  const formData = new window.FormData();
  formData.append('product[image]', image);
  formData.append('product[name]', name);
  formData.append('product[price]', price);
  for (let i = 0; i < componentsId.length; i += 1) {
    formData.append('components[]', componentsId[i]);
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: store.getState().root.userToken,
    },
    data: formData,
    url: `${REMOTE_HOST}/central/${centralId}/products`,
  };

  return axios(options)
    .then(() => {
      dispatch(createNotification(succesAddObject));
      dispatch(fetchProducts(centralId));
    })
    .catch(err => {
      dispatch(createNotification(faillAddObject));
      dispatch({ type: ADD_PRODUCT_FAILURE, err });
    });
};

export const addMenu = (name, active, productsId, centralId) => dispatch => {
  dispatch({ type: ADD_MENU_REQUEST });

  const formData = new window.FormData();
  formData.append('menu[name]', name);
  formData.append('menu[active]', active);
  for (let i = 0; i < productsId.length; i += 1) {
    formData.append('products[]', productsId[i]);
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    data: formData,
    url: `${REMOTE_HOST}/central/${centralId}/menus`,
  };

  return axios(options)
    .then(() => {
      dispatch(createNotification(succesAddObject));
      dispatch(fetchMenus(centralId));
    })
    .catch(err => {
      dispatch(createNotification(faillAddObject));
      dispatch({ type: ADD_MENU_FAILURE, err });
    });
};

export const deleteObject = (objectId, centralId, type) => dispatch => {
  dispatch({ type: DELETE_OBJECT_REQUEST });

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: store.getState().root.userToken,
    },
    url: `${REMOTE_HOST}/central/${centralId}/${type}/${objectId}`,
  };

  return axios(options)
    .then(() => {
      dispatch(createNotification(succesDeleteObject));
      if (type === 'menus') {
        dispatch(fetchMenus(centralId));
      } else if (type === 'products') {
        dispatch(fetchProducts(centralId));
      } else {
        dispatch(fetchComponents(centralId));
      }
    })
    .catch(err => {
      dispatch(createNotification(faillDeleteObject));
      dispatch({ type: DELETE_OBJECT_FAILURE, err });
    });
};
