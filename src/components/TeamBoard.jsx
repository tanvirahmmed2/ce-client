import React from 'react'

const TeamBoard = (props) => {
    const {title,size, groupmember}=props
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
        <h1 className='text-base md:text-2xl font-semibold text-center'>{title}</h1>
        <div className='w-full flex flex-wrap items-center justify-center gap-4'>

            {
               groupmember.map((member) => {
                const { name, post,  _id, profileLink, profileImage } = member
                return <div key={_id} className={` h-auto w-[${size}px]  overflow-hidden shadow-emerald-400 shadow-sm flex flex-col items-center justify-between rounded-lg`}>
                  <img src={profileImage} alt="" className={`w-full h-[${size}px]  object-cover `}/>
                  <div className='w-full flex flex-col items-center justify-center py-2'>
                    <a href={profileLink} className='text-xl font-semibold '>{name}</a>
                    <p className=' font-semibold'>{post}</p>

                  </div>
                </div>
              })
            }
          </div>
      
    </div>
  )
}

export default TeamBoard
