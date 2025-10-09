import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './Context'

const Image = () => {
    const { id } = useParams()
    const { gallery } = useContext(ThemeContext)
    const data= gallery.find((prev)=>prev._id=== id)

    return (
        <div className='w-full flex flex-col items-center justify-center p-6 gap-6'>
            {!data ? <p>data not found</p>:<div className='w-full flex flex-col items-center justify-center gap-2 rounded-lg overflow-hidden'>
            <p className='text-xl font-semibold text-center'>{data.title}</p>
            <img src={data.image} alt="" className='w-full h-[400px] object-cover'/>
            <div className='w-full flex flox-row gap-6  items-center justify-around'>
                <p className='text-xs italic '>Uploaded at: {data.createdAt.slice(0,10)}</p>
            <p className='w-full text-center'>Clicked by: {data.author}</p>
            </div>
          </div>}


            <div className='w-full flex flex-wrap gap-4 justify-center'>
                {gallery && gallery.map((e) => {
                    const { _id, title, author, image } = e
                    return <div className='w-[300px] h-[200px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center relative' key={title}>
                        <img src={image} className='w-full h-full object-cover' alt="" />
                        <div className='w-full flex flex-row items-center justify-between absolute bottom-0 p-2  bg-emerald-50 bg-opacity-30 hover:bg-opacity-90 transition duration-500'>
                            <Link to={`/gallery/${_id}`}>{title}</Link>
                            <h1>{author}</h1>


                        </div>

                    </div>
                })
                }
            </div>

        </div>
    )
}

export default Image
