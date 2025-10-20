import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../components/Context';
import { RxAvatar } from 'react-icons/rx';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { MdWorkOutline, MdOutlineLink } from 'react-icons/md';
import { IoSchoolOutline } from 'react-icons/io5';

const UserProfile = () => {
  const { users } = useContext(ThemeContext);
  const { id } = useParams();

  if (!users) return <p className="text-center py-10">Loading...</p>;

  const user = users.find((e) => e._id === id);
  if (!user) return <p className="text-center py-10">User not found</p>;

  return (
    <section className="w-full min-h-screen bg-gray-50 p-2 flex flex-col items-center justify-center">
      <div className="w-full max-w-[700px] flex flex-col items-center justify-center gap-8">

        <div className="w-full bg-white rounded-md shadow-md py-10 flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-4xl font-extrabold tracking-tight">
            Welcome to <span className="text-emerald-300">CCIRL</span>
          </h1>
        </div>

        <div className="w-full bg-white shadow-md rounded-xl p-8 flex flex-col items-center justify-around gap-8 border border-gray-200">
          <div className="flex-shrink-0">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-emerald-500 shadow-md"
              />
            ) : (
              <div className="text-9xl text-emerald-500 border-4 border-emerald-500 rounded-full p-2 bg-white">
                <RxAvatar />
              </div>
            )}
          </div>

          <div className="text-center md:text-left flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">{user.name}</h1>
            <p className="italic font-medium text-emerald-600 mb-2">
              {user.role} {user.post && <span>& {user.post}</span>}
            </p>
          </div>
        </div>

        <div className="w-full bg-white shadow-md rounded-xl p-2 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Personal Details
          </h2>

          <div className="flex flex-col gap-3 text-gray-700 leading-relaxed">
            {user.education?.length > 0 && (
              <div className="w-full flex flex-col items-start justify-start gap-4 p-3 border-2 border-gray-100">
                <h1 className="text-xl font-semibold">Education:</h1>
                {user.education.map(({ _id, degree, institution, field, startYear, endYear }) => {
                  const currentYear = new Date().getFullYear();
                  return (
                    <div key={_id} className="rounded-md w-full">
                      <h1 className="">
                        <IoSchoolOutline /> <span className="font-semibold">{degree}</span> ({`in ${field} `}) at {institution}
                      </h1>
                      <p className="text-sm text-gray-500">Started: {startYear}</p>
                      {endYear ? (
                        <p>
                          {endYear > currentYear ? (
                            <span className="text-sm text-gray-500">Will complete: {endYear}</span>
                          ) : (
                            <span className="text-sm text-gray-500 font-semibold">Completed: {endYear}</span>
                          )}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-500 font-semibold">Current</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {user.work?.length > 0 && (
              <div className="w-full flex flex-col items-start justify-start gap-4 p-3 border-2 border-gray-100">
                <h1 className="text-xl font-semibold">Career:</h1>
                {user.work.map(({ _id, position, company, startYear, endYear }) => {
                  const currentYear = new Date().getFullYear();
                  return (
                    <div key={_id} className="rounded-md w-full">
                      <p className="">
                        <MdWorkOutline /> <span className="font-semibold">{position}</span> at {company}
                      </p>
                      {startYear && <p>Joined {startYear}</p>}
                      {endYear ? (
                        <p>
                          {endYear > currentYear ? (
                            <span className="text-sm text-gray-500">Will leave: {endYear}</span>
                          ) : (
                            <span className="text-sm text-gray-500 font-semibold">Left: {endYear}</span>
                          )}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-500 font-semibold">Current</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {user.network?.length > 0 && (
              <div className="w-full flex flex-col items-start justify-start gap-4 p-3 border-2 border-gray-100">
                <h1 className="text-xl font-semibold">Networks:</h1>
                {user.network.map(({ _id, title, link }) => (
                  <a
                    href={link}
                    key={_id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flow-row gap-2 items-center text-emerald-600 hover:underline"
                  >
                    <MdOutlineLink /> {title}
                  </a>
                ))}
              </div>
            )}

            <p>
              <span className="font-semibold">Email:</span>{' '}
              <span className="text-emerald-600 underline">{user.email}</span>
            </p>
            <p className="flex flex-row gap-2 items-center font-semibold text-gray-600">
              <FaMapMarkedAlt className="text-red-500" /> {user.country}
            </p>
          </div>
        </div>

        {user.publications?.length > 0 && (
          <div className="w-full bg-white shadow-md rounded-xl border border-gray-200 flex flex-col gap-4 py-6">
            <p className="w-full text-center font-semibold text-xl">Publication</p>
            {user.publications.map(({ _id, title, description, link, pdf }) => (
              <div key={_id} className="w-full flex flex-col items-center justify-center gap-1">
                <div className="w-full flex flex-row items-center justify-between px-2 border-b border-gray-100">
                  <Link
                    to={`/publications/${_id}`}
                    className="font-medium text-gray-800"
                  >
                    {title.slice(0, 13)}...
                  </Link>
                  <p className="text-gray-600 text-sm hidden sm:block">
                    {description.slice(0, 20)}......
                  </p>
                  {pdf && <a href={pdf}  className="hidden sm:block text-emerald-600 hover:underline">PDF</a>}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hidden sm:flex font-semibold text-right hover:underline"
                    >
                      Abstract
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserProfile;
