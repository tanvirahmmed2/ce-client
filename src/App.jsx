import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Footer from './layout/Footer'
import Home from './layout/Home'

const App = () => {
  return (
    <div className='w-full relative overflow-x-hidden'>
      <Navbar />
      <Sidebar />
      <div className='w-full min-h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />

    </div>
  )
}

export default App
