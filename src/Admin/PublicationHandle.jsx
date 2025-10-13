import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { ThemeContext } from '../components/Context'

const PublicationHandle = () => {
  const { publications } = useContext(ThemeContext)


const removePub = async (authorId, pubId) => {
    try {
      const response = await axios.delete(
        'http://localhost:5000/api/user/removepublication',
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

  return (
    <div className='w-full p-4 md:p-8 flex flex-col items-center gap-12  min-h-screen'>

      <h1 className='text-center text-3xl font-bold text-gray-900 '>
        Manage Publications
      </h1>



      <div className='w-full  flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-gray-800 text-center'>Available Publications</h2>

        <div className='w-full grid grid-cols-3 gap-4 py-3 px-4 text-sm font-semibold text-gray-900 border-b border-t border-gray-400 bg-gray-200 rounded-md'>
          <p className='truncate'>Title</p>
          <p className='truncate'>Author Id</p>
          <p className='text-center'>Actions</p>
        </div>

        {publications && publications.length > 0 ? (
          publications.map((paper) => {
            const { _id, title, authorId} = paper
            return (
              <div
                key={_id}
                className='w-full grid grid-cols-3 gap-4 items-center py-3 px-4 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition duration-150 rounded-md'
              >
                <h3 className='font-medium text-gray-900 truncate'>{title}</h3>
                <p>{authorId}</p>
                <button onClick={()=> removePub(authorId, _id)} className='text-red-600 hover:text-red-800 font-semibold text-xs border border-red-300 py-1 px-3 rounded-full hover:bg-red-50 transition'>
                  Remove
                </button>

              </div>
            )
          })
        ) : (
          <div className='w-full p-6 text-center text-gray-500 border border-dashed border-gray-300 rounded-lg bg-white'>
            No publications found. Add one above!
          </div>
        )}
      </div>
    </div>
  )
}

export default PublicationHandle
