import React from 'react';
import "./ReactionBar.css";

export function ReactionBar({ setViewingComments, viewingComments, post, onClickHype, hypedClass, isHyped }) {

  const handleGetComments = (event) => {
    event.preventDefault()
      if (post.comments.length > 0) {
        setViewingComments(!viewingComments);
      }
  }
  
const addHype = post.postHypeNo + 1;
  return (
    <>
      <div className="reactionsBar">
        <button onClick={onClickHype} className="reactionsButton" type="submit">
          <span class={`${hypedClass} material-icons-outlined icon hypesIcon`}>
            water_drop
          </span>
          <p className="number">
            {!isHyped ? post.postHypeNo : addHype} <span className="words">Hypes</span>
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