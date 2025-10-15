import React from 'react'
import {Link} from 'react-router-dom'

const TeamBoard = (props) => {
    const {title, groupmember}=props
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
        <h1 className='text-base md:text-2xl font-semibold text-center'>{title}</h1>
        <div className='w-full flex flex-wrap items-center justify-center gap-4'>

            {
               groupmember.map((member) => {
                const { name, post,  _id, userId, profileImage } = member
                return <div key={_id} className={` h-auto w-[150px] md:w-[200px]  overflow-hidden  p-1 shadow-md flex flex-col items-center justify-between rounded-lg`}>
                  <img src={profileImage} alt="" className={`w-full h-full  object-cover rounded-md`}/>
                  <div className='w-full flex flex-col items-center justify-center py-2'>
                    <Link to={`/profile/${userId}`} className=' text-xs sm:text-base  font-semibold '>{name}</Link>
                    <p className=' text-xs italic'>{post}</p>

                  </div>
                </div>
              })
            }
          </div>
      
    </div>
  )
}

export default TeamBoard
