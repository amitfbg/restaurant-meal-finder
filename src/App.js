import React, { Component } from "react";
import Header from "./components/header/Header";
import PostContainer from "./components/post-container/PostContainer";
import "./App.css";
import fruits from "./assets/images/fruits.jpg";
import mushroom from "./assets/images/mushroom.jpg";
import pizza from "./assets/images/pizza.jpg";
import SearchContainer from "./components/search-container/SearchContainer";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <section className="main-container">
          <PostContainer
            image={pizza}
            header={"cheat meal"}
            textH={"Receipt"}
            textD={
              "Tender Bacon and Mushroom Omelet That is actually Good for your Health"
            }
          />
          <PostContainer
            image={fruits}
            header={"Health"}
            textH={"Tips & Tricks"}
            textD={"Always Add Some Freshly Sliced Fruits To your Meal"}
          />
          <PostContainer
            image={mushroom}
            header={"cheat meal"}
            textH={"Receipt"}
            textD={
              "Crispy Mushroom Spinach Salad In Sesame Seed Oil And Red Pepper"
            }
          />
        </section>
        <section className="search-container">
          <SearchContainer />
        </section>
      </main>
    );
  }
}

export default App;
