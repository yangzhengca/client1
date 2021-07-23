import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_INVESTMENT } from '../actions/actionTypes'

export default (investment = [], action) => {
  switch (action.type) {
    case FETCH_INVESTMENT:
      return action.payload;
    // case CREATE:
    //   return [...investment, action.payload];
    // case UPDATE:
    //   return investment.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    // case DELETE:
    //   return investment.filter((post) => post._id !== action.payload);
    // case LIKE:
    //   return investment.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    default:
      return investment;
  }
};
