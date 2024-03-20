import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from './pages/About';
import Chatroom from './pages/Chatroom';
import Resources from './pages/Resources';
import Faculty from './pages/Faculty';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
function App() {
 

  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/chatroom' element={<Chatroom/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/faculty' element={<Faculty/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>

     
  )
}


export default App
