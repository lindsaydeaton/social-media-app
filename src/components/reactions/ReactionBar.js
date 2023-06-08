import React from 'react';
import './ReactionBar.css';

export function ReactionBar({
  setViewingComments,
  viewingComments,
  post,
  handleLikeStored,
  likedClass,
}) {
  const handleGetComments = (e) => {
    e.preventDefault();
    if (post.comments.length > 0) {
      setViewingComments(!viewingComments);
    }
  };

  return (
    <>
      <div className="reactionsBar">
        <button
          onClick={handleLikeStored}
          className="reactionsButton"
          type="submit"
        >
          <span
            className={`${likedClass} material-icons-outlined icon LikesIcon`}
          >
            water_drop
          </span>
          <p className="number">
            {post.postLikeNo}
            <span className="words">
              {post.postLikeNo === 1 ? ' Like' : ' Likes'}
            </span>
          </p>
        </button>
        <button
          className="reactionsButton"
          onClick={handleGetComments}
          type="submit"
        >
          <span className="material-icons-outlined icon commentsIcon">
            chat_bubble_outline
          </span>
          <p className="number">
            {post.noOfComments}
            <span className="words"> Comment(s)</span>
          </p>
        </button>
        <button className="reactionsButton" type="submit">
          <span className="material-icons-outlined icon sharesIcon">share</span>
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