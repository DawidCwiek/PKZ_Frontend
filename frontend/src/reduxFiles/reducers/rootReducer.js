import Cookie from 'js-cookie';
import {
  AUTH_SUCCESS,
  CENTRAL_SUCCESS,
  LOGOUT,
  MENU_SUCCESS,
  PRODUCT_SUCCESS,
  COMPONENT_SUCCESS,
  CHART_SUCCESS,
  STORE_EMPLOYEES_SUCCESS,
  STORE_ORDERS_SUCCESS,
} from 'reduxFiles/constNames';

const initialState = {
  userToken: Cookie.get('userToken') ? Cookie.get('userToken') : '',
  home: Cookie.get('home') ? Cookie.get('userToken') : '',
  central: {
    id: '',
    address: {},
    stores: [],
    users: [],
  },
  menus: [],
  products: [],
  components: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      Cookie.set('userToken', action.payload.data.auth_token, { expires: 0.49 });
      Cookie.set('home', JSON.stringify(action.payload.data.home), { expires: 0.49 });
      return {
        ...state,
        userToken: action.payload.data.auth_token,
        home: action.payload.data.home,
      };
    case CENTRAL_SUCCESS:
      return {
        ...state,
        central: action.payload.data,
      };
    case MENU_SUCCESS:
      return {
        ...state,
        menus: action.payload.data,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
      };
    case COMPONENT_SUCCESS:
      return {
        ...state,
        components: action.payload.data,
      };
    case CHART_SUCCESS:
      return {
        ...state,
        chartData: action.payload.data.data,
      };
    case STORE_EMPLOYEES_SUCCESS:
      return {
        ...state,
        storeEmployees: action.payload.data.data,
      };
    case STORE_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload.data,
      };
    case LOGOUT:
      Cookie.set('userToken', '');
      return {
        ...state,
        userToken: '',
      };
    default:
      return state;
  }
};

export default rootReducer;
