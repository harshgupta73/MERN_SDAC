import React, { useState } from 'react'

const UseState_arr = () => {
  const[emps,setEmps]=useState([])
  const[ename,setEname]=useState('')
  const[esal,setEsal]=useState(0)

  const handleClick=()=>{
    setEmps([
        ...emps,
        {
            id:emps.length+1,
            name:ename,
            sal:esal
        }
    ])
  }
  return (
    <div>
        Username: <input type="text" onChange={(e)=>setEname(e.target.value)}/>
        Salary: <input type="number" onChange={(e)=>setEsal(e.target.value)}/>
        <button onClick={handleClick}>Click</button>

        <ul>
            {
                emps.map((emp)=>(
                    <li key={emp.id}>ID:{emp.id} -- Name:{emp.name} -- Sal:{emp.sal}  </li>
                ))
            }
        </ul>
        <hr />
    </div>

  )
}

export default UseState_arr