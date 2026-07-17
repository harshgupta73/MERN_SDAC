import React from 'react'

const ListRendering = () => {
    const user = [
        {id:1,name:"harsh"},
        {id:2,name:"omkar"},
        {id:3,name:"shreyash"}
    ]
  return (
    <div>
        <ul>
            {
                user.map((u)=>(
                    <li key={u.id}>{u.id}--{u.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ListRendering