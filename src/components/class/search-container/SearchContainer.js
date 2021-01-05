import React, { Component } from "react";
import "./SearchContainer.css";

import { connect } from "react-redux";
import { fetchDatas } from "../../../react-redux-store/actions/getApiDataAction";
import store from "../../../react-redux-store/store/configureStore";
import * as actions from "../../../react-redux-store/actions/actionType";

class SearchContainer extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      restaurant: "",
      meal: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //This will change the state of input
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //This will trigger when the form will be submitted
  onSubmit(e) {
    e.preventDefault();
    let req = {
      restaurant: this.state.restaurant,
      meal: this.state.meal,
    };
    // this will start the loader
    store.dispatch({ type: actions.FORM_SUBMITTED });
    this.props.fetchDatas(req);
    //Here we use setTimeout to slow the delay
    setTimeout(() => {
      //this will stop the loader once form is accepted
      store.dispatch({ type: actions.FETCHING_APPROVED });
      e.target.reset();
    }, 2000);
  }
  //Rendering all the components
  render() {
    return (
      <section>
        <div className="search-container-box">
          <h1>Find Your Meal...</h1>
          <div>
            <form onSubmit={this.onSubmit} name="myForm">
              <input
                type="text"
                name="restaurant"
                placeholder="Ingredient 1"
                onChange={this.onChange}
                required
              />
              <input
                type="text"
                name="meal"
                placeholder="Ingredient 2"
                onChange={this.onChange}
                required
              />
              <input type="submit" value="Search..." />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, { fetchDatas })(SearchContainer);
