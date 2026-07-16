import './App.css'
import {BrowserRouter,NavLink,Link,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Props_ex from './components/Props_ex'
import Props_ex2 from './components/Props_ex2'
import Conditional1 from './components/Conditional1'
import Conditional2 from './components/Conditional2'
import SwitchEx from './components/SwitchEx'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/props" element={<Props_ex name="harsh" age={23} />} />
          <Route path='/props2' element={<Props_ex2 name="sara" age={23} />} />
          <Route path="/if_rendering" element={<Conditional1 isLoggedIn={true}/>} />
          <Route path="/conditional2" element={<Conditional2 isLoggedIn={false}/>} />
          <Route path="/switch" element={<SwitchEx role="student"/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
