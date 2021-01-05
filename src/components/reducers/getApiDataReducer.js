import * as actions from "../actions/actionType";

const initialState = {
  items: [],
  formValues: {},
  errorMsg: "",
};

const reducer = function (state = initialState, action) {
  // console.log("reducer", action);
  switch (action.type) {
    case actions.FETCH_DATA:
      return {
        ...state,
        items: action.data,
        errorMsg: "",
      };
    case actions.FORM_INPUT_VALUES:
      return {
        ...state,
        formValues: action.payload,
      };
    case actions.ERROR_MSG:
      return {
        ...state,
        errorMsg: "OOPS AN ERROR OCCURED.......",
      };
    default:
      return state;
  }
};

export default reducer;
