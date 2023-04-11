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
    //setting the data in localStorage
    prevSession ? setPosts(prevSession) : 
      localStorage.setItem("allPosts", JSON.stringify(User.user.posts));
  }, [])

  return (
    <div className="App">
      <HeaderBar/>
      {/* <PostInput data={data} setData={setData} /> */}
      <Posts data={data} setData={setData} posts={posts} />
    </div>
  );
}

export default App;
