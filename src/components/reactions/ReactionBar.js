import React from 'react';
import "./ReactionBar.css";

export function ReactionBar({ setViewingComments, viewingComments, post, onClickLike, LikedClass, isLiked }) {

  const handleGetComments = (event) => {
    event.preventDefault()
      if (post.comments.length > 0) {
        setViewingComments(!viewingComments);
      }
  }
  
const addLike = post.postLikeNo + 1;
  return (
    <>
      <div className="reactionsBar">
        <button onClick={onClickLike} className="reactionsButton" type="submit">
          <span class={`${LikedClass} material-icons-outlined icon LikesIcon`}>
            water_drop
          </span>
          <p className="number">
            {!isLiked ? post.postLikeNo : addLike} <span className="words">Likes</span>
          </p>
        </button>
        <button
          className="reactionsButton"
          onClick={handleGetComments}
          type="submit"
        >
          <span class="material-icons-outlined icon commentsIcon">
            chat_bubble_outline
          </span>
          <p className="number">
            {post.noOfComments}
            <span className="words"> Comment(s)</span>
          </p>
        </button>
        <button className="reactionsButton" type="submit">
          <span class="material-icons-outlined icon sharesIcon">share</span>
          <p className="number">
            {post.postShareNo} <span className="words">Shares</span>
          </p>
        </button>
        <p className="viewsNumber">
          {post.views} <span className="words">views</span>
        </p>
      </div>
    </>
  );
}