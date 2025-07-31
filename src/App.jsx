import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './component/Navbar'
import Collection from './pages/Collection'



const App = () => {
  return (
    <div className=' min-w-fit  px-4 lg:px-[9vw] md:px-[6vw] sm:px-[4vw]   '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path = '/collection' element= {<Collection/>}/>
        
        <Route path='/services' element={<Services />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />


        
      </Routes>
    </div>
  )
}

export default App