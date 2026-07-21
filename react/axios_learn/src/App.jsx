import React from 'react'
import FetchMultiPost from './components/FetchMultiPost'
import FetchSinglePost from './components/FetchSinglePost'
import UseReducer from './components/UseReducer'
import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import ThemedComponent from './components/ThemedComponent'


const App = () => {
  return (
    <div>
      <ThemeProvider>
        <FetchMultiPost/>
        <FetchSinglePost/>
        <UseReducer/>
        <ThemedComponent/>
      </ThemeProvider>
      
    </div>
  )
}

export default App