import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThemeContext } from './Context';

const Publication = () => {
  const { publications } = useContext(ThemeContext);
  const { id } = useParams();
  const data = publications.find(item => item._id === id);

  if (!data) return <p className="text-center mt-20 text-gray-500 text-lg">Publication not found</p>;

  return (
    <section className="w-full min-h-screen  flex justify-center p-6">
      <div className="w-full  bg-white shadow-md rounded-xl p-8 flex flex-col gap-6 border border-gray-200">

     
        <h1 className="text-2xl font-bold text-gray-900 text-center">{data.title}</h1>

        <div className="border-b border-gray-300 my-2"></div>

       
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{data.description}</p>

       
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4">
          <Link
            to={`/profile/${data.authorId}`}
            className="text-white bg-emerald-600 hover:bg-emerald-700 transition px-5 py-2 rounded-lg text-center font-medium shadow"
          >
            View Author
          </Link>
          {data.abstruct && (
            <a
              href={data.abstruct}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-center font-medium shadow"
            >
              View Abstract
            </a>
          )}
        </div>

      
        <div className="mt-6 text-center">
          <Link
            to="/publications"
            className="text-emerald-600 font-semibold hover:underline"
          >
            ← Back to all publications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Publication;
