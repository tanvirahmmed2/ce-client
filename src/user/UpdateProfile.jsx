import React, { useContext, useState } from 'react'
import { ThemeContext } from '../components/Context'

const UpdateProfile = () => {
  const { user } = useContext(ThemeContext)
  const [newName, setNewName] = useState({
    userId: user._id,
    name: ''
  })
  const [newDob, setNewDob] = useState({
    userId: user._id,
    dateOfBirth: ''
  })
  const [newEmail, setNewEmail] = useState({
    userId: user._id,
    email: ''
  })
  const [newPassword, setNewPassword] = useState({
    userId: user._id,
    old_password: '',
    new_password: ''
  })


  const [newEducation, setNewEducation] = useState({
    userId: user._id,
    degree: '',
    field: '',
    institution: '',
    startYear: '',
    endYear:'',
    grade:''
  })

  const changeName = (e) => e.preventDefault()
  const changeDob = (e) => e.preventDefault()
  const changeEmail = (e) => e.preventDefault()
  const changePassword = (e) => e.preventDefault()
  const updateEducation = (e) => e.preventDefault()

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center">
        Dear <span className="text-emerald-700">{user.name}</span>, Update your profile
      </h1>

      <div className="w-full max-w-2xl flex flex-col gap-8">
      
        <form
          onSubmit={changeName}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Update Name</h2>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={newName.name}
            onChange={(e) => setNewName({ ...newName, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder={user.name}
          />
          <button className="bg-black text-white py-2 rounded-lg ">
            Update
          </button>
        </form>

    
        <form
          onSubmit={changeDob}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Update Date of Birth</h2>
          <input
            type="date"
            id="dateofbirth"
            name="dateofbirth"
            required
            value={newDob.dateOfBirth}
            onChange={(e) => setNewDob({ ...newDob, dateOfBirth: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
          />
          <button className="bg-black text-white py-2 rounded-lg ">
            Update
          </button>
        </form>

        <form
          onSubmit={changeEmail}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Update Email</h2>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={newEmail.email}
            onChange={(e) => setNewEmail({ ...newEmail, email: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter new email"
          />
          <button className="bg-black text-white py-2 rounded-lg ">
            Update
          </button>
        </form>


        <form
          onSubmit={updateEducation}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Update Email</h2>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={newEmail.email}
            onChange={(e) => setNewEmail({ ...newEmail, email: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter new email"
          />
          <button className="bg-black text-white py-2 rounded-lg ">
            Update
          </button>
        </form>

      
        <form
          onSubmit={changePassword}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Change Password</h2>
          <input
            type="password"
            id="old_password"
            name="old_password"
            required
            value={newPassword.old_password}
            onChange={(e) => setNewPassword({ ...newPassword, old_password: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Old password"
          />
          <input
            type="text"
            id="new_password"
            name="new_password"
            required
            value={newPassword.new_password}
            onChange={(e) => setNewPassword({ ...newPassword, new_password: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="New password"
          />
          <button className="bg-black text-white py-2 rounded-lg ">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
