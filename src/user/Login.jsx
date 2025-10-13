import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Login = () => {
  const { setUser } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', formData, {
        withCredentials: true
      })
      toast.success(response.data.message)
      setUser(response.data.user)
      setFormData({
        email: '',
        password: ''
      })
      window.location.replace('/profile');
    } catch (error) {
      toast.error(error.response.data.message || 'Server error')
    }
  }
  return (
    <section className='w-full flex items-center justify-center p-6'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className='w-full lg:w-3/4 h-auto  bg-gradient-to-br from-emerald-600 to-cyan-700 text-white flex flex-col md:flex-row items-center justify-center rounded-lg overflow-hidden'>
        <div className='w-full flex flex-col items-center justify-center gap-2 py-6 text-center'>
          <h1>Welcom back to</h1>
          <h1 className='text-xl font-semibold'>Climate Change and Impact Resonance Lab</h1>
          <p>Login to your portal and contribute for the world</p>
          <Link to='/registration' className='text-xs mt-6 italic'>New Member?</Link>
        </div>
        <div className='w-full h-auto flex flex-col p-4 items-center justify-center bg-gray-200 text-black'>
          <form onSubmit={HandleSubmit} className='w-full flex flex-col gap-4 items-center justify-center'>
            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.email} />
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.password} />
            </div>
            <button type='submit' className='bg-emerald-500 text-white p-1 px-3 rounded-xl'>Login</button>
          </form>
          <Link to='/recover' className='mt-6 text-red-500 text-xs'>Forgot password</Link>
        </div>
      </motion.div>

    </section>
  )
}

export default Login
