import * as actions from "./actionType";

// function:- fetchDatas
// param:- {object} -- {restaurant,meal}-- which will be used in Fetch
// Descripton:- It will get the parameter and return a function which taked dispatch as parameter and called the fetch and it will dispatch the data to store
export function fetchDatas(e) {
  // console.log("fetching..", e);
  // this.setState({ isLoading: true });
  return function (dispatch) {
    fetch(`http://www.recipepuppy.com/api/?i=${e.restaurant}&q=${e.meal}`)
      .then((res) => res.json())
      .then((data) => {
        // this.setState({ isLoading: true });
        dispatch({
          type: actions.FETCH_DATA,
          data: data.results,
        });
      })
      .catch((error) => {
        // console.log("ERRORR", error);
        dispatch({
          type: actions.ERROR_MSG,
          // payload: error,
        });
      });
  };
}
