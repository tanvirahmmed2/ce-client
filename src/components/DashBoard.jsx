import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import EventHandle from '../Admin/EventHandle'
import UpdateHandle from '../Admin/UpdateHandle'
import ProjectHandle from '../Admin/ProjectHandle'
import TeamHandle from '../Admin/TeamHandle'
import Galleryhandle from '../Admin/Galleryhandle'
import MemberHandle from '../Admin/MemberHandle'
import AccessHandle from '../Admin/AccessHandle'
import NoticeHandle from '../Admin/NoticeHandle'
import PublicationHandle from '../Admin/PublicationHandle'
import Setting from '../Admin/Setting'

const DashBoard = () => {
    const { handler } = useParams()
    return (
        <div className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
            <section className='grid grid-cols-3 md:grid-cols-5 w-full justify-items-center gap-4'>
                <Link to='/admin/member' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Member</Link>
                <Link to='/admin/event' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Event</Link>
                <Link to='/admin/gallery' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Gallery</Link>
                <Link to='/admin/notice' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Notice</Link>
                <Link to='/admin/project' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Project</Link>
                <Link to='/admin/team' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Team</Link>
                <Link to='/admin/update' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Update</Link>
                <Link to='/admin/publications' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Publications</Link>
                <Link to='/admin/access' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2'>Access</Link>
                <Link to='/admin/setting' className='w-full h-full bg-emerald-700 hover:bg-emerald-500 transition duration-500 flex items-center justify-center text-white  rounded-lg py-2 '>Setting</Link>

            </section>
            <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
                {handler === 'event' && <EventHandle />}
                {handler === 'update' && <UpdateHandle />}
                {handler === 'project' && <ProjectHandle />}
                {handler === 'team' && <TeamHandle />}
                {handler === 'gallery' && <Galleryhandle />}
                {handler === 'member' && <MemberHandle />}
                {handler === 'access' && <AccessHandle />}
                {handler === 'notice' && <NoticeHandle />}
                {handler === 'publications' && <PublicationHandle />}
                {handler === 'setting' && <Setting />}
            </section>
        </div>
    )
}

export default DashBoard
