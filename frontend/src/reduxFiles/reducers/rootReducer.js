const initialState = {
  userToken: 'Token',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'first action':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
