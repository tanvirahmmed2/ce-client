import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Footer from './layout/Footer'
import Home from './layout/Home'
import Error from './components/Error'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Mission from './pages/Mission'
import Publications from './pages/Publications'
import Library from './pages/Library'
import Register from './user/Register'
import Login from './user/Login'
import Profile from './pages/Profile'
import DashBoard from './pages/DashBoard'
import Recover from './user/Recover'
import Scope from './pages/Scope'
import Notice from './pages/Notice'
import Update from './pages/Update'
import UpdateBox from './components/UpdateBox'
import Projects from './pages/Projects'
import Project from './components/Project'
import Image from './components/Image'
import UserProfile from './pages/UserProfile'

const App = () => {
  return (
    <div className='w-full relative overflow-x-hidden'>
      <Navbar />
      <Sidebar />
      <div className='w-full min-h-[800px] flex items-center justify-center mt-16'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/events' element={<Events/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:id' element={<Project/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/gallery/:id' element={<Image/>} />
          <Route path='/mission' element={<Mission/>} />
          <Route path='/update' element={<Update/>} />
          <Route path='/user/:id' element={<UserProfile/>} />
          <Route path='/update/:id' element={<UpdateBox/>} />
          <Route path='/scope' element={<Scope/>} />
          <Route path='/publications' element={<Publications/>} />
          <Route path='/library' element={<Library/>} />
          <Route path='/registration' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/recover' element={<Recover/>} />
          <Route path='/notice' element={<Notice/>} />

          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
      <Footer />

    </div>
  )
}

export default App
