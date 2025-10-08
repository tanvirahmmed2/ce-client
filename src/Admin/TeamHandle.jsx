import React, { useContext, useState } from 'react'
import { ThemeContext } from '../components/Context'
import axios from 'axios'

const roleMap = {
  advisor: ["Chief Advisor", "Faculty Advisor", "Advisor"],
  mentor: ["Senior Research Mentor", "Academic Mentor"],
  leadership: ["Faculty Advisor", "Lab Coordinator"],
  research: ["Research Lead", "Associate Researcher", "Researcher", "Assistant Researcher", "Junior Researcher"],
  specialist: ["GIS Specialist", "Remote Sensing Specialist", "Data Analyst", "Policy Advisor"],
  support: ["Media and Outreach Manager", "Social Media Coordinator", "Content Creator", "Event Manager", "Event Coordinator", "Technical Assistant", "Financial Manager", "Executive Member"]
}

const TeamHandle = () => {

  const [problem,setProblem]= useState('')
  const { team } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    name: '',
    role: 'mentor',
    post: '',
    profileLink: '',
    profileImage: null
  })

  // ✅ handleChange fixed to support file input
  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'profileImage') {
      setFormData((prev) => ({ ...prev, profileImage: files[0] }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  // ✅ Fixed FormData creation and headers
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newData = new FormData()
      newData.append('name', formData.name)
      newData.append('role', formData.role)
      newData.append('post', formData.post)
      newData.append('profileLink', formData.profileLink)
      newData.append('profileImage', formData.profileImage)

      const response = await axios.post(
        'http://localhost:5000/api/team/add',
        newData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true
        }
      )

      setProblem(response.data.message)
    } catch (error) {
      console.error(error)
    }
  }

  const roles = roleMap[formData.role] || []

  const handleRemove = async(id) => {
    console.log(id)
    try {
      const response= await axios.delete('http://localhost:5000/api/team/remove', {data: {id}, withCredentials: true})
      console.log(response.data.message)
      
    } catch (error) {
      console.log('failed tp remove member' + error)
      
    }
  }

  return (
    <div className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-2xl font-semibold text-center'>Team Management</h1>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <h1>Add Team Member</h1>
        <form
          onSubmit={handleSubmit}
          className='w-full p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-5'
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name='name'
              id='name'
              onChange={handleChange}
              value={formData.name}
              required
              className='w-full border border-gray-400 rounded-md p-2 outline-none bg-white text-gray-800'
            />
          </div>

          <div>
            <label htmlFor="role">Role</label>
            <select
              name="role"
              id="role"
              onChange={handleChange}
              value={formData.role}
              required
              className='w-full border border-gray-400 rounded-md p-2 outline-none bg-white text-gray-800'
            >
              {Object.keys(roleMap).map((key) => (
                <option key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="post">Post</label>
            <select
              name="post"
              id="post"
              onChange={handleChange}
              value={formData.post}
              required
              className='w-full border border-gray-400 rounded-md p-2 outline-none bg-white text-gray-800'
            >
              <option value="">Select Post</option>
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          

          <div>
            <label htmlFor="profileImage">Image</label>
            <input
              type='file'
              name="profileImage"
              id="profileImage"
              required
              onChange={handleChange}
              className='w-full border border-gray-400 rounded-md p-2 outline-none bg-white text-gray-800'
            />
          </div>

          <div>
            <label htmlFor="profileLink">Profile Link</label>
            <input
              type='text'
              name="profileLink"
              id="profileLink"
              onChange={handleChange}
              value={formData.profileLink}
              required
              className='w-full border border-gray-400 rounded-md p-2 outline-none bg-white text-gray-800'
            />
          </div>
                <p>{problem}</p>
          <button
            type='submit'
            className='bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700 transition'
          >
            Submit
          </button>
        </form>
      </div>

      {team && (
        <div className='w-full flex flex-col items-center justify-center gap-4'>
          <h1 className='text-2xl font-semibold text-center'>Existing Team Members</h1>
          <div className='w-full grid grid-cols-4'>
            <p>Name</p>
            <p>Role</p>
            <p>Post</p>
            <p>Action</p>
          </div>
          {team.map((e) => {
            const { name, role, post,  _id } = e
            return (
              <div key={_id} className='w-full grid grid-cols-4'>
                <h1>{name}</h1>
                <p>{role}</p>
                <p>{post}</p>
                <button onClick={() => handleRemove(_id)}>Remove</button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default TeamHandle
