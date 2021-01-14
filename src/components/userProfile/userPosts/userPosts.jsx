// import { updateNewPostText } from '../../../redux/state';
import PostForm from './postForm/postForm'
import PostsList from './PostsList/postsList'

function UserPosts (props) {
   
    return (
        <div>
        <PostForm dispatch = {props.dispatch} newPostText = {props.newPostText} updateNewPostText = {props.updateNewPostText}/>
        <PostsList postsListData = {props.postsListData}/>
        </div>
    );
}

export default UserPosts;