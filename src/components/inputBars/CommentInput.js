import React, { useState } from "react";
import "./CommentInput.css";

export function CommentInput({ data, setData, setViewingComments, post }) {
  const [, setEditing] = useState(false);
  const [newComment, setNewComment] = useState("");
  


  const handleOnChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleNewComment = (e) => {
    e.preventDefault();

      const idNumber = parseInt(
        `${post.postId}${post.comments.length + 1}`,
        10
      );

      //hard coding who is logged in
      const myUsername = data.username;
      const myUserPic = data.picURL;
      
    const addComment = post.noOfComments + 1;

    const formattedComment = {
      commentsId: idNumber,
      date: new Date().toLocaleDateString(),
      username: myUsername,
      picURL: myUserPic,
      comment: newComment,
      likes: 0,
      replies: 0,
      shares: 0,
      liked: false,
    };
    const posts = data.posts;

    const newPosts = posts.map((onePost) => {
      return (
        onePost.postId === post.postId ? { ...onePost, noOfComments: addComment, comments: [formattedComment, ...onePost.comments] } : onePost)
    })
    
    localStorage.setItem(
      "allInfo",
      JSON.stringify({
        ...data,
        posts: newPosts,
      })
    );
    setData({
      ...data,
      posts: newPosts,
    });

    if (post.comments.length > 0) {
      setViewingComments(true);
    }
    setEditing(true);
    setNewComment("");
  };


  return (
    <div className="commentBar">
      <form onSubmit={handleNewComment}>
        <span class="material-icons-outlined commentBubble">
          chat_bubble_outline
        </span>
        <input
          type="text"
          className="inputComment"
          value={newComment}
          onChange={handleOnChangeComment}
          placeholder="Add comment"
        />
        <button
          disabled={!newComment}
          type="submit"
          class="material-icons-outlined"
        >
          add_circle_outline
        </button>
      </form>
    </div>
  );
}
