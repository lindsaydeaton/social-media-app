import './App.css';
import React, { useState, useEffect } from 'react';
import { Posts } from './components/posts/Posts.js';
import { PostInput } from './components/inputBars/PostInput.js';
import { HeaderBar } from './components/header/HeaderBar.js';
import User from "./mockData/data.json";


function App() {
  const [data, setData] = useState(User.user)

  useEffect(() => {
    console.log(User.user);
    //checking if user has been here, before, call it "all info".
    const prevSession = JSON.parse(localStorage.getItem('allInfo'))
    //setting the data in localStorage
    let tempData = prevSession ? prevSession : User.user

    const posts = tempData.posts;
    //sort posts by date
    const sortedPosts = posts.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.postDate) - new Date(a.postDate);
    });
    tempData = {...tempData, posts: sortedPosts}
    setData(tempData)
    localStorage.setItem("allInfo", JSON.stringify(tempData));
  }, [])

  //handle date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '' + mm;
  }
  const theDate = mm + '/' + dd + '/' + yyyy;


  return (
    <div className="App">
      {/* passing data and setData to headerBar so that ProfileMenu and ProfileModal can use */}
      <HeaderBar data={data} setData={setData} />
      <PostInput theDate={theDate} setData={setData} data={data} />
      <Posts data={data} setData={setData} theDate={theDate} />
    </div>
  );
}

export default App;
