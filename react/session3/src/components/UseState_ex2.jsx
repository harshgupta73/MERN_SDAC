import React, { useState } from 'react'

const UseState_ex2 = () => {
    const [user,setUser] = useState({uname:'',pass:0})
  
    return (
    <div>
        Username:    <input type="text" onChange={(e)=>setUser({...user,uname:e.target.value})} />
        Password:    <input type="number" onChange={(e)=>setUser({...user,pass:e.target.value})} />
        <h1>--{user.uname}--{user.pass}</h1>
    </div>
  )
}

export default UseState_ex2