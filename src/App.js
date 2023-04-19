import './App.css';
import React, {useState, useEffect} from 'react';
import { Posts } from './components/posts/Posts.js';
import { PostInput } from './components/inputBars/PostInput.js';
import { HeaderBar } from './components/header/HeaderBar.js';
import User from "./mockData/data.json";


function App() {
  const [data, setData] = useState(User.user)
  const [posts, setPosts] = useState(User.user.posts)

  useEffect(() => {
    //checking if user has been here, before, call it "all info".
    const prevSession = JSON.parse(localStorage.getItem('allInfo'))
    //setting the data in localStorage
    prevSession ? setData(prevSession) : 
      localStorage.setItem("allInfo", JSON.stringify(User.user));
  }, [])

  useEffect(() => {
    //checking if user has been here, before, call it "all posts".
    const prevSession = JSON.parse(localStorage.getItem('allPosts'))
    //setting the posts data in localStorage
    prevSession ? setPosts(prevSession) : 
      localStorage.setItem("allPosts", JSON.stringify(User.user.posts));
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
    const theDate= mm + '/' + dd + '/' + yyyy;
   

  return (
    <div className="App">
      {/* passing data and setData to headerBar so that ProfileMenu and ProfileModal can use */}
      <HeaderBar data={data} setData={setData} />
      <PostInput theDate={theDate} posts={posts} setPosts={setPosts} />
      <Posts data={data} setData={setData} posts={posts} theDate={theDate} />
    </div>
  );
}

export default App;
