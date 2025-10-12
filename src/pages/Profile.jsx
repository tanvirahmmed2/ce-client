import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'


import { RxAvatar } from "react-icons/rx";
import { FaMapMarkedAlt } from "react-icons/fa";
import { ThemeContext } from '../components/Context';
import axios from 'axios';

const Profile = () => {
  const { user, author } = useContext(ThemeContext)

  const [add, setAdd]= useState(false)



  const [publicationData, setPublicationData]= useState({
    authorId: user._id,
    title:'',
    description:'',
    link:''
  })

  const handleChange=(e)=>{
    const {name, value}= e.target
    setPublicationData((prev)=>({...prev, [name]: value}))
  }

  const addPublication=async(e)=>{
    e.preventDefault()
    try {
      const response= await axios.put('http://localhost:5000/api/user/addpublication', publicationData, {withCredentials:true})
      console.log(response.data.message)
    } catch (error) {
      console.log('Failed to add publication')
    }
  }



  return (
    <section className='w-full min-h-screen p-4 sm:p-6   flex flex-col items-center gap-10 justify-center'>

      <div className='w-full h-auto'>
        <div className='w-full  h-32 bg-emerald-600/90 text-white shadow-sm rounded-sm flex items-center justify-center p-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>Welcome to <span className='text-yellow-300'>CCIRL</span></h1>
        </div>

        <div className='w-full  bg-white shadow-lg rounded-sm p-8 flex flex-col md:flex-row items-center justify-around gap-8 border border-gray-100'>

          <div className='flex-shrink-0'>
            {
              user.profileImage ? <img src={user.profileImage} alt="" /> : <p className='text-9xl text-emerald-500 border-4 border-emerald-500 rounded-full p-2 bg-white'><RxAvatar /></p>
            }
          </div>

          <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold text-gray-800 tracking-tight'>{user.name}</h1>
            <p className='italic font-medium text-emerald-600 mb-2'>{user.role}</p>
            <p className='text-lg text-gray-600'>Studies at Mymensingh Engineering College</p>
          </div>
        </div>

        <div className='w-full  bg-white shadow-sm rounded-sm p-6 border border-gray-100'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>Personal & Academic Details</h2>
          <div className='flex flex-col gap-3 text-gray-700'>
            <p className='font-medium'>Currentry Studying in BSc in Engineering in Civil Engineering</p>
            <p><span className='font-semibold'>Date of Birth:</span> {user.dateOfBirth}</p>
            <p><span className='font-semibold'>Email:</span> <span className='text-emerald-600 '>{user.email}</span></p>
            <p><span className='font-semibold'>Phone:</span> {user.phone}</p>
            <p className='flex flex-row gap-2 items-center font-semibold text-gray-600'><FaMapMarkedAlt className='text-red-500' /> {user.country}</p>
          </div>
        </div>

        {
          author ? <div className='w-full  flex flex-col gap-4 bg-white shadow-sm rounded-sm p-6 border border-gray-100'>
            <h2 className='text-2xl font-semibold text-gray-700'>Contributions</h2>

            <div className='w-full grid grid-cols-4 p-3 border-b-2 font-bold text-gray-600 bg-gray-50 rounded-t-lg text-sm sm:text-base'>
              <p className='w-2/5 text-left'>Title</p>
              <p className='hidden sm:block w-1/5 text-left'>Description</p>
              <p className='w-1/5 text-right'>Abstruct</p>
              <p>Action</p>
            </div>
            {
              user.publications && user.publications.map((paper) => {
                const { title, _id, link, description } = paper
                return <div key={(_id)} className='w-full grid grid-cols-4'>
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <a href={link}>Abstruct</a>
                  <button>Remove</button>
                </div>
              })
            }
            <button onClick={()=> setAdd(!add)} className='text-emerald-600 font-medium hover:text-emerald-800 cursor-pointer mt-2 text-center'>Add more+</button>


            {
              add? <form onSubmit={addPublication} className='w-full p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-5'>
              <h1>Add Publication Data</h1>
              <div>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' id='title' onChange={handleChange} value={publicationData.title} className='w-full border border-gray-400 rounded-md p-2 outline-none  transition bg-white text-gray-800' placeholder='publication title'/>
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" required onChange={handleChange} value={publicationData.description} className='w-full border border-gray-400 rounded-md p-2 outline-none  transition bg-white text-gray-800'></textarea>
              </div>
              <div>
                <label htmlFor="link">Abstruct Link</label>
                <input type="text" name='link' id='link' required onChange={handleChange} value={publicationData.link} className='w-full border border-gray-400 rounded-md p-2 outline-none  transition bg-white text-gray-800' placeholder='please enter abstruct link of your publication'/>
              </div>
              <button type='submit' className='py-2 px-6 font-semibold text-white bg-black transition duration-300 rounded-full shadow-md transform hover:scale-105'>Submit</button>
            </form> :<></>
            }
          </div>
            : <p></p>
        }
        <div className='flex flex-row items-center justify-center gap-6 p-3   mt-4 mb-10'>

          <Link
            to='/updateprofile'
            className='py-2 px-6 font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition duration-300 rounded-full shadow-md transform hover:scale-105'
          >
            Update Profile
          </Link>

          <button
            className='py-2 px-6 font-semibold text-white bg-red-500 hover:bg-red-600 transition duration-300 rounded-full shadow-md transform hover:scale-105'
          >
            Delete ID
          </button>
        </div>
      </div>


    </section>
  )
}

export default Profile