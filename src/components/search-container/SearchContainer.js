import React, { Component } from "react";
import "./SearchContainer.css";

import { connect } from "react-redux";
import { fetchDatas } from "../actions/getApiDataAction";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: "",
      meal: "",
      isSubmitted: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    let req = {
      restaurant: this.state.restaurant,
      meal: this.state.meal,
    };
    console.log("search", this.props);
    this.props.fetchDatas(req);
    this.setState({ isSubmitted: true });
    e.target.reset();
  }

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
        {/* {this.state.isSubmitted && this.clearForm()} */}
      </section>
    );
  }
}

export default connect(null, { fetchDatas })(SearchContainer);
