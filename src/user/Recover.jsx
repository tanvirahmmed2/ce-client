import React from 'react'

const Recover = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-auto min-w-[330px] p-6 bg-gray-500 text-white rounded-xl shadow-lg gap-4'>
            <h1 className='text-2xl font-semibold text-center'>Recover your account</h1>
            <form onSubmit={handleSubmit}>
                <div className='w-full flex flex-col items-start justify-start gap-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required className='w-full border-2 outline-none p-1 px-3'/>
                </div>
                <button type='submit' className='mt-6 bg-white text-black w-full p-1 rounded-sm text-xs'>Next</button>
            </form>
        </div>
      
    </div>
  )
}

export default Recover
