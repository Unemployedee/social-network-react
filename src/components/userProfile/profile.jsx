import profileStyle from './profile.module.css'
import UserBg from './userBg/userBg';
import UserInfo from './userInfo/userInfo';
import UserPosts from './userPosts/userPosts';

function Profile(props) {
  return (
    <div className={profileStyle.userProfile}>
      <UserBg />
      <UserInfo/>
      <UserPosts dispatch = {props.dispatch} newPostText = {props.state.newPostText} postsListData = {props.state.postsListData} updateNewPostText = {props.updateNewPostText}/>
    </div>
  
  );
}

export default Profile;
