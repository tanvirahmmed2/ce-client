import React, { useContext, useState } from 'react'
import { ThemeContext } from '../components/Context'

const roleMap = {
  advisor: ["Chief Advisor", "Faculty Advisor", "Advisor"],
  mentor: ["Senior Research Mentor", "Academic Mentor"],
  leadership: ["Faculty Advisor", "Lab Coordinator"],
  research: ["Research Lead", "Associate Researcher", "Researcher", "Assistant Researcher", "Junior Researcher"],
  specialist: ["GIS Specialist", "Remote Sensing Specialist", "Data Analyst", "Policy Advisor"],
  support: ["Media and Outreach Manager", "Social Media Coordinator", "Content Creator", "Event Manager", "Event Coordinator", "Technical Assistant", "Financial Manager", "Executive Member"]
}

const TeamHandle = () => {
  const {team}= useContext(ThemeContext)
  const [formData, setFormData] = useState({
    name: '',
    role: 'mentor',
    post: '',
    department: '',
    profileLink:'',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  // derive roles directly based on current role
  const roles = roleMap[formData.role] || []


  const handleRemove=(id)=>{
    console.log(id)
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
              className='w-full border border-gray-400 rounded-md p-2 outline-none  bg-white text-gray-800'
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
              className='w-full border border-gray-400 rounded-md p-2 outline-none  bg-white text-gray-800'
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
              className='w-full border border-gray-400 rounded-md p-2 outline-none  bg-white text-gray-800'
            >
              <option value="">Select Post</option>
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <input
              type='text'
              name="department"
              id="department"
              onChange={handleChange}
              value={formData.department}
              required
              className='w-full border border-gray-400 rounded-md p-2 outline-none  bg-white text-gray-800'
            />

          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type='file'
              name="image"
              id="image"
              required
              className='w-full border border-gray-400 rounded-md p-2 outline-none  bg-white text-gray-800'
            />

          </div>
          <div>
            <label htmlFor="profileLink">Profile Link</label>
            <input
              type='text'
              name="profileLink"
              id="profileLink"
              required
              className='w-full border border-gray-400 rounded-md p-2 outline-none  bg-white text-gray-800'
            />

          </div>

          <button
            type='submit'
            className='bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700 transition'
          >
            Submit
          </button>
        </form>
      </div>


      {
        team && <div className='w-full flex flex-col items-center justify-center gap-4'>
          <h1 className='text-2xl font-semibold text-center'>Existing Team Members</h1>
          <div className='w-full grid grid-cols-5'>
            <p>Name</p>
            <p>Role</p>
            <p>Post</p>
            <p>Department</p>
            <p>Action</p>
          </div>
          {
            team.map((e)=>{
              const {name, role, post, department, _id}=e
              return <div key={_id} className='w-full grid grid-cols-5'>
                <h1>{name}</h1>
                <p>{role}</p>
                <p>{post}</p>
                <p>{department}</p>
                <p onClick={()=> handleRemove(_id)}>Remove</p>
              </div>
            })
          }
        </div>
      }
    </div>
  )
}

export default TeamHandle
