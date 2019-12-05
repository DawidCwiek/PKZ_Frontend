import Cookie from 'js-cookie';
import { AUTH_SUCCESS, CENTRAL_SUCCESS } from 'reduxFiles/constNames';

const initialState = {
  userToken: Cookie.get('userToken') ? Cookie.get('userToken') : '',
  central: {
    address: {},
    stores: [],
    users: [],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      Cookie.set('userToken', action.payload.data.auth_token, { expires: 0.49 });
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
