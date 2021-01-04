import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import "./Posts.css";

class Posts extends React.Component {
  render() {
    return (
      <section className="posts-container">
        {this.props.items &&
          this.props.items.map((post) => <Post post={post} />)}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(Posts);
