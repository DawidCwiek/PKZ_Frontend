import axios from 'axios';
import qs from 'qs';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from 'reduxFiles/constNames';
import { REMOTE_HOST } from 'reduxFiles/configure';
import { createNotification } from 'react-redux-notify';
import { failedLogin } from 'components/atoms/notifications';

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
