import React, { useState } from 'react'

const UseState_ex1 = () => {
    const [a,setA] = useState(10)
    const [title,setTitle] = useState('Click me')
    return (
    <div>
        <h1>{a}</h1>
        <button onClick={()=>setA(a+1)}>Increment</button>
        <button onClick={()=>setTitle('Clicked')}>{title}</button>
    </div>
)
}


export default UseState_ex1
