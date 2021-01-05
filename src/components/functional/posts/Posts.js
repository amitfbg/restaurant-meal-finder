import React from "react";
import { connect } from "react-redux";
// import { fetchDatas } from "../actions/getApiDataAction";
import "./Posts.css";
import Carousel from "react-elastic-carousel";
import Post from "../post/Post";

import loaderGIF from "../../../assets/images/loader.gif";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];
class Posts extends React.Component {
  render() {
    // Destructuring of objects of props
    const { isLoading, errorMsg, items } = this.props;
    if (isLoading == true) {
      return (
        <div className="is-loading">
          <img src={loaderGIF} />
        </div>
      );
    } else {
      if (errorMsg) {
        return <div className="error-msg">{errorMsg}</div>;
      } else if (items) {
        if (items.length === 0) {
          return <div className="error-msg">No items Found........</div>;
        } else {
          return (
            <section className="posts-container">
              <Carousel breakPoints={breakPoints}>
                {items.map((post) => (
                  <Post post={post} />
                ))}
              </Carousel>
            </section>
          );
        }
      }
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  formValues: state.formValues,
  errorMsg: state.errorMsg,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(Posts);
