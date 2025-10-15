import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'
import { Link } from 'react-router-dom'



const Publications = () => {
  const { publications } = useContext(ThemeContext)
  return (
    <section className="w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8">
      <div style={{ backgroundImage: "url('https://res.cloudinary.com/dz45x9efk/image/upload/v1759431115/pexels-pixabay-256559_c5pjrp.jpg')" }} className="w-full h-[200px] flex items-center justify-center bg-cover bg-center">
        <h1 className="text-4xl font-semibold text-white drop-shadow-md">Publications</h1>

      </div>
      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <div className='w-full grid grid-cols-5 shadow-lg p-4 rounded-md justify-items-center'>
          <h1>Title</h1>
          <p>Description</p>
          <p>PDF</p>
          <p>Abstruct Link</p>
          <p>View Author</p>
        </div>
        {
          publications && publications.map((paper) => {
            const { _id, authorId, title, abstract, description, pdf } = paper
            return <div key={_id} className='w-full grid grid-cols-5 shadow-lg p-4 rounded-md justify-items-center'>
              <h1>{title.slice(0,20)}...</h1>
              <p>{description.slice(0,20)}<Link to={`/publications/${_id}`} className='text-red-500'>... more</Link></p>
              <a href={abstract} className='text-white bg-emerald-500 p-2 px-3 rounded-lg w-auto'>Abstract</a>
              <a href={pdf}>PDF</a>
              <Link to={`/profile/${authorId}`} className='italic font-semibold'>Click</Link>
            </div>
          })
        }

      </div>
    </section>
  )
}

export default Publications
