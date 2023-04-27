import React from 'react';
import "./ReactionBar.css";

export function CommentReactions({ comment, handleLikeStored, LikedClass, isLiked }) {
  const addLike = comment.likes + 1;
  
  return (
    <div className="reactionsBar">
      <button onClick={handleLikeStored} className="reactionsButton" type="submit">
        <span className={`${LikedClass} material-icons-outlined icon likesIcon`}>
          water_drop
        </span>
        <p className="number">
          {!isLiked ? comment.likes : addLike} <span className="words">likes</span>
        </p>
      </button>
      <button
        className="reactionsButton"
        type="submit"
      >
        <span className="material-icons-outlined icon commentsIcon">
          chat_bubble_outline
        </span>
        <p className="number">
          {comment.replies}
          <span className="words"> Comment(s)</span>
        </p>
      </button>
      <button className="reactionsButton" type="submit">
        <span className="material-icons-outlined icon sharesIcon">share</span>
        <p className="number">
          {comment.shares} <span className="words">Shares</span>
        </p>
      </button>
    </div>
  );
}
