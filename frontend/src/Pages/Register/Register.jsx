import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Popup from './Popup';
import {config} from "dotenv"

// config("")

const gender = [
    "Male" , "Female"
];

const cdsgroup = [
     "Charity","NAFDAC" , "Sanitation", "SDGs"
];

const Register = () => {
    const [values, setValues] = useState({
        surname: '',
        middlename: '',
        firstname: '',
        statecode: '',
        gender: '',
        email: '',
        password: '',
        phone: ''
    });
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value});
    }

    const [isOpen, setIsOpen] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault(
            setIsOpen(true));
        axios.post(`${import.meta.env.VITE_SERVER_URL}/users/`, values)
        .then(res => {
            console.log(res);
            // navigate('/register')
        })
        .catch(err => console.log(err));
        
        
    }

    const handleClose = () => {
        setIsOpen(false);
    };

  return (
    <div className='flex justify-center items-center mt-12 lg:mt-8 '>
      <div className='shadow-xl p-6 md:p-20 lg:p-32 w-[320px] md:w-[550px] lg:w-[500px] '>
        <h2 className=' font-bold mb-8 text-3xl md:text-3xl lg:text-5xl text-green-600 text-center'>Registration</h2>
        <form onSubmit={handleSubmit}>
            
            <div className='mb-4'>
                <label htmlFor='surname' className='block text-gray-700 text-xl font-bold'>Surname</label>
                <input type='text' placeholder='Enter Surname' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='surname' onChange={handleChanges}/>
            </div>

            <div className='mb-4'>
                <label htmlFor='middlename' className='block text-gray-700 text-xl font-bold'>Middle Name</label>
                <input type='text' placeholder='Enter Middle Name' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='middlename' onChange={handleChanges}/>
            </div>
            <div className='mb-4'>
                <label htmlFor='firstname' className='block text-gray-700 text-xl font-bold'>First Name</label>
                <input type='text' placeholder='Enter First Name' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='firstname' onChange={handleChanges}/>
            </div>
            
            <div className='mb-4'>
                <label htmlFor='statecode' className='block text-gray-700 text-xl font-bold'>State Code</label>
                <input type='text' placeholder='Enter State Code (e.g; RV/20A/1234)' className='w-full px-3 py-2 border text-sm lg:text-xl border-gray-400 rounded-md' required
                name='statecode' onChange={handleChanges}/>
            </div>
           
            <div className='mb-4 w-[250px]'>
                <label htmlFor='gender' className='block font-bold text-gray-700 text-xl'>Gender</label>
                <select
                    type='text' 
                    name="gender"
                    onChange={handleChanges}
                    className='w-full text-xl focus:bg-green-100  border   border-gray-400 rounded-md'
                    title="Please put in your state!"
                    required
                >
                    <option className='text-gray-700text-sm '></option>
                        {gender.map((gender, index) => (
                            <option key={index} >
                                {gender}
                            </option>
                        ))}
                </select>
            </div>
            <div className=' w-[250px] mb-4'>
                <label htmlFor='gender' className='block font-bold text-gray-700 text-xl'>CDs Group</label>
                <select
                    type='text' 
                    name="cdsgroup"
                    onChange={handleChanges}
                    className='w-full text-xl focus:bg-green-100  border   border-gray-400 rounded-md'
                    title="Please put in your CDs Group!"
                    required
                >
                    <option  className='text-gray-700text-sm '></option>
                        {cdsgroup.map((cdsgroup, index) => (
                            <option key={index}  >
                                {cdsgroup}
                            </option>
                        ))}
                </select>
            </div>
            
            
            <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-xl font-bold'>Email</label>
                <input type='email' placeholder='Enter Email' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='email' onChange={handleChanges}/>
            </div>
        
            <div className='mb-8'>
                <label htmlFor='phone' className='block text-gray-700 text-xl font-bold'>Phone Number</label>
                <input type='number' placeholder='Enter Phone Number' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='phone' onChange={handleChanges}/>
            </div>

            <div className='mt-12'>
                <button  className='w-[60%] justify-end bg-green-600 text-white font-bold text-2xl rounded-3xl hover:scale-85 duration-300 py-2 mb-6 shadow-xl'>Submit</button>
                <Popup isOpen={isOpen} onClose={handleClose}/>
            </div>
            
        </form>
        <div className='text-center mt-6'>
            <span>Already signed in?</span><br />
            <a href="/home"><button className='text-red-600 underline'>Back to Home page</button></a> 
        </div>
      </div>
    </div>
  )
}

export default Register
