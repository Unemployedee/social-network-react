import postForm from "./postForm.module.css";
import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../../redux/profileReducer";

function PostsForm(props) {
  let postTextArea = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
    debugger;
  };

  let onPostChange = () => {
    let text = postTextArea.current.value
    props.dispatch(updateNewPostTextCreator(text));
  };


  return (
  
    <div className={postForm.postsForm}>
      <h3 className={postForm.postsForm__header}>Мои посты</h3>
      <textarea
        onChange={onPostChange}
        value={props.newPostText} // боже мой
        ref={postTextArea}
        className={postForm.postsForm__input}
        placeholder="Твои новости.."
      />
      <button onClick={addPost} className={postForm.postsForm__btn}>
        Отправить
      </button>
    </div>
  );
}

export default PostsForm;
