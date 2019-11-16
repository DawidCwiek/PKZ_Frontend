import axios from 'axios';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from 'reduxFiles/constNames';

export const authenticate = (email, password) => dispatch => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('http://api.devdawidcwiek.ovh/auth/login', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      email,
      password,
    })
    .then(payload => {
      console.log(payload);
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};
