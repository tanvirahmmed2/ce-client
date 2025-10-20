import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RxAvatar } from "react-icons/rx"
import { FaMapMarkedAlt } from "react-icons/fa"
import { ThemeContext } from '../components/Context'
import axios from 'axios'
import { api } from '../components/api'
import { MdDeleteOutline, MdEdit, MdWorkOutline } from "react-icons/md";
import { MdOutlineLink } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";


const Profile = () => {
  const { user, author } = useContext(ThemeContext)
  const [add, setAdd] = useState(false)

  const [publicationData, setPublicationData] = useState({
    authorId: user._id,
    title: '',
    description: '',
    link: '',
    pdf: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setPublicationData((prev) => ({ ...prev, [name]: files[0] }))
    } else {
      setPublicationData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const addPublication = async (e) => {
    e.preventDefault()
    try {
      const newData = new FormData()
      newData.append('title', publicationData.title)
      newData.append('description', publicationData.description)
      newData.append('link', publicationData.link)
      newData.append('pdf', publicationData.pdf)
      newData.append('authorId', publicationData.authorId)

      const response = await axios.post(
        `${api}/user/addpublication`,
        newData,
        { withCredentials: true }
      )

      toast.success(response.data.message)
      setAdd(false)
      setPublicationData({
        authorId: user._id,
        title: '',
        description: '',
        link: '',
        pdf: null
      })
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add publication')
    }
  }

  const deletePub = async (authorId, pubId) => {
    try {
      const response = await axios.delete(
        `${api}/user/removepublication`,
        {
          data: { authorId, pubId },
          withCredentials: true
        }
      )
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to remove publication')
    }
  }
  const [editData, setEditData] = useState({
    userId: user._id,
    editId: null,
    title: '',
    description: '',
    link: ''
  })

  const handleEdit = (e) => {
    const { name, value } = e.target
    setEditData((prev) => ({ ...prev, [name]: value }))
  }


  const editPublication = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`${api}/user/updatepublication`, editData, { withCredentials: true })
      toast.success(response.data.message)
      setEditData({
        userId: user._id,
        editId: null,
        title: '',
        description: '',
        link: ''
      })
      window.location.replace('/profile')

    } catch (error) {
      toast.error(error.response.data.message)

    }
  }
  return (
    <section className='w-full min-h-screen bg-gray-50 p-2 flex flex-col items-center justify-center'>
      <div className='w-full max-w-[700px] flex flex-col items-center justify-center gap-8'>

        <div className='w-full bg-white rounded-md shadow-md py-10 flex flex-col items-center justify-center'>
          <h1 className='text-xl sm:text-4xl font-extrabold tracking-tight'>
            Welcome to <span className='text-emerald-300'>CCIRL</span>
          </h1>
        </div>

        <div className='w-full bg-white shadow-md rounded-xl p-8 flex flex-col  items-center justify-around gap-8 border border-gray-200'>
          <div className='flex-shrink-0'>
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt="profile"
                className='w-40 h-40 object-cover rounded-full border-4 border-emerald-500 shadow-md'
              />
            ) : (
              <div className='text-9xl text-emerald-500 border-4 border-emerald-500 rounded-full p-2 bg-white'>
                <RxAvatar />
              </div>
            )}
          </div>

          <div className='text-center md:text-left flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-gray-800 tracking-tight'>{user.name}</h1>
            <p className='italic font-medium text-emerald-600 mb-2'>{user.role} {user.post && <span>& {user.post}</span>}</p>
          </div>
        </div>

        <div className='w-full bg-white shadow-md rounded-xl p-2 border border-gray-200'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>
            Personal Details
          </h2>

          <div className='flex flex-col gap-3 text-gray-700 leading-relaxed'>

            {user.education && <div className='w-full flex flex-col items-start justify-start gap-4 p-3 border-2 border-gray-100'>
              <h1 className='text-xl font-semibold'>Education:</h1>
              {user.education.map((edu) => {

                const { _id, degree, institution, field, startYear, endYear } = edu
                const currentYear = new Date().getFullYear()

                return (
                  <div key={_id} className=' rounded-md w-full'>

                    <h1 className=''><IoSchoolOutline /><span className='font-semibold'>{degree}</span> ({`in ${field} `}) at {institution}</h1>

                    <p className='text-sm text-gray-500'>Started: {startYear}</p>
                    {endYear ? <p>
                      {endYear > currentYear ? <span className='text-sm text-gray-500'>Will completed: {endYear}</span> : <span className='text-sm text-gray-500 font-semibold'>Completed: {endYear}</span>}
                    </p> : <p className='text-sm text-gray-500 font-semibold'>Current</p>}
                  </div>
                )
              })}
            </div>}

            {user.work && <div className='w-full flex flex-col items-start justify-start gap-4 p-3 border-2 border-gray-100'>
              <h1 className='text-xl font-semibold'>Carrier:</h1>
              {user.work.map((job) => {
                const { _id, position, company, startYear, endYear } = job
                const currentYear = new Date().getFullYear()
                return (
                  <div key={_id} className='rounded-md  w-full'>
                    <p className=''><MdWorkOutline /> <span className='font-semibold'>{position}</span> at {company}</p>
                    {startYear && <p>Joined {startYear}</p>}
                    {endYear ? <p>
                      {endYear > currentYear ? <span className='text-sm text-gray-500'>Will left: {endYear}</span> : <span className='text-sm text-gray-500 font-semibold'>Left: {endYear}</span>}
                    </p> : <p className='text-sm text-gray-500 font-semibold'>Current</p>}
                  </div>
                )
              })}
            </div>}
            {user.network && <div className='w-full flex flex-col items-start justify-start gap-4 p-3 border-2 border-gray-100'>
              <h1 className='text-xl font-semibold'>Networks:</h1>
              {
                user.network.map((net) => {
                  const { _id, title, link } = net
                  return (
                    <a href={link} key={_id} className='flex flow-row gap-2 items-center'><MdOutlineLink /> {title}</a>
                  )
                })
              }
            </div>}

            <p><span className='font-semibold'>Email:</span> <span className='text-emerald-600 underline'>{user.email}</span></p>
            <p><span className='font-semibold'>Phone:</span> {user.phone}</p>
            <p className='flex flex-row gap-2 items-center font-semibold text-gray-600'>
              <FaMapMarkedAlt className='text-red-500' /> {user.country}
            </p>
          </div>
        </div>

        {author && (
          <div className='w-full bg-white shadow-md rounded-xl  border border-gray-200 flex flex-col gap-4 py-6'>


            <p className='w-full text-center font-semibold text-xl'>Publication</p>
            {user.publications?.length > 0 ? (
              user.publications.map((paper) => {
                const { title, _id, link, description, pdf } = paper
                return (
                  <div className='w-full flex flex-col items-center justify-center gap-1' key={_id}>
                    <div key={_id} className='w-full flex flex-row items-center justify-between px-2 border-b border-gray-100'>
                      <Link to={`/publications/${_id}`} className='font-medium text-gray-800'>{title.slice(0, 13)}...</Link>
                      <p className='text-gray-600 text-sm hidden sm:block'>
                        {description.slice(0, 20)}......
                      </p>
                      <a href={pdf} className='hidden sm:block'>PDF</a>
                      <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-emerald-600 hidden sm:flex font-semibold text-right hover:underline'
                      >
                        Abstract
                      </a>
                      <button
                        onClick={() => deletePub(user._id, _id)}
                        className='text-red-500 hover:text-red-700 font-semibold transition'
                      >
                        <MdDeleteOutline className='hover:scale-105' />
                      </button>
                      <button
                        onClick={() =>
                          setEditData((prev) =>
                            prev.editId === _id
                              ? { editId: null, title: "", description: "", link: "", userId: user._id }
                              : { editId: _id, title, description, link, userId: user._id }
                          )
                        }
                        className='text-red-500 hover:text-red-700 font-semibold transition'
                      >
                        <MdEdit className='hover:scale-105' />
                      </button>
                    </div>
                    {editData.editId === _id && (
                      <div className="mt-3 w-full border-t p-3 flex flex-col gap-3 border-red-200 border-2">
                        <h2 className="font-semibold text-gray-700">Update Publication</h2>
                        <div className='w-fll flex flex-col gap-1'>
                          <label htmlFor="title" className='font-semibold' >Title</label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Edit title"
                            value={editData.title}
                            onChange={handleEdit}
                            className="border rounded-lg p-2 outline-none"
                          />
                        </div>
                        <div className='w-fll flex flex-col gap-1'>
                          <label htmlFor="link" className='font-semibold'>Abstruct Link</label>
                          <input
                            type="text"
                            name="link"
                            placeholder="Abstruct Link"
                            value={editData.link}
                            onChange={handleEdit}
                            className="border rounded-lg p-2 outline-none"
                          />
                        </div>
                        <div className='w-fll flex flex-col gap-1'>
                          <label htmlFor="description" className='font-semibold'>Description</label>
                          <textarea
                            name="description"
                            placeholder="Edit description"
                            value={editData.description}
                            onChange={handleEdit}
                            className="border rounded-lg p-2 outline-none"
                          ></textarea>
                        </div>
                        <div className="flex gap-3">
                          <button onClick={editPublication} className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition">
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditData({ editId: null, title: "", description: "", link: '' })}
                            className="bg-gray-300 px-4 py-1 rounded-lg hover:bg-gray-400 transition"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })
            ) : (
              <p className='text-gray-500 italic text-center'>No publications yet</p>
            )}

            <button
              onClick={() => setAdd(!add)}
              className='text-emerald-600 font-medium hover:text-emerald-800 cursor-pointer mt-4 text-center transition'
            >
              Add more +
            </button>

            {add && (
              <form
                onSubmit={addPublication}
                className='w-full p-6 mt-4 bg-gray-50 rounded-xl shadow-inner border border-gray-300 flex flex-col gap-5'
              >
                <h1 className='text-xl font-semibold text-gray-700 mb-2'>Add Publication Data</h1>

                <div>
                  <label htmlFor="title" className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
                  <input
                    type="text"
                    name='title'
                    id='title'
                    onChange={handleChange}
                    value={publicationData.title}
                    className='w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-emerald-500'
                    placeholder='Publication title'
                  />
                </div>

                <div>
                  <label htmlFor="description" className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
                  <textarea
                    name="description"
                    id="description"
                    required
                    onChange={handleChange}
                    value={publicationData.description}
                    className='w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-emerald-500'
                  />
                </div>

                <div>
                  <label htmlFor="link" className='block text-sm font-medium text-gray-700 mb-1'>Abstract Link</label>
                  <input
                    type="text"
                    name='link'
                    id='link'
                    required
                    onChange={handleChange}
                    value={publicationData.link}
                    className='w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-emerald-500'
                    placeholder='Enter abstract link of your publication'
                  />
                </div>

                <div>
                  <label htmlFor="pdf" className='block text-sm font-medium text-gray-700 mb-1'>PDF <span className="italic text-xs font-normal text-red-400">(can't change later)</span></label>
                  <input
                    type="file"
                    name='pdf'
                    id='pdf'
                    accept='application/pdf'
                    onChange={handleChange}
                    className='w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-emerald-500'
                  />
                </div>

                <button
                  type='submit'
                  className='py-2 px-6 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition rounded-full shadow-md'
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        )}

        <div className='flex flex-row items-center justify-center gap-6 p-3 mt-6 mb-10'>
          <Link
            to='/updateprofile'
            className='py-2 px-6 font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition duration-300 rounded-full shadow-md transform hover:scale-105'
          >
            Update Profile
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Profile
