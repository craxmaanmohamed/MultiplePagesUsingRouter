import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Routes ,Route ,Link } from 'react-router-dom'

function App() {

  return (

    <>
    <nav>
      <h3>MultiplePagesUsingRouter</h3>
       <div className='Links'>
        <Link className='Link' to="/">Home</Link>
        <Link className='Link' to="/About">About</Link>
        <Link className='Link' to="/Contact">Contact</Link>

      </div>
      

    </nav>
       
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route path="About" element={<About/>}></Route>
      <Route path="Contact" element={<Contact/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
