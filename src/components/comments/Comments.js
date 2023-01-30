import React from 'react';
import {Comment} from "./Comment";

export function Comments({ post, onClickLike, LikedClass, isLiked }) {
  return (
    <div>
      {post.comments.map((comment) => {
        return (
          <Comment
            key={comment.commentsId}
            comment={comment}
            LikedClass={LikedClass}
            onClickLike={onClickLike}
            isLiked={isLiked}
          />
        );
      })}
    </div>
  );
}

