import React, { useContext, useState } from 'react'
import { ThemeContext } from '../components/Context'
import axios from 'axios'
import { toast } from 'react-toastify'
import { api } from '../components/api'
import { MdDeleteOutline } from "react-icons/md";

const CollabHandle = () => {

  const { collaborations } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    title: '',
    portfolio: '',
    image: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newData = new FormData()
      newData.append('title', formData.title)
      newData.append('portfolio', formData.portfolio)
      newData.append('image', formData.image)
      const response = await axios.post(`${api}/collaboration/add`, newData, { withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error)
    }
  }

  const removeProject = async (id) => {
    try {
      const response = await axios.delete(`${api}/collaboration/delete`, { data: { id }, withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)

    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-10 px-2">
      <div className="w-full  bg-white rounded-2xl shadow-lg p-2 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Latest collaborations</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium ">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              onChange={handleChange}
              value={formData.title}
              className="w-full border rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="font-medium ">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              required
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg p-2 px-3 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="portfolio" className="font-medium ">portfolio</label>
            <input type='text' name="portfolio"
              id="portfolio"
              rows="4"
              required
              onChange={handleChange}
              value={formData.portfolio}
              placeholder='Enter partner portfolio link'
              className="w-full border rounded-lg p-2 px-3 resize-none outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-2 rounded-lg shadow-md"
          >
            Add
          </button>
        </form>
      </div>

      <div className="w-full  bg-white rounded-2xl shadow-lg p-2">
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">Uploaded projetcs</h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100  text-left grid grid-cols-3">
                <th className="p-1 font-semibold">Title</th>
                <th className="p-1 font-semibold">portfolio</th>
                <th className='p-1'>Action</th>
              </tr>
            </thead>
            <tbody>
              {collaborations && collaborations.length > 0 ? (
                collaborations.map((e) => {
                  const { _id, title, portfolio } = e
                  return (
                    <tr key={_id} className="border-t  transition grid grid-cols-3">
                      <td className="p-1">{title}</td>
                      <td className="p-1">{portfolio.slice(0, 50)}...</td>
                      <td onClick={() => removeProject(_id)} className='cursor-pointer  p-1'><MdDeleteOutline/></td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">No project uploaded yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CollabHandle
