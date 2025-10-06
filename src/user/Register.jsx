import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import axios from 'axios'
import { useState } from 'react';


const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
  "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
  "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
  "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
  "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan",
  "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


const Register = () => {
  const [problem, setProblem] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    bloodGroup: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {

      const response = await axios.post("http://localhost:5000/api/user/register", formData)

      setProblem(response.data.message);
    } catch (error) {
      setProblem(" Registration failed: " + (error.response?.data?.message || "Server error"));
    }
  }
  return (
    <section className='w-full flex items-center justify-center p-6'>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.6}} className='w-full lg:w-3/4 h-auto flex flex-col lg:flex-row items-center justify-center rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-emerald-600 to-cyan-700 text-white'>
        <div className='w-full text-center py-16 flex flex-col items-center justify-center gap-2 '>
          <h1>Welcom to</h1>
          <h1 className='text-xl font-semibold'>Climate Change and Impact Resonance Lab</h1>
          <p>Be a proud member for the lab and contribute for the world</p>
          <Link to='/login' className='text-xs mt-6 italic'>Already registered?</Link>
        </div>
        <div className='w-full h-auto flex flex-col p-4 py-8 items-center justify-center bg-gray-200 text-black'>
          <form onSubmit={HandleSubmit} className='w-full flex flex-col gap-4 items-center justify-center '>


            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="name">Name</label>
              <input type="text" id='name' name='name' required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.name} />
            </div>


            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="dateOfBirth">Date of birth</label>
              <input type="date" name='dateOfBirth' id='dateOfBirth' required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.dateOfBirth}/>
            </div>


            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender" required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.gender}>
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>


            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="bloodGroup">Blood Group</label>
              <select name="bloodGroup" id="bloodGroup" required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.bloodGroup}>
                <option value="">Select you blood group</option>
                <option value="a+">A+</option>
                <option value="b+">B+</option>
                <option value="ab+">AB+</option>
                <option value="o+">O+</option>
                <option value="a-">A-</option>
                <option value="b-">B-</option>
                <option value="ab-">AB-</option>
                <option value="o-">O-</option>
              </select>
            </div>



            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="country">County</label>
              <select name="country" id="country" required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.country}>
                
                {
                  countries && countries.map((country) => <option key={country.id} value={country}>{country}</option>)
                }
              </select>
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="phone">Phone</label>
              <input type="number" name='phone' id='phone' required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.phone}/>
            </div>


            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.email}/>
            </div>


            <div className='w-full flex flex-col items-start justify-start gap-2'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' required className='w-full border-2 outline-none p-1 px-3' onChange={handleChange} value={formData.password}/>
            </div>


            <button type='submit' className='bg-emerald-500 text-white p-1 px-3 rounded-xl'>Register</button>
            <p>{problem}</p>
          </form>
        </div>
      </motion.div>

    </section>
  )
}

export default Register
