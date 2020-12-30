import React, { Component } from "react";
import "./SearchContainer.css";

function SearchContainer() {
  return (
    <div className="search-container-box">
      <h1>Find Your Meal...</h1>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Resturant" />
          <input type="text" placeholder="Meal-Type" />
          <input type="submit" value="Search..." />
        </form>
      </div>
    </div>
  );
}

export default SearchContainer;
