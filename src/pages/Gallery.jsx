import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

const Gallery = () => {
  const { gallery } = useContext(ThemeContext)
  return (
    <div className='w-full flex flex-col items-center justify-center p-6 gap-6'>
      <h1 className='w-full text-center text-xl font-semibold'>Explore CCIRL Photo Archives</h1>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4'>
        {gallery && gallery.map((e) => {
          const { _id, title, image } = e
          return <div className='w-full  bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center relative' key={_id}>
            <img src={image} className='w-full h-full object-cover' alt="" />
            <div className='w-full flex flex-row items-center justify-between absolute bottom-0 p-2 bg-emerald-50 transition duration-500'>
              <Link to={`/gallery/${_id}`}>{title}</Link>


            </div>

          </div>
        })
        }
      </div>

    </div>
  )
}

export default Gallery
