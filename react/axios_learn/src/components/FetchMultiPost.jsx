import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ThemeContext } from './ThemeContext';
const FetchMultiPost = () => {
  const { theme } = useContext(ThemeContext);
  const[posts,setPosts]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
        setPosts(result.data)
    }).catch((err) => {
        console.log(err)
    });
  },[])

  return (
    <div
        // style={{
        //     background: theme === "light" ? "#fff" : "#333",
        //     color: theme === "light" ? "#000" : "#fff",
        // }}
    >
        <ul>
            {
                posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default FetchMultiPost