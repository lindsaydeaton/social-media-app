import React, { useState } from "react";
import "./PostInput.css";

export function PostInput({ data, setData, onToggleMenu }) {
  const [newPost, setNewPost] = useState('');

  const onChangePost = (e) => {
    setNewPost(e.target.value);
  }

  const handleNewPost = (e) => {
    e.preventDefault()
    const idNumber = data.posts.length + 1;

    const formattedPost = {
      postId: idNumber,
      post: newPost,
      postDate: new Date().toLocaleDateString(),
      postLikeNo: 0,
      postShareNo: 0,
      noOfComments: 0,
      views: 0,
      liked: false,
      comments: [],
    };
    setData({
      ...data, posts: [formattedPost, ...data.posts]
    })
    localStorage.setItem(
      "allInfo",
      JSON.stringify({
        ...data,
        posts: [formattedPost, ...data.posts],
      })
    );
    setNewPost('');
  }

  return (
    <div className="postInput" onClick={onToggleMenu}>
      <form className="form" onSubmit={handleNewPost}>
        <input
          value={newPost}
          type="text"
          name="inputStatus"
          className="inputStatus"
          placeholder=" What's on your mind?"
          onChange={onChangePost}
        />
        <div className="iconSpacing">
          <div className="medias">
           <button className="iconText"><span className="material-icons-outlined photoIcon">camera_alt</span>
         Add Media</button>
           <button className="iconText"><span className="material-icons-outlined photoIcon">videocam</span>
         Go Live</button>
</div>
          <button
            disabled={!newPost}
            type="submit"
            formMethod="post"
            name="submitPost"
            value="Post"
            className="postButton"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
