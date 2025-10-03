import React, { useState } from 'react'

const DashBoard = () => {
  const [section,setSection]= useState('profile')
  console.log(section)
  return (
    <section className='w-full flex flex-col md:flex-row '>
      <div className='w-full md:w-auto h-auto md:min-h-[800px] p-4 flex flex-row md:flex-col md:items-start md:justify-start gap-0 sm:gap-2 items-center justify-center bg-slate-100'>
        <p onClick={()=>setSection('profile')}>Profile</p>
        <p onClick={()=>setSection('information')}>Information</p>
        <p onClick={()=>setSection('events')}>Events</p>
        <p onClick={()=>setSection('news')}>News</p>
        <p onClick={()=>setSection('team')}>Team</p>
        <p onClick={()=>setSection('gallery')}>Gallery</p>
        <p onClick={()=>setSection('member')}>Members</p>
        <p onClick={()=>setSection('user')}>User</p>
        <p onClick={()=>setSection('policy')}>Policy</p>
        <p onClick={()=>setSection('access')}>Access</p>
        <p onClick={()=>setSection('setting')}>Setting</p>

      </div>
      <div className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
        <div className={`${section==='profile'? 'flex': 'hidden'}`}>Profile</div>
        <div className={`${section==='information'? 'flex': 'hidden'}`}>information</div>
        <div className={`${section==='events'? 'flex': 'hidden'}`}>events</div>
        <div className={`${section==='news'? 'flex': 'hidden'}`}>news</div>
        <div className={`${section==='team'? 'flex': 'hidden'}`}>team</div>
        <div className={`${section==='gallery'? 'flex': 'hidden'}`}>gallery</div>
        <div className={`${section==='member'? 'flex': 'hidden'}`}>Member</div>
        <div className={`${section==='user'? 'flex': 'hidden'}`}>user</div>
        <div className={`${section==='policy'? 'flex': 'hidden'}`}>policy</div>
        <div className={`${section==='access'? 'flex': 'hidden'}`}>Acces</div>
        <div className={`${section==='setting'? 'flex': 'hidden'}`}>setting</div>
      </div>

    </section>
  )
}

export default DashBoard
