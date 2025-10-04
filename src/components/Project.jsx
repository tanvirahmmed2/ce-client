import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './Context'

const Project = () => {
    const {id}= useParams()
    const {projects}= useContext(ThemeContext)
    const selectedProject= projects.find((prev)=>prev.id=== Number(id))
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 p-6'>
        <h1 className='text-2xl font-semibold text-center'>Project Overview</h1>
        <h1>{selectedProject.title}</h1>
        <img src={selectedProject.image} alt="" />
        <p>{selectedProject.description}</p>
    </div>
  )
}

export default Project
