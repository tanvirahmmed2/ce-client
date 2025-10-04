import React, { useState } from 'react'
import EventHandle from '../Admin/EventHandle'
import TeamHandle from '../Admin/TeamHandle'
import Galleryhandle from '../Admin/Galleryhandle'
import MemberHandle from '../Admin/MemberHandle'
import AccessHandle from '../Admin/AccessHandle'
import Setting from '../Admin/Setting'
import NoticeHandle from '../Admin/NoticeHandle'
import LibraryHandle from '../Admin/LibraryHandle'
import PublicationHandle from '../Admin/PublicationHandle'
import UpdateHandle from '../Admin/UpdateHandle'

const DashBoard = () => {
  const [section, setSection] = useState('events')
  console.log(section)
  return (
    <section className='w-full flex flex-col md:flex-row '>
      <div className='w-full md:w-auto h-auto md:min-h-[800px] p-4 flex flex-wrap gap-4 md:flex-col md:items-start md:justify-start md:gap-2 items-center justify-center bg-slate-100'>
        <h1 className='text-xl font-semibold'>Manage</h1>
        <button onClick={() => setSection('events')}>Events</button>
        <button onClick={() => setSection('news')}>News</button>
        <button onClick={() => setSection('team')}>Team</button>
        <button onClick={() => setSection('gallery')}>Gallery</button>
        <button onClick={() => setSection('member')}>Members</button>
        <button onClick={() => setSection('access')}>Access</button>
        <button onClick={() => setSection('notice')}>Notice</button>
        <button onClick={() => setSection('library')}>Library</button>
        <button onClick={() => setSection('publications')}>Publications</button>
        <button onClick={() => setSection('setting')}>Setting</button>

      </div>
      <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
        {section === 'events' && <EventHandle />}
        {section === 'news' && <UpdateHandle />}
        {section === 'team' && <TeamHandle />}
        {section === 'gallery' && <Galleryhandle />}
        {section === 'member' && <MemberHandle />}
        {section === 'access' && <AccessHandle />}
        {section === 'notice' && <NoticeHandle />}
        {section === 'library' && <LibraryHandle />}
        {section === 'publications' && <PublicationHandle/>}
        {section === 'setting' && <Setting />}
      </section>

    </section>
  )
}

export default DashBoard
