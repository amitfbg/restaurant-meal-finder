import React from "react";
import "./Post.css";

/*
 * @Function: Post
 * @Description: This will accept the props and will set to respective field
 * @param {} props
 */

function Post(props) {
  //Destructuring so that code will be clean
  const { title, thumbnail, ingredients } = props.post;
  return (
    <div className="post">
      <img src={thumbnail} />
      <h1>{title}</h1>
      <p>
        <span>Ingredients : </span>
        {ingredients}
      </p>
    </div>
  );
}

export default Post;
