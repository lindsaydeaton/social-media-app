import React from 'react';
import "./ReactionBar.css";

export function CommentReactions({ comment, onClickHype, hypedClass, isHyped }) {
  const addHype = comment.hypes + 1;
  
  return (
    <div className="reactionsBar">
      <button onClick={onClickHype} className="reactionsButton" type="submit">
        <span class={`${hypedClass} material-icons-outlined icon hypesIcon`}>
          water_drop
        </span>
        <p className="number">
          {!isHyped ? comment.hypes : addHype} <span className="words">Hypes</span>
        </p>
      </button>
      <button
        className="reactionsButton"
        type="submit"
      >
        <span class="material-icons-outlined icon commentsIcon">
          chat_bubble_outline
        </span>
        <p className="number">
          {comment.replies}
          <span className="words"> Comment(s)</span>
        </p>
      </button>
      <button className="reactionsButton" type="submit">
        <span class="material-icons-outlined icon sharesIcon">share</span>
        <p className="number">
          {comment.shares} <span className="words">Shares</span>
        </p>
      </button>
    </div>
  );
}
