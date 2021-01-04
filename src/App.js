import React, { Component } from "react";
import { Provider } from "react-redux";
//Imported all the components
import Header from "./components/header/Header";
import PostContainer from "./components/static-post-container/PostContainer";
import SearchContainer from "./components/search-container/SearchContainer";
import Posts from "./components/posts/Posts";
import store from "./components/store/configureStore";
//Imported the style which we added to our App.js component
import "./App.css";

//Imported all the images and given some name for easier access
import fruits from "./assets/images/fruits.jpg";
import mushroom from "./assets/images/mushroom.jpg";
import pizza from "./assets/images/pizza.jpg";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          {/* Header Section */}
          <Header />
          {/* Main container Section which contains static container which shows once page loaded */}
          <section className="main-container">
            {/* PostContainer are sub containers */}
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
          {/* Search Container Section which contains form which ask for the user input */}
          <section className="search-container">
            <SearchContainer />
          </section>
          {/* Posts Section which shows all the post once we search request called */}
          <Posts />
        </main>
      </Provider>
    );
  }
}

// Exporting App as Default
export default App;
