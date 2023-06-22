import React from 'react'
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Sport from './components/sport/Sport'
import Diet from './components/diet/Diet'
import Events from './components/events/Events'
import Contact from './components/contacts/Contact'
import About from './components/about/About'

function App() {
  return (
    <div>
      <div>
      <BrowserRouter>
      <Header/>
       <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/sport' element={<Sport/>}/>
        <Route path='/diet' element={<Diet/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/contact' element={<Contact/>}/>

       </Routes>
       <Footer/>      
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
