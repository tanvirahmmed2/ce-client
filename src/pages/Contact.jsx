import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {toast} from 'react-toastify'


import { CiClock1, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/api/message/send", formData)

      toast.success(response.data.message);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error((error.response?.data?.message || "Server error"));
    }
  }
  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8 bg-gray-50'>
      <h1 className='text-4xl font-bold text-emerald-600'>Contact Us</h1>
      <p className='text-base sm:text-lg text-center'>Get in touch with our team for collaborations and inquiries</p>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='w-full flex items-start justify-start flex-col gap-6'>


          <div className='w-auto flex flex-row items-start justify-center gap-4 '>
            <p className='text-4xl text-red-500'><CiLocationOn /></p>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-lg font-bold'>Address</h1>
              <p>Civil Engineering Building</p>
              <p>Mymensingh Engineering College</p>
            </div>
          </div>


          <div className='w-auto flex flex-row items-start justify-center gap-4 '>
            <p className='text-4xl text-emerald-500'><CiMail /></p>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-lg font-bold'>Email</h1>
              <a href='mailto:info@ccirl.edu'>info@ccirl.edu</a>
              <a href="research@ccirl.edu">research@ccirl.edu</a>
            </div>
          </div>


          <div className='w-auto flex flex-row items-start justify-center gap-4 '>
            <p className='text-4xl text-cyan-500'><CiPhone /></p>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-lg font-bold'>Phone</h1>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 123-4568 (Fax)</p>
            </div>
          </div>


          <div className='w-auto flex flex-row items-start justify-center gap-4 '>
            <p className='text-4xl text-blue-500'><CiClock1 /></p>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-lg font-bold'>Time</h1>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>

        </div>


        <div className='w-full flex items-start justify-center flex-col gap-2 p-6 bg-white rounded-xl shadow-lg'>
          <p className='text-2xl font-semibold'>Send us a Message</p>
          <form onSubmit={handleSubmit} className='w-full flex flex-col items-start justify-center gap-4'>
            <div className='w-full flex flex-col items-start justify-center gap-2 '>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' required className='w-full px-4 p-2 border-2 outline-none' onChange={handleChange} value={formData.name} />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-2 '>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' required className='w-full px-4 p-2 border-2 outline-none' onChange={handleChange} value={formData.email} />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-2 '>
              <label htmlFor="subject">Subject</label>
              <input type="text" name='subject' id='subject' required className='w-full px-4 p-2 border-2 outline-none' onChange={handleChange} value={formData.subject} />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-2 '>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" className='w-full px-4 p-2 border-2 outline-none resize-none' onChange={handleChange} value={formData.message}></textarea>
            </div>
            
            <button type='submit' className='w-full bg-emerald-500 rounded-lg text-white hover:bg-emerald-600 p-1'>Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
