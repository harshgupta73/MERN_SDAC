import React from 'react'
import { BrowserRouter,NavLink,Link,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Conditional1 from './components/Conditional1'
import Conditional2 from './components/Conditional2'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import UseState_ex1 from './components/UseState_ex1'
import UseState_ex2 from './components/UseState_ex2'
import ListRendering from './components/ListRendering'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/conditional1' element={<Conditional1 isLoggedIn={true}/>} />
          <Route path='/conditional2' element={<Conditional2 isLoggedIn={false}/>} />
          <Route path='/usestate' element={<UseState_ex1/>} />
          <Route path='/usestate2' element={<UseState_ex2/>} />
          <Route path='/listRendering' element={<ListRendering/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App