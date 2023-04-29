import React, { useEffect } from 'react';
import { Post } from './Post.js';

export function Posts({ setData, data, theDate }) {
  useEffect(() => {
    console.log('data in posts', data);
    //sort posts so the newest one is always at the top
    const sortedPosts = data.posts?.sort(
      function (a, b) {
        // Turn strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.postDate) - new Date(a.postDate);
      },
      [data]
    );
    setData({ ...data, sortedPosts });
  }, []);
  return (
    <>
      {
        /* mapping through data on localStorage to show one users data */
        data.posts?.map((post) => {
          return (
            //passing the key for prop of '.map', passing setData to update state on certain components, passing the individuals data to render to page.
            <Post
              key={post.postId}
              setData={setData}
              data={data}
              post={post}
              theDate={theDate}
            />
          );
        })
      }
    </>
  );
}
