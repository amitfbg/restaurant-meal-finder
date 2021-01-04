import React from "react";
import "./Post.css";

function Post(props) {
  console.log("post", props);
  return (
    <div className="post">
      <img src={props.post.thumbnail} />
      <h1>{props.post.title}</h1>
      <p>
        <span>Ingredients : </span>
        {props.post.ingredients}
      </p>
    </div>
  );
}

export default Post;
