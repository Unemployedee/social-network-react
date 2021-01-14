import userInfoStyle from './userInfoStyle.module.css'




function UserInfo () {
return(
<div className={userInfoStyle.userInfo}>
        <img className={userInfoStyle.userInfo__avatar}
          src="https://static.wikia.nocookie.net/d0b1d0b0d0bbd0b4d0b5d0b6d0b5d0bfd0b5d0b4d0b8d18f/images/e/e5/%D0%93%D0%B5%D0%BD%D0%B0_%D0%93%D0%BE%D1%80%D0%B8%D0%BD.jpg/revision/latest/top-crop/width/360/height/450?cb=20200515100335&path-prefix=ru"
          alt="avatar"
        />
        <div className={userInfoStyle.userInfo__text}>
          <p className={`${userInfoStyle.userInfo__textEl} ${userInfoStyle.userInfo__name}`}>Имя: Геннадий Горин</p>
          <p className={`${userInfoStyle.userInfo__textEl} ${userInfoStyle.userInfo__dateOfBirth}`}>Дата рождения: 11 DEC</p>
          <p className={`${userInfoStyle.userInfo__textEl} ${userInfoStyle.userInfo__city}`}>Город: Орел</p>
          <p className={`${userInfoStyle.userInfo__textEl} ${userInfoStyle.userInfo__education}`}>Образование: Мемное</p>
          <p className={userInfoStyle.userInfo__textEl}>Веб-сайт: <a href="https://www.youtube.com/channel/UCreZ0TYdHi-i7zhi97U5T1Q" className={userInfoStyle.userInfo__webSite}>Ютуб</a></p>
        </div>
      </div>
);
}

export default UserInfo;