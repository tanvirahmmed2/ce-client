import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context';




const Update = () => {
  const { update } = useContext(ThemeContext)
  return (
    <section className="w-full min-h-[800px] bg-slate-50 p-2 flex flex-col items-center justify-center gap-8">
      <h1 className='text-xl lg:text-4xl font-bold text-emerald-600 text-center'>Latest Updates</h1>
      <p className='text-base sm:text-lg text-center'>Stay updated with our recent discoveries and announcements</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2'>
        {
          update.length > 0 && update.map((e) => {
            const { _id, title, image } = e
            return <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} key={_id} className='w-full relative flex flex-col gap-2  items-start justify-between   shadow-xl rounded-lg  border-2 hover:scale-[1.02] transition duration-500'>
              <img src={image} alt="" className='w-full  sm:h-[250px] h-[200px] object-cover rounded-lg' />
              <Link to={`/update/${_id}`} className='absolute text-white p-2 bottom-0 left-0'>{title.length > 15 ? <span className='text-xs font-thin'>{title.slice(0, 15)}.. click</span> : <span>{title}</span>} </Link>
            </motion.div>
          })
        }

      </div>

    </section>
  )
}

export default Update
