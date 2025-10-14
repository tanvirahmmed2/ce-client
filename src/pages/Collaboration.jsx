import React, { useContext } from 'react'
import {motion} from'framer-motion'
import { ThemeContext } from '../components/Context'

const Collaboration = () => {
    const { collaborations } = useContext(ThemeContext)
    return (
        <div className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
            <h1 className='text-4xl font-bold text-emerald-600'>Our Partners</h1>
            {
                collaborations.length > 0 ? <div className='w-full flex flex-wrap justify-center gap-6'>
                    {collaborations.map((collab) => {
                        const { _id, title, image, portfolio } = collab
                        return <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.6}} key={_id} className='hover:scale-105 transition duration-500 h-auto w-[300px] shadow-md rounded-xl overflow-hidden flex flex-col items-center justify-between p-2 gap-2'>
                            <img src={image} alt="" className='w-[300px] h-[300px] object-cover overflow-hidden rounded-lg'/>
                            <a href={portfolio} className='text-xl font-semibold'>{title}</a>
                        </motion.div>
                    })}
                </div> : <p> No data found</p>
            }


        </div>
    )
}

export default Collaboration
