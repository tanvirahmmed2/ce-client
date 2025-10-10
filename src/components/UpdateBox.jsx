import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

const UpdateBox = () => {
    const {id}= useParams()
        const {update}= useContext(ThemeContext)
        const data= update.find((prev)=>prev._id=== id)


    return (
        <section className='w-full flex flex-col items-center justify-center gap-4 p-6'>
            {!data ? <p>data not found</p> : <div className='w-full flex flex-col items-center justify-center gap-4'>
                <p className='text-xl font-semibold text-center'>{data.title}</p>
                <img src={data.image} alt="" className='w-3/4  ' />
                <p className='text-xs italic'>Uploaded at: {data.createdAt.slice(0, 10)}</p>
                <p className='w-full text-center'>{data.description}</p>
            </div>}

            <Link to="/update" className="mt-6 bg-black text-white p-1 px-4 rounded-lg">
                ← Back to all updates
            </Link>
        </section>
    )
}

export default UpdateBox
