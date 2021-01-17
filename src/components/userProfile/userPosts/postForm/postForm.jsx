import postForm from "./postForm.module.css";
import React from "react";

function PostsForm(props) {
  let postTextArea = React.createRef();

  let addPost = () => {
    props.addPost();
    // props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let text = postTextArea.current.value
    props.onPostChange(text);
    // props.dispatch(updateNewPostTextCreator(text));
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