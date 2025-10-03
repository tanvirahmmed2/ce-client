import React, { useState } from 'react'
import EventHandle from '../Admin/EventHandle'
import NewsHandle from '../Admin/NewsHandle'
import TeamHandle from '../Admin/TeamHandle'
import Galleryhandle from '../Admin/Galleryhandle'
import MemberHandle from '../Admin/MemberHandle'
import AccessHandle from '../Admin/AccessHandle'
import Setting from '../Admin/Setting'
import AdminProfile from '../Admin/AdminProfile'

const DashBoard = () => {
  const [section, setSection] = useState('profile')
  console.log(section)
  return (
    <section className='w-full flex flex-col md:flex-row '>
      <div className='w-full md:w-auto h-auto md:min-h-[800px] p-4 flex flex-wrap gap-4 md:flex-col md:items-start md:justify-start md:gap-2 items-center justify-center bg-slate-100'>
        <p onClick={() => setSection('profile')}>Profile</p>
        <p onClick={() => setSection('information')}>Information</p>
        <p onClick={() => setSection('events')}>Events</p>
        <p onClick={() => setSection('news')}>News</p>
        <p onClick={() => setSection('team')}>Team</p>
        <p onClick={() => setSection('gallery')}>Gallery</p>
        <p onClick={() => setSection('member')}>Members</p>
        <p onClick={() => setSection('user')}>User</p>
        <p onClick={() => setSection('policy')}>Policy</p>
        <p onClick={() => setSection('access')}>Access</p>
        <p onClick={() => setSection('setting')}>Setting</p>

      </div>
      <div className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
        <div className={`${section === 'profile' ? 'flex' : 'hidden'}`}><AdminProfile /></div>
        <div className={`${section === 'information' ? 'flex' : 'hidden'}`}>information</div>
        <div className={`${section === 'events' ? 'flex' : 'hidden'}`}><EventHandle /></div>
        <div className={`${section === 'news' ? 'flex' : 'hidden'}`}><NewsHandle /></div>
        <div className={`${section === 'team' ? 'flex' : 'hidden'}`}><TeamHandle /></div>
        <div className={`${section === 'gallery' ? 'flex' : 'hidden'}`}><Galleryhandle /></div>
        <div className={`${section === 'member' ? 'flex' : 'hidden'}`}><MemberHandle /></div>
        <div className={`${section === 'policy' ? 'flex' : 'hidden'}`}>policy</div>
        <div className={`${section === 'access' ? 'flex' : 'hidden'}`}><AccessHandle /></div>
        <div className={`${section === 'setting' ? 'flex' : 'hidden'}`}><Setting /></div>
      </div>

    </section>
  )
}

export default DashBoard
