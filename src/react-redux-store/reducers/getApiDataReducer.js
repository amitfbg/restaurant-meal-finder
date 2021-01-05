import * as actions from "../actions/actionType";

const initialState = {
  items: [],
  formValues: {},
  errorMsg: "",
  isLoading: false,
};

const reducer = function (state = initialState, action) {
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
        isLoading: false,
        errorMsg: "OOPS AN ERROR OCCURED.......",
      };
    case actions.FORM_SUBMITTED:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCHING_APPROVED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
