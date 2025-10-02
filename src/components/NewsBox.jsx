import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './Context'

const NewsBox = () => {
    const { id } = useParams()
    const { news } = useContext(ThemeContext)
    const selectednews = news.find((item) => item.id === Number(id))
    return (
        <section className="w-full min-h-[800px] bg-gray-50 p-6 flex flex-col items-center justify-center gap-8">
            <div className='w-full h-[400px] overflow-hidden bg-gradient-to-br from-emerald-600 to-cyan-500 flex items-center justify-center'>

                <img src={'https://terrapass.com/wp-content/uploads/2021/12/climate-change-results-illustration.jpg'} alt="" />
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <h1 className='text-2xl text-center font-semibold'>{selectednews.title}</h1>
                <div className='flex flex-row items-start justify-start gap-6'>
                    <h1>{selectednews.author}</h1>
                    <p>{selectednews.date}</p>
                </div>
            </div>
            <p className='text-wrap'>{selectednews.description}</p>

        </section>
    )
}

export default NewsBox
