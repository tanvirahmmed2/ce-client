import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const LibraryHandle = () => {
    const { library } = useContext(ThemeContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className='w-full p-4 md:p-8 flex flex-col items-center gap-12  min-h-screen'>

            <h1 className='text-center text-3xl font-bold text-gray-900 '>
                Manage Library Collection
            </h1>

            <form onSubmit={handleSubmit} className='w-full p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-5'>
                <h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>
                    Fill Details
                </h2>

                <div>
                    <label htmlFor="title" >Title</label>
                    <input type="text" name='title' id='title' required className='w-full border-2 outline-none p-1 px-3' />
                </div>



                <div>
                    <label htmlFor="pdf" >PDF</label>
                    <input type="file" name='pdf' id='pdf' required className='w-full border-2 outline-none p-1 px-3' />
                </div>



                <button
                    type='submit'
                    className='mt-3 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg'
                >
                    Add Element
                </button>
            </form>

            <div className='w-full  flex flex-col gap-4'>
                <h2 className='text-2xl font-bold text-gray-800 text-center'>Latest Notices</h2>

                <div className='w-full grid grid-cols-3 gap-4 py-3 px-4 text-sm font-semibold text-gray-900 border-b border-t border-gray-400 bg-gray-200 rounded-md'>
                    <p className='truncate'>Title</p>
                    <p className='truncate'>PDF</p>
                    <p className='text-center'>Actions</p>
                </div>

                {library && library.length > 0 ? (
                    library.map((e) => {
                        const { id, title, pdf } = e
                        return (
                            <div
                                key={id}
                                className='w-full grid grid-cols-3 gap-4 items-center py-3 px-4 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition duration-150 rounded-md'
                            >
                                <h3 className='font-medium text-gray-900 truncate'>{title}</h3>
                                <a href="/">{pdf}</a>
                                <div className='flex justify-center'>
                                    <button className='text-red-600 hover:text-red-800 font-semibold text-xs border border-red-300 py-1 px-3 rounded-full hover:bg-red-50 transition'>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className='w-full p-6 text-center text-gray-500 border border-dashed border-gray-300 rounded-lg bg-white'>
                        No library elemnt found. Add one above!
                    </div>
                )}
            </div>
        </div>
    )
}

export default LibraryHandle
