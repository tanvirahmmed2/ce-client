import React, { useContext } from 'react';
import { ThemeContext } from '../components/Context';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { users } = useContext(ThemeContext);
  const { id } = useParams();

  if (!users) return <p>Loading...</p>;

  
  const user = users.find((e) => e._id === id); 
  if (!user) return <p>User not found</p>;

  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-6'>
      <div className='w-full bg-emerald-500 py-6 text-white rounded-lg flex flex-col items-center gap-4'>
        <img src={user.profileImage} alt={user.name} className='w-40 h-40 object-cover rounded-full border-2' />
        <h1 className='text-3xl font-semibold'>{user.name}</h1>
        
      </div>
      <div>

      </div>
    </section>
  );
};

export default UserProfile;
