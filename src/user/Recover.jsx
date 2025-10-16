import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api } from '../components/api';



const Recover = () => {
  const [emailSent, setEmailSent] = useState(false);

  const [formData, setFormData] = useState({ email: '' });
  const [resetData, setResetData] = useState({ email: '', code: '', newpassword: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${api}/user/forget`,
        formData,
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setEmailSent(true);

      setResetData((prev) => ({ ...prev, email: formData.email }));
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
      setEmailSent(false);
    }
  };

  const handleResetChange = (e) => {
    const { name, value } = e.target;
    setResetData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${api}/user/reset`,
        { ...resetData, code: resetData.code.trim() }, // trim code
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setResetData({ email: '', code: '', newpassword: '' });
      setEmailSent(false);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen ">
      {!emailSent ? (
        <div className="w-auto min-w-[330px] p-6 bg-gray-500 text-white rounded-xl shadow-lg gap-4">
          <h1 className="text-2xl font-semibold text-center">Recover your account</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full text-black border-2 outline-none p-1 px-3 rounded"
              />
            </div>
            
            <button
              type="submit"
              className="mt-6 bg-white text-black w-full p-2 rounded text-sm font-semibold"
            >
              Send Reset Code
            </button>
          </form>
        </div>
      ) : (
        <div className="w-auto min-w-[330px] p-6 bg-gray-500 text-white rounded-xl shadow-lg gap-4 flex flex-col">
          <h1 className="text-2xl font-semibold text-center">Change Password</h1>
          <form onSubmit={handleReset} className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={resetData.email}
                onChange={handleResetChange}
                required
                className="w-full text-black border-2 outline-none p-1 px-3 rounded"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="code">Reset Code</label>
              <input
                type="text"
                name="code"
                id="code"
                value={resetData.code}
                onChange={handleResetChange}
                required
                className="w-full text-black border-2 outline-none p-1 px-3 rounded"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="newpassword">New Password</label>
              <input
                type="password"
                name="newpassword"
                id="newpassword"
                value={resetData.newpassword}
                onChange={handleResetChange}
                required
                className="w-full text-black border-2 outline-none p-1 px-3 rounded"
              />
            </div>
          
            <button
              type="submit"
              className="mt-6 bg-white text-black w-full p-2 rounded text-sm font-semibold"
            >
              Change Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Recover;
