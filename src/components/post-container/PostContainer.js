import React, { Component } from "react";
import "./PostContainer.css";

function PostContainer(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="postContainer"
    >
      <div className="postContainerDescription">
        <p>{props.header}</p>
        <span>{props.textH}:</span>
        {props.textD}
      </div>
    </div>
  );
}

export default PostContainer;
