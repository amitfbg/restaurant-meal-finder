import * as actions from "../actions/actionType";

const initialState = {
  items: [],
};

const reducer = function (state = initialState, action) {
  // console.log("reducer", action);
  switch (action.type) {
    case actions.FETCH_DATA:
      return {
        ...state,
        items: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
