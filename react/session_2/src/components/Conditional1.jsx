import React from 'react'

const Conditional1 = ({isLoggedIn}) => {
  if(isLoggedIn){
    return <h1>Login successfull...</h1>
  }
  else{
    return <h1>Login failed..</h1>
  }
}

export default Conditional1