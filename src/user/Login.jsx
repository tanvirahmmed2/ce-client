import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const HandleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <section className='w-full flex items-center justify-center p-6'>
      <div className='w-full lg:w-3/4 h-auto  bg-gradient-to-br from-emerald-600 to-cyan-700 text-white flex flex-col md:flex-row items-center justify-center rounded-lg overflow-hidden'>
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
              <input type="email" id='email' name='email'  required className='w-full border-2 outline-none p-1 px-3'/>
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' required className='w-full border-2 outline-none p-1 px-3'/>
            </div>
            <button type='submit' className='bg-emerald-500 text-white p-1 px-3 rounded-xl'>Login</button>
          </form>
          <Link to='/recover' className='mt-6 text-red-500 text-xs'>Forgot password</Link>
        </div>
      </div>
      
    </section>
  )
}

export default Login
