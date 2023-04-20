import React from 'react';
import "./ReactionBar.css";

export function ReactionBar({ setViewingComments, viewingComments, post, onClickLike, likedClass, isLiked, setData, data }) {

  const handleGetComments = (event) => {
    event.preventDefault()
      if (post.comments.length > 0) {
        setViewingComments(!viewingComments);
      }
  }
//
  const handleLikeStored = (e) => {
    e.preventDefault()
    const addLike = post.postLikeNo + 1;

    const formattedPost = {
      postId: post.postId,
      post: post.post,
      postDate: post.postDate,
      postLikeNo: addLike,
      postShareNo: post.postSharedNo,
      noOfComments: post.noOfComments,
      views: post.views,
      liked: true,
      comments: post.comments,
    };

    setData({...data, posts: [
      formattedPost, ...data.posts
    ]})
    
    localStorage.setItem(
      "allInfo",
      JSON.stringify({...data, posts: [
        formattedPost, ...data.posts
      ]})
    );
  }

  return (
    <>
      <div className="reactionsBar">
        <button onClick={onClickLike} className="reactionsButton" type="submit">
          <span className={`${likedClass} material-icons-outlined icon LikesIcon`}>
            water_drop
          </span>
          <p className="number">
            {/* {!isLiked ? post.postLikeNo : addLike} <span className="words">Likes</span> */}
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