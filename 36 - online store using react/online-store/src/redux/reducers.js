import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actions';

const initialState = {
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};

export default rootReducer;
