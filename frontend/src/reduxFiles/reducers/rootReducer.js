import { AUTH_SUCCESS, CENTRAL_SUCCESS } from 'reduxFiles/constNames';

const initialState = {
  userToken: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userToken: action.payload.data.auth_token,
      };
    case CENTRAL_SUCCESS:
      return {
        ...state,
        central: action.payload.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
