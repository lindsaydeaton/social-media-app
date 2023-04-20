import React, { useState } from 'react';
import { ReactionBar } from "../reactions/ReactionBar.js";
import { CommentInput } from "../inputBars/CommentInput.js";
import { Comments } from "../comments/Comments.js";
import "./Post.css";

export function Post({ data, post, setData, theDate}) {
  // const [viewingComments, setViewingComments] = useState(false);
  //   const [isLiked, setIsLiked] = useState('');
  //   const [, setCountIsLiked] =useState('');

    //if isLiked is true, set className to "liked" else nothing (to apply red color icon)
    // const likedClass = isLiked ? "liked" : "";

    // const onClickLike = () => {
    //   //if liked is true, when clicking set it to false and decrease the count by one, else change it to true and increase the count by one
    //   isLiked ? setIsLiked(false) && setCountIsLiked(post.postLikedNo -1) : setIsLiked(true) && setCountIsLiked(post.postLikedNo + 1)
    // };

  return (
    <div>
      <div className="largeCard">
        <div className="tripleDot">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.875 20.5C21.875 19.4844 21.0156 18.625 20 18.625C18.9453 18.625 18.125 19.4844 18.125 20.5C18.125 21.5547 18.9453 22.375 20 22.375C21.0156 22.375 21.875 21.5547 21.875 20.5ZM26.5625 18.625C25.5078 18.625 24.6875 19.4844 24.6875 20.5C24.6875 21.5547 25.5078 22.375 26.5625 22.375C27.5781 22.375 28.4375 21.5547 28.4375 20.5C28.4375 19.4844 27.5781 18.625 26.5625 18.625ZM13.4375 18.625C12.3828 18.625 11.5625 19.4844 11.5625 20.5C11.5625 21.5547 12.3828 22.375 13.4375 22.375C14.4531 22.375 15.3125 21.5547 15.3125 20.5C15.3125 19.4844 14.4531 18.625 13.4375 18.625Z"
              fill="#12151D"
              fillOpacity="0.6"
            />
          </svg>
        </div>

        <div className="invidualCard">
          <div className="topOfCard">
            <img className="imgBubble" src={data.picURL} alt="user" />
            <div className="headings">
              <p className="user">{data.username}</p>
              <p className="date">{post.postDate}</p>
            </div>
          </div>
          <div className="post">
            <p>{post.post}</p>
            {/* passing setViewingComments so the cards state can show comments when clicked, passing post so the reactions data can show for the specific ID's post */}
            {/* <ReactionBar
              setViewingComments={setViewingComments}
              viewingComments={viewingComments}
              post={post}
              likedClass={likedClass}
              onClickLike={onClickLike}
              isLiked={isLiked}
            /> */}
            {/* <CommentInput
              data={data}
              setData={setData}
              post={post}
              setViewingComments={setViewingComments}
              theDate={theDate}
            /> */}

            {/* {viewingComments ? (
              <Comments
                likedClass={likedClass}
                onClickLike={onClickLike}
                post={post}
                isLiked={isLiked}
              />
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
