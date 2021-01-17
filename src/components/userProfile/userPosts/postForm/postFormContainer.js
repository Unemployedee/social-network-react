import PostForm from "./postForm";
import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../../redux/profileReducer";

function PostFormContainer(props) {

  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
  };

debugger;
  return (
    <div>
        <PostForm addPost = {addPost} onPostChange = {onPostChange} newPostText = {props.state.newPostText} />
    </div>
  );

  }

export default PostFormContainer;