import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

const Collaboration = () => {
    const { collaborations } = useContext(ThemeContext)
    return (
        <div className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
            <h1 className='text-4xl font-bold text-emerald-600'>Our Partners</h1>
            {
                collaborations.length > 0 ? <div>
                    {collaborations.map((collab) => {
                        const { _id, title, image, portfolio } = collab
                        return <div key={_id} className='w-full h-auto '>
                            <img src={image} alt="" />
                            <Link to={portfolio}> {title}</Link>
                        </div>
                    })}
                </div> : <p> No data found</p>
            }


        </div>
    )
}

export default Collaboration
