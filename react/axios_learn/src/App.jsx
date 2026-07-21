import React from 'react'
import FetchMultiPost from './components/FetchMultiPost'
import FetchSinglePost from './components/FetchSinglePost'
import UseReducer from './components/UseReducer'
import './App.css'

const App = () => {
  return (
    <div>
      <FetchMultiPost/>
      <FetchSinglePost/>
      <UseReducer/>
    </div>
  )
}

export default App