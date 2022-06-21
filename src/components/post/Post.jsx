import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import "./Post.css";
import { Users } from "../../dummyData";


const Post = ({ post }) => {
  const [like, setLike ] = useState(post.like)
  const [isLike, setIsLike] = useState(false)

  const handleClick = () => {
    setLike(isLike ? like - 1 : like + 1)
    setIsLike(!isLike)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((user) => user.id === post.id)[0].profilePicture}
              alt=""
              className="postProfileImage"
            />
            <span className="postUserName">{Users.filter((user) => user.id === post.id)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" alt="" className="likeIcon" onClick={handleClick} />
            <span className="postLikeCounter">
              {like}人いいねをしました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
