import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context';




const Update = () => {
  const { update } = useContext(ThemeContext)
  return (
    <section className="w-full min-h-[800px] bg-gray-50 p-6 flex flex-col items-center justify-center gap-8">
      <h1 className='text-4xl font-bold text-emerald-600'>Latest Updates</h1>
      <p className='text-base sm:text-lg text-center'>Stay updated with our recent discoveries and announcements</p>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center'>
        {
          update.length > 0 && update.map((e) => {
            const { _id, title, image, description } = e
            return <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.6}} key={_id} className='w-full h-auto rounded-lg  flex flex-col gap-4 bg-gray-50 p-2 overflow-hidden shadow-xl hover:scale-[1.03] transition duration-500'>
              <p className='font-semibold text-lg'>{title}</p>
              <img src={image} alt="" className='w-full h-full rounded-lg object-cover' />

              {
                description.length >0 && <p className=''>{description.slice(0, 150)} .... <Link to={`/update/${_id}`} className='italic text-green-600'>see more</Link></p>
              }
            </motion.div>
          })
        }

      </div>

    </section>
  )
}

export default Update
