import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchDatas } from "../actions/getApiDataAction";
import "./Posts.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];
class Posts extends React.Component {
  // componentDidUpdate() {
  //   console.log(this.props.formValues);
  //   this.props.fetchDatas(this.props.formValues);
  // }
  render() {
    if (this.props.errorMsg) {
      return <div className="error-msg">{this.props.errorMsg}</div>;
    } else if (this.props.items) {
      if (this.props.items.length == 0) {
        return <div className="error-msg">No items Found........</div>;
      } else {
        return (
          <section className="posts-container">
            <Carousel breakPoints={breakPoints}>
              {this.props.items.map((post) => (
                <Post post={post} />
              ))}
            </Carousel>
          </section>
        );
      }
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  formValues: state.formValues,
  errorMsg: state.errorMsg,
});

// export default connect(mapStateToProps, { fetchDatas })(Posts);
export default connect(mapStateToProps)(Posts);
