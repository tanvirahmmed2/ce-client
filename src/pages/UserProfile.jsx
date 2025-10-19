import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../components/Context';
import { useParams } from 'react-router-dom';
import { FaMapMarkedAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const UserProfile = () => {
  const { users } = useContext(ThemeContext);
  const { id } = useParams();

  if (!users) return <p>Loading...</p>;

  const user = users.find((e) => e._id === id);
  if (!user) return <p>User not found</p>;

  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center gap-10 bg-gray-50'>


      <div className='w-full max-w-4xl border-2 py-6  rounded-lg flex flex-col items-center gap-4'>
        {user.profileImage
          ? <img src={user.profileImage} alt={user.name} className='w-40 h-40 object-cover rounded-full border-4 border-white shadow-md' />
          : <div className='text-9xl  border-4 border-white rounded-full p-2'><RxAvatar /></div>
        }
        <h1 className='text-3xl font-semibold'>{user.name}</h1>
        <p className='italic '>{user.role} {user.post && <span>& {user.post}</span>}</p>
      </div>


      <div className='w-full max-w-4xl bg-white shadow-md rounded-xl p-6 border border-gray-200'>
        <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>Personal & Contact Info</h2>
        <div className='flex flex-col gap-3 text-gray-700'>
          <p><span className='font-semibold'>Email:</span> <span className='text-emerald-600 underline'>{user.email}</span></p>
          <p className='flex flex-row gap-2 items-center font-semibold text-gray-600'>
            <FaMapMarkedAlt className='text-red-500' /> {user.country}
          </p>

        </div>
      </div>

      {user.education?.length > 0 && (
        <div className='w-full max-w-4xl bg-white shadow-md rounded-xl p-6 border border-gray-200'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>Education</h2>
          <div className='flex flex-col gap-3'>
            {user.education.map((edu) => {
              const { _id, degree, institution, field, startYear, endYear } = edu;
              return (
                <div key={_id} className='p-3 rounded-md bg-gray-50 border border-gray-100'>
                  <p><span className='font-semibold'>{degree} </span> ({` ${field} `})  at {institution}</p>
                  <p className='text-sm text-gray-500'>Start Year: {startYear}</p>
                  {endYear && <p className='text-sm text-gray-500'>End Year: {endYear}</p>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {user.work?.length > 0 && (
        <div className='w-full max-w-4xl bg-white shadow-md rounded-xl p-6 border border-gray-200'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>Work Experience</h2>
          <div className='flex flex-col gap-3'>
            {user.work.map((job) => {
              const { _id, position, company, startYear, endYear } = job;
              return (
                <div key={_id} className='p-3 rounded-md bg-gray-50 border border-gray-100 flex flex-col'>
                  <p>
                    <span className='font-semibold'>
                      {new Date(endYear) < new Date() ? <span>Former </span> : <span>Current </span>}
                      {position}
                    </span> at {company}
                  </p>
                  {startYear && <p>From {startYear}</p>}
                  {endYear && <p>To {endYear}</p>}
                </div>

              );
            })}
          </div>
        </div>
      )}
      {user.network?.length > 0 && (
        <div className='w-full max-w-4xl bg-white shadow-md rounded-xl p-6 border border-gray-200'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>Network</h2>
          <div className='flex flex-col gap-3'>
            {user.network.map((net) => {
              const { _id, title,link } = net;
              return (
                <a href={link} key={_id}>{title}</a>

              );
            })}
          </div>
        </div>
      )}

      {user.publications?.length > 0 && (
        <div className='w-full max-w-4xl bg-white shadow-md rounded-xl p-6 border border-gray-200'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>Publications</h2>
          <div className='flex flex-col gap-3'>
            {user.publications.map((pub) => {
              const { _id, title, description, link } = pub;
              return (
                <div key={_id} className='p-3 rounded-md bg-gray-50 border border-gray-100 flex flex-col gap-1'>
                  <p className='font-semibold'>{title}</p>
                  <p className='text-gray-600 text-sm'>{description.slice(0, 50)} <Link to={`/publications/${_id}`} className='text-red-500'>...more</Link></p>
                  {link && <a href={link} target='_blank' rel='noopener noreferrer' className='text-emerald-600 font-semibold hover:underline'>View Abstract</a>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
