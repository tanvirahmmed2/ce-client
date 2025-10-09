import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './Context'

const UpdateBox = () => {
    const { _id } = useParams()
    const { update } = useContext(ThemeContext)
    const data = update.find((item) => item._id === _id)
    if(!data)return <p>No data foun with this id</p>
    console.log(data)
    return (
        <section className="w-full min-h-[800px] bg-gray-50 p-6 flex flex-col items-center justify-center gap-8">
            <div className='w-full h-[400px] overflow-hidden bg-gradient-to-br from-emerald-600 to-cyan-500 flex items-center justify-center'>

                <img src='' alt="" />
            </div>
           
        </section>
    )
}

export default UpdateBox
