import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ThemeContext } from './ThemeContext';
const FetchSinglePost = () => {
  const { theme } = useContext(ThemeContext);
  const[post,setPost]=useState({})
  const[id,setId]=useState(0)
  const[buttonClicked,setButtonClicked]=useState(0)

  const handleClick=()=>{
    setButtonClicked(id)
  }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClicked}`)
    .then((result) => {
        setPost(result.data)
    }).catch((err) => {
        
    });
  },[buttonClicked])
  return (
    <div
      // style={{
      //   background: theme === "light" ? "#fff" : "#333",
      //   color: theme === "light" ? "#000" : "#fff",
      // }}
    >
        <input type="text" onChange={(e)=>setId(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
        <h1>{post.title}</h1>
    </div>
  )
}

export default FetchSinglePost