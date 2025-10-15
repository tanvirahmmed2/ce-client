import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { ThemeContext } from '../components/Context'
import axios from 'axios'

const UpdateProfile = () => {
  const { user } = useContext(ThemeContext)
  const [newName, setNewName] = useState({
    userId: user._id,
    name: ''
  })
  const changeName = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put('https://ce-server-5tje.onrender.com/api/user/updatename', newName, { withCredentials: true })
      toast.success(response.data.message)
      window.location.replace('/profile')
    } catch (error) {
      toast.error(error.data.message)

    }
  }

  const [newDob, setNewDob] = useState({
    userId: user._id,
    dateOfBirth: ''
  })

  const changeDob = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put('https://ce-server-5tje.onrender.com/api/user/updatedob', newDob, { withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.data.message)

    }
  }





  const [newPassword, setNewPassword] = useState({
    userId: user._id,
    old_password: '',
    new_password: ''
  })

  const changePassword = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put('https://ce-server-5tje.onrender.com/api/user/updatepassword', newPassword, { withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message || "Email change failed")

    }
  }

  const [newEducation, setNewEducation] = useState({
    userId: user._id,
    degree: '',
    field: '',
    institution: '',
    startYear: '',
    endYear: '',
    grade: ''
  })

  const eduChange = (e) => {
    const { name, value } = e.target
    setNewEducation((prev) => ({ ...prev, [name]: value }))
  }



  const updateEducation = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://ce-server-5tje.onrender.com/api/user/addeducation', newEducation, { withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const removeEducation = async (userId, eduId) => {
    try {
      const response = await axios.delete('https://ce-server-5tje.onrender.com/api/user/removeeducation', { data: { userId, eduId }, withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)

    }
  }


  const [newWork, setNewWork] = useState({
    userId: user._id,
    position: '',
    company: ''
  })

  const handleWorkChange = (e) => {
    const { name, value } = e.target
    setNewWork((prev) => ({ ...prev, [name]: value }))
  }

  const updateWork = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://ce-server-5tje.onrender.com/api/user/addwork', newWork, { withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const removeWork = async (userId, workId) => {
    try {
      const response = await axios.delete('https://ce-server-5tje.onrender.com/api/user/removework', { data: { userId, workId }, withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)

    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center">
        Dear <span className="text-emerald-700">{user.name}</span>, Update your profile
      </h1>

      <div className="w-full max-w-2xl flex flex-col gap-8">

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("userId", user._id);
            formData.append("file", e.target.profileImage.files[0]);

            try {
              const response = await axios.put(
                "https://ce-server-5tje.onrender.com/api/user/updateprofileimage",
                formData,
                { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } }
              );
              toast.success(response.data.message);
            } catch (error) {
              toast.error(error.response?.data?.message || "Failed to upload image");
              console.log(error)
            }
          }}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Update Profile Image</h2>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            required
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
          />
          <button type="submit" className="bg-black text-white py-2 rounded-lg">
            Upload
          </button>
        </form>




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
          <button type='submit' className="bg-black text-white py-2 rounded-lg ">
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
          onSubmit={updateEducation}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Update Education</h2>
          <input
            type="text"
            id="degree"
            name="degree"
            required
            value={newEducation.degree}
            onChange={eduChange}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter Degree Name"
          />
          <input
            type="text"
            id="field"
            name="field"
            required
            value={newEducation.field}
            onChange={eduChange}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter Major Field"
          />
          <input
            type="text"
            id="institution"
            name="institution"
            required
            value={newEducation.institution}
            onChange={eduChange}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter Institution Name"
          />
          <input
            type="number"
            id="startYear"
            name="startYear"
            required
            value={newEducation.startYear}
            onChange={eduChange}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter Starting Year"
          />
          <input
            type="number"
            id="endYear"
            name="endYear"
            value={newEducation.endYear}
            onChange={eduChange}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter Starting Year"
          />
          <button className="bg-black text-white py-2 rounded-lg ">
            Add
          </button>
        </form>


        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition">
          <h1 className="text-lg font-semibold text-gray-700">Eduactional Information</h1>
          {
            user.education.length > 0 && user.education.map((edu) => {
              const { _id, degree, institution } = edu
              return <div key={_id} className='w-full flex flex-row items-center justify-between '>
                <h1>Studies in {degree} in {institution}</h1>
                <button onClick={() => removeEducation(user._id, _id)}>Remove</button>
              </div>
            })
          }
        </div>


        <form
          onSubmit={updateWork}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Update Work Place</h2>
          <input
            type="text"
            id="position"
            name="position"
            required
            value={newWork.position}
            onChange={handleWorkChange}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter Positon"
          />



          <input
            type="text"
            id="company"
            name="company"
            required
            value={newWork.company}
            onChange={handleWorkChange}
            className="w-full border border-gray-300 rounded-lg p-2 px-3 outline-none"
            placeholder="Enter Company Name"
          />
          <button className="bg-black text-white py-2 rounded-lg ">
            Add
          </button>
        </form>


        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition">
          <h1 className="text-lg font-semibold text-gray-700">Job Information</h1>
          {
            user.work.length > 0 && user.work.map((e) => {
              const { _id, position, company } = e
              return <div key={_id} className='w-full flex flex-row items-center justify-between '>
                <h1>Works as {position} in {company}</h1>
                <button onClick={() => removeWork(user._id, _id)}>Remove</button>
              </div>
            })
          }
        </div>

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
