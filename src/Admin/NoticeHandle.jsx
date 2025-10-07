import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ThemeContext } from '../components/Context'

const NoticeHandle = () => {
  const { notices } = useContext(ThemeContext)
  const [formdata, setFormData] = useState({
    title: "",
    pdf: null
  })
  const [message, setMessage] = useState("")
  const [uploading, setUploading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)
    setMessage("")

    try {
      const data = new FormData()
      data.append("title", formdata.title)
      data.append("pdf", formdata.pdf)

      const response = await axios.post(
        'http://localhost:5000/api/notice/add',
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        }
      )

      setMessage(response.data.message || "Notice uploaded successfully!")
      setFormData({ title: "", pdf: null })
    } catch (error) {
      console.error(error)
      setMessage("Upload failed. Please try again.")
    } finally {
      setUploading(false)
    }
  }



  const removeNotice=async(id)=>{
    try {
      const response= await axios.delete('http://localhost:5000/api/notice/delete', {data: {id}, withCredentials: true})
      console.log(response.data.message)
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className='w-full p-4 md:p-8 flex flex-col items-center gap-12 min-h-screen'>
      <h1 className='text-center text-3xl font-bold text-gray-900'>Manage Notices</h1>

      <form onSubmit={handleSubmit} className='w-full p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-5'>
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>Fill Notice Details</h2>

        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name='title'
            id='title'
            required
            value={formdata.title}
            onChange={(e) => setFormData({ ...formdata, title: e.target.value })}
            className='w-full border-2 outline-none p-1 px-3'
          />
        </div>

        <div>
          <label htmlFor="pdf">PDF</label>
          <input
            type="file"
            name='pdf'
            id='pdf'
            required
            accept="application/pdf"
            onChange={(e) => setFormData({ ...formdata, pdf: e.target.files[0] })}
            className='w-full border-2 outline-none p-1 px-3'
          />
        </div>

        <button
          type='submit'
          className='mt-3 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg'
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add Notice"}
        </button>

        {message && <p className='text-center text-gray-700 mt-2'>{message}</p>}
      </form>

      <div className='w-full flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-gray-800 text-center'>Latest Notices</h2>

        <div className='w-full grid grid-cols-3 gap-4 py-3 px-4 text-sm font-semibold text-gray-900 border-b border-t border-gray-400 bg-gray-200 rounded-md'>
          <p className='truncate'>Title</p>
          <p className='truncate'>PDF</p>
          <p className='text-center'>Actions</p>
        </div>

        {notices && notices.length > 0 ? (
          notices.map((notice) => {
            const { _id, title, pdf } = notice
            return (
              <div
                key={_id}
                className='w-full grid grid-cols-3 gap-4 items-center py-3 px-4 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition duration-150 rounded-md'
              >
                <h3 className='font-medium text-gray-900 truncate'>{title}</h3>
                <a href={pdf} target="_blank" rel="noopener noreferrer" download>Download PDF</a>
                <div className='flex justify-center'>
                  <button onClick={()=> removeNotice(_id)} className='text-red-600 hover:text-red-800 font-semibold text-xs border border-red-300 py-1 px-3 rounded-full hover:bg-red-50 transition'>
                    Remove
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <div className='w-full p-6 text-center text-gray-500 border border-dashed border-gray-300 rounded-lg bg-white'>
            No notice found. Add one above!
          </div>
        )}
      </div>
    </div>
  )
}

export default NoticeHandle
