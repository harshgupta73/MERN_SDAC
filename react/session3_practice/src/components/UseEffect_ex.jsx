import React, { useEffect, useState } from 'react'

const UseEffect_ex = () => {
  const[count,setCount]=useState(0)
  useEffect(()=>{
    document.title=`Count is:${count}`
  })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
        <hr />
    </div>
  )
}

export default UseEffect_ex