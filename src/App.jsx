

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer/Footer'
import Tourism from './pages/Tourism'
import Tour from './pages/Tour'
import SignUp from './pages/SignUp'
import ScrollToTop from './pages/ScrollToTop'

function App() {

  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/tourism' element={<Tourism/>}/>
      <Route path='/tour' element={<Tour/>}/>
       <Route path='/sign-up' element={<SignUp/>}/>
     </Routes>
   
    <Footer/>
     </>
  )
}

export default App
