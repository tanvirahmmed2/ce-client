import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './Context'

const Image = () => {
    const { id } = useParams()
    const { gallery } = useContext(ThemeContext)
    const data = gallery.find((prev) => prev._id === id)

    return (
        <div className='w-full flex flex-col items-center justify-center p-2 gap-6'>
            {!data ? <p>data not found</p> : <div className='w-full flex flex-col md:flex-row  gap-2'>
                <div className='w-full md:w-[600px] h-[400px] md:h-[600px] relative overflow-hidden shadow-lg rounded-lg'>
                    <img src={data.image} alt="" className='w-full h-full object-cover rounded-xl' />
                    <div className='w-full flex flox-row p-2  items-center justify-between absolute bottom-0 text-white'>
                        <p className='text-xs w-full italic '>Uploaded at: {data.createdAt.slice(0, 10)}</p>
                        <p className='w-full text-center'>Clicked by: {data.author}</p>
                    </div>
                </div>
                <div className='w-full flex flex-wrap gap-2'>
                    {gallery && gallery.map((e) => {
                        const { _id, title, image } = e
                        return <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className='w-[150px] md:w-[200px] h-[200px] md:h-[300px] overflow-hidden  bg-gray-200 rounded-lg flex items-center justify-center relative' key={_id}>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                            <Link to={`/gallery/${_id}`} className='absolute bottom-0 left-0 text-white p-2 text-xs sm:text-base'> {title.length > 15 ? <span className='text-xs font-thin'>{title.slice(0, 15)}.. click</span> : <span>{title}</span>} </Link>
                        </motion.div>
                    })
                    }
                </div>
            </div>}


            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4'>

            </div>

        </div>
    )
}

export default Image
