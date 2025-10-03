import React, { useState } from 'react'

const Galleryhandle = () => {
  const [searchImage, setSearchImage] = useState(null)

  const handlesearch = () => {
    setSearchImage({
      image: 'https://via.placeholder.com/200', // demo placeholder
      title: 'Searching image',
    })
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-10 py-10 px-4 ">
      {/* Upload Form */}
      <div className="w-full  bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Upload New Image
        </h1>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
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

      {/* Search Section */}
      <div className="w-full  bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6">
        <h1 className="text-xl font-bold text-gray-800 text-center">
          Delete Any Image
        </h1>
        <div className="flex gap-3">
          <input
            type="text"
            name="title"
            id="title-search"
            placeholder="Please paste the title here"
            className="flex-1 border rounded-lg p-2 px-3 outline-none "
          />
          <button
            type="button"
            onClick={handlesearch}
            className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-5 rounded-lg shadow-md"
          >
            Search
          </button>
        </div>

        {/* Search Result */}
        <div className="mt-4">
          {searchImage ? (
            <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-xl shadow-sm">
              <img
                src={searchImage.image}
                alt={searchImage.title}
                className="w-40 h-40 object-cover rounded-lg border"
              />
              <p className="font-semibold text-gray-800">{searchImage.title}</p>
              <button className="bg-red-600 hover:bg-red-700 transition text-white font-semibold px-4 py-1 rounded-lg shadow-md">
                Delete
              </button>
            </div>
          ) : (
            <p className="text-gray-500 italic text-center">
              No image found with this title
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Galleryhandle
