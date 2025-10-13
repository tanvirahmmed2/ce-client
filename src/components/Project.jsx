import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './Context'

const Project = () => {
    const {id}= useParams()
    const {projects}= useContext(ThemeContext)
    const data= projects.find((prev)=>prev._id=== id)
    
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 p-6'>
        <h1 className='text-2xl font-semibold text-center'>Project Overview</h1>
        {!data ? <p>data not found</p>:<div className='w-full flex flex-col items-center justify-center gap-4'>
            <p className='text-xl font-semibold text-center'>{data.title}</p>
            <img src={data.image} alt="" className='w-3/4 max-h-[500px] object-cover'/>
            <p className='text-xs italic'>Uploaded at: {data.createdAt.slice(0,10)}</p>
            <p className='w-full text-center'>{data.description}</p>
          </div>}
          <Link to="/projects" className="mt-6 bg-black text-white p-1 px-4 rounded-lg">
                ← Back to all projects
            </Link>
    </div>
  )
}

export default Project
