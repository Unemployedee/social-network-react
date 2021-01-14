import postStyle from './postStyle.module.css'


function Post (props) {
return (
<div className={postStyle.postList__post}>
<img width="40px" height="40px" className={postStyle.postList__postAvatar} src="https://static.wikia.nocookie.net/d0b1d0b0d0bbd0b4d0b5d0b6d0b5d0bfd0b5d0b4d0b8d18f/images/e/e5/%D0%93%D0%B5%D0%BD%D0%B0_%D0%93%D0%BE%D1%80%D0%B8%D0%BD.jpg/revision/latest/top-crop/width/360/height/450?cb=20200515100335&path-prefix=ru" alt="аватарка" />
<p className={postStyle.postList__postText}>{props.text}</p>
<p className = {postStyle.likesCount}>{props.likesCount} нравится</p>
</div>
);
}

export default Post;