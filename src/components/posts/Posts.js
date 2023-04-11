import React from "react";
import { Post } from "./Post.js"

export function Posts({ setData, data, posts }) {

  return (
    <>
      {/* mapping through data on localStorage to show one users data */}
          {posts.map((post) => {
            return (
              //passing the key for prop of '.map', passing setData to update state on certain components, passing the individuals data to render to page.
               <Post key={post.postId} setData={setData} data={data} post={post} />
             );
      })}
            </>
  );
}
