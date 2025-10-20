import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

const Gallery = () => {
  const { gallery } = useContext(ThemeContext)
  return (
    <div className='w-full flex flex-col items-center justify-center p-6 gap-6'>
      <h1 className='w-full text-center text-xl font-semibold'>Explore CCIRL Photo Archives</h1>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-4'>
        {gallery && gallery.map((e) => {
          const { _id, title, image } = e
          return <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className='w-full overflow-hidden  bg-gray-200 rounded-lg flex items-center justify-center relative' key={_id}>
            <img src={image} className='w-full h-full object-cover' alt="" />
            <Link to={`/gallery/${_id}`} className='absolute bottom-0 left-0 text-white p-2 text-xs sm:text-base'> {title.length > 15 ? <span className='text-xs font-thin'>{title.slice(0, 15)}.. click</span> : <span>{title}</span>} </Link>
          </motion.div>
        })
        }
      </div>

    </div>
  )
}

export default Gallery
