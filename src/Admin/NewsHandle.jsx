import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const NewsHandle = () => {
  const { news } = useContext(ThemeContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-10 px-4">
      <div className="w-full  bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Update Latest News</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium ">Title</label>
            <input 
              type="text" 
              name="title"  
              id="title" 
              required 
              className="w-full border rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="author" className="font-medium ">Author</label>
            <input 
              type="text" 
              name="author"  
              id="author" 
              required 
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
              className="w-full border rounded-lg p-2 px-3 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-medium ">Description</label>
            <textarea 
              name="description" 
              id="description" 
              rows="4" 
              required 
              className="w-full border rounded-lg p-2 px-3 resize-none outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-2 rounded-lg shadow-md"
          >
            Publish
          </button>
        </form>
      </div>

      {/* Uploaded News Section */}
      <div className="w-full  bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">Uploaded News</h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100  text-left">
                <th className="p-3 font-semibold">Title</th>
                <th className="p-3 font-semibold">Description</th>
                <th className="p-3 font-semibold">Author</th>
                <th className="p-3 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {news && news.length > 0 ? (
                news.slice(-6).map((e) => {
                  const { date, id, author, title, description } = e
                  return (
                    <tr key={id} className="border-t  transition">
                      <td className="p-3">{title}</td>
                      <td className="p-3">{description.slice(0, 50)}...</td>
                      <td className="p-3">{author}</td>
                      <td className="p-3">{date}</td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">No news uploaded yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NewsHandle
