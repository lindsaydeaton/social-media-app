import React from 'react';
import {Comment} from "./Comment";

export function Comments({ post, onClickHype, hypedClass, isHyped }) {
  return (
    <div>
      {post.comments.map((comment) => {
        return (
          <Comment
            key={comment.commentsId}
            comment={comment}
            hypedClass={hypedClass}
            onClickHype={onClickHype}
            isHyped={isHyped}
          />
        );
      })}
    </div>
  );
}

