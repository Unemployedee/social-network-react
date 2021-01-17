import profileStyle from './profile.module.css'
import UserBg from './userBg/userBg';
import UserInfo from './userInfo/userInfo';
import UserPosts from './userPosts/userPosts';

function Profile(props) {
  debugger;
  return (
    <div className={profileStyle.userProfile}>
      <UserBg />
      <UserInfo/>
      <UserPosts state = {props.state}  dispatch = {props.dispatch}/>
    </div>
  
  );
}

export default Profile;
