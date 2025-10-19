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
        <p className='w-full text-center p-1 shadow-lg rounded-xl'>Publication</p>
        {
          publications && publications.map((paper) => {
            const { _id, authorId, title,link, description, pdf , authorName} = paper
            return <div key={_id} className='w-full flex flex-row items-center justify-between px-2 border-l-2 border-opacity-15 border-black'>
              <Link to={`/publications/${_id}`}>{title.slice(0,20)}...</Link>
              <p className='hidden lg:block'>{description.slice(0,20)}</p>
              <a href={link} className='rounded-lg w-auto hidden md:block'>Abstract</a>
              <a href={pdf} className='hidden sm:block'>PDF</a>
              <Link to={`/profile/${authorId}`} className='italic font-semibold'>{authorName}</Link>
            </div>
          })
        }

      </div>
    </section>
  )
}

export default Publications
