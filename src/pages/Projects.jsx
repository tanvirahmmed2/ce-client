import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

const Projects = () => {
      const {projects}= useContext(ThemeContext)
    return (
      <section className="w-full min-h-[800px] bg-slate-50 p-6 flex flex-col items-center justify-center gap-8">
        <h1 className='text-4xl font-bold text-emerald-600'>Projects</h1>
        <p className='text-base sm:text-lg text-center'>Our multidisciplinary approach integrates expertise across climate science, environmental engineering, data analysis, and sustainability studies, enabling us to design projects that address complex environmental challenges with innovative, science-driven solutions.</p>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8'>
        {
          projects && projects.map((project)=>{
            const {id,  title, description, image}= project
            return <div key={id} className='w-full flex flex-col items-start justify-between gap-2  shadow-xl rounded-lg p-4 border-2 hover:scale-[1.02] transition duration-500'>
              <img src={image} alt=""  className='w-full h-[200px] object-cover'/>
              <p className='text-lg font-semibold'>{title}</p>
              <p>{description.slice(0,70)} .....<Link to={`/projects/${id}`} className='text-red-500'>show more</Link> </p>
  
            </div>
          })
        }
       </div>
  
      </section>
    )
}

export default Projects
