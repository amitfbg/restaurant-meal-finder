import React from "react";
import "./PostContainer.css";

/*
 * @function PostContainer
 * @param  props
 * @description It sets the background image and shows some description of the image
 */

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
