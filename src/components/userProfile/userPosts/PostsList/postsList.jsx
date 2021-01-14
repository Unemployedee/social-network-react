import postsListStyle from './postsListStyle.module.css'
import Post from './Post/post'



function PostsList(props) {
    let postsListArray = props.postsListData.map (post => <Post text = {post.text} likesCount = {post.likesCount} />)
    return (
        <div className={postsListStyle.posts}>
            {postsListArray}
            </div>
    );
}

export default PostsList;