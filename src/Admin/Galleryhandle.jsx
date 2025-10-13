import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Galleryhandle = () => {


  const [formData, setFormData] = useState({
    title: '',
    author: '',
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
      newData.append('image', formData.image)
      newData.append('author', formData.author)
      const response = await axios.post('http://localhost:5000/api/gallery/add', newData, { withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error)

    }
  }

  const [deleteImage, setDeleteImage] = useState({
    id: ''
  })
  const handlesearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.delete('http://localhost:5000/api/gallery/delete', { data: deleteImage, withCredentials: true })
      console.log(response.data.message)
    } catch (error) {
      console.log(error.response.data.message)

    }

  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-10 py-10 px-4 ">

      <div className="w-full  bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Upload New Image
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium text-gray-700">
              Title
            </label>
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
            <label htmlFor="image" className="font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              required
              onChange={handleChange}
              className="w-full border rounded-lg p-2 px-3 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="author" className="font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              onChange={handleChange}
              value={formData.author}
              className="w-full border rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-2 rounded-lg shadow-md"
          >
            Upload
          </button>
        </form>
      </div>


      <div className="w-full  bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6">
        <h1 className="text-xl font-bold text-gray-800 text-center">
          Delete Any Image
        </h1>
        <form
          onSubmit={handlesearch} className="flex gap-3">
          <input
            type="text"
            name="id"
            id="id"
            required
            value={deleteImage.id}
            onChange={(e) => setDeleteImage(prev => ({ ...prev, id: e.target.value }))}
            placeholder="Please paste the image id here"
            className="flex-1 border rounded-lg p-2 px-3 outline-none "
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-5 rounded-lg shadow-md"
          >
            Delete
          </button>
        </form>



      </div>
    </div>
  )
}

export default Galleryhandle
