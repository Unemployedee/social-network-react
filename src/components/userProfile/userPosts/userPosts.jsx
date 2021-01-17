// import { updateNewPostText } from '../../../redux/state';
import PostFormContainer from './postForm/postFormContainer'
import PostsList from './PostsList/postsList'

function UserPosts (props) {
   debugger;
    return (
        <div>
        <PostFormContainer state = {props.state}  dispatch = {props.dispatch}/>
        <PostsList postsListData = {props.state.profilePage.postsListData}/>
        </div>
    );
}
export default UserPosts;