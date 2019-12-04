import axios from 'axios';
import { CENTRAL_REQUEST, CENTRAL_SUCCESS, CENTRAL_FAILURE } from 'reduxFiles/constNames';
// import store from 'reduxFiles/store/store';

export const fetchCentral = () => dispatch => {
  dispatch({ type: CENTRAL_REQUEST });

  return axios
    .get('http://api.devdawidcwiek.ovh/central', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOCwiZXhwIjoxNTc1NTA2NjA0fQ.WPcPN8kxyXzCmrgXgRechZwrlA5VxkFElJUTbHZGe2o',
      },
    })
    .then(payload => {
      console.log(payload);
      dispatch({ type: CENTRAL_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: CENTRAL_FAILURE, err });
    });
};
