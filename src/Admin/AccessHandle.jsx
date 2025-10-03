import React from 'react'

const AccessHandle = () => {
  return (
    <div className='w-full p-4 md:p-8 flex items-center justify-center flex-col gap-10 '>

      <h1 className='text-center text-3xl font-bold text-gray-900  pb-2'>
        Access Manager
      </h1>

      <div className='w-full flex flex-col gap-4'>
        

        <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200'>
          <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
            <h1 className='text-lg font-bold text-gray-900'>Nazrul Islam</h1>
            <p className='text-sm text-gray-600'>Email: nazrulislam@gmail.com</p>
          </div>

          <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
            <label htmlFor="role-nazrul" className='text-sm font-medium text-gray-700'>Role:</label>
            <select name="role-nazrul" id="role-nazrul" className='bg-white border border-gray-400 rounded-md p-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition'>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="author">Author</option>
            </select>
          </div>

          <div className='w-full md:w-auto flex flex-row md:flex-col gap-2'>
            <button className='w-full md:w-auto bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 shadow-sm'>
              Update
            </button>
            <button className='w-full md:w-auto border border-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 shadow-sm'>
              Remove
            </button>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200'>
          <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
            <h1 className='text-lg font-bold text-gray-900'>Rafiqul Islam</h1>
            <p className='text-sm text-gray-600'>Email: rafiqulislam@gmail.com</p>
          </div>

          <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
            <label htmlFor="role-rafiqul" className='text-sm font-medium text-gray-700'>Role:</label>
            <select name="role-rafiqul" id="role-rafiqul" className='bg-white border border-gray-400 rounded-md p-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition'>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="author">Author</option>
            </select>
          </div>

          <div className='w-full md:w-auto flex flex-row md:flex-col gap-2'>
            <button className='w-full md:w-auto bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 shadow-sm'>
              Update
            </button>
            <button className='w-full md:w-auto border border-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 shadow-sm'>
              Remove
            </button>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200'>
          <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
            <h1 className='text-lg font-bold text-gray-900'>Sarwar Mahamud</h1>
            <p className='text-sm text-gray-600'>Email: sarwar@gmail.com</p>
          </div>

          <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
            <label htmlFor="role-sarwar" className='text-sm font-medium text-gray-700'>Role:</label>
            <select name="role-sarwar" id="role-sarwar" className='bg-white border border-gray-400 rounded-md p-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition'>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="author">Author</option>
            </select>
          </div>

          <div className='w-full md:w-auto flex flex-row md:flex-col gap-2'>
            <button className='w-full md:w-auto bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 shadow-sm'>
              Update
            </button>
            <button className='w-full md:w-auto border border-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 shadow-sm'>
              Remove
            </button>
          </div>
        </div>
      </div>


      <form className='w-full max-w-lg p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-4'>
          Invite New Access Manager
        </h2>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='text-sm font-medium text-gray-700'>Name</label>
          <input
            type="text"
            name='name'
            id='name'
            required
            className='w-full border border-gray-400 rounded-md p-2 outline-none  transition'
            placeholder='xxx eee'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email</label>
          <input
            type="email"
            name='email'
            id='email'
            required
            className='w-full border border-gray-400 rounded-md p-2 outline-none  transition'
            placeholder='xxxx@example.com'
          />
        </div>

        <button
          type='submit'
          className='mt-4 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg hover:shadow-xl'
        >
          Send Invitation
        </button>
      </form>

    </div>
  )
}

export default AccessHandle