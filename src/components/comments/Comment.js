import React from "react";
import { CommentReactions } from "../reactions/CommentReactions.js";
import "./Comment.css";


export function Comment({ comment, handleLikeStored, LikedClass }) {
  return (
    <div className="commentCard">
      <div className="topOfComment">
        <img className="commentImg" src={comment.picURL} alt="user" />

        <div className="commentsHeading">
          <p className="commentUser">{comment.username}</p>
          <p className="commentDate">{comment.date}</p>
        </div>
      </div>

      <div className="comment">
        <p>{comment.comment}</p>
      </div>
      <CommentReactions
        LikedClass={LikedClass}
        handleLikeStored={handleLikeStored}
        comment={comment}
      />
    </div>
  );
}
