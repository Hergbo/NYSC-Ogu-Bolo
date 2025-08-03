import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';



function Update() {

    const [values, setValues] = useState({
        surname: '',
        middlename: '',
        firstname: '',
        statecode: '',
        gender: '',
        email: '',
        password: '',
        phone: ''
    })
    const navigate = useNavigate();

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value});
    }

    // const  [data, setDate] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => {
                setValues(res.data);
            })
            .catch(err => console.log(err));
    }, []) 

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:3000/users/'+id, values)
        .then(res => {
            console.log(res);
            navigate('/admin')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='flex justify-center items-center mt-12 lg:mt-8 '>
      <div className='shadow-xl p-6 md:p-20 lg:p-32 w-[320px] md:w-[550px] lg:w-[500px] '>
        <h2 className=' font-bold mb-8 text-3xl md:text-3xl lg:text-5xl text-green-600 text-center'>Update User</h2>
        <form onSubmit={handleUpdate} >
            
            <div className='mb-4'>
                <label htmlFor='surname' className='block text-gray-700 text-xl font-bold'>Surname</label>
                <input type='text' placeholder='Enter Surname' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='surname' value={values.surname} onChange={handleChanges}/>
            </div>

            <div className='mb-4'>
                <label htmlFor='middlename' className='block text-gray-700 text-xl font-bold'>Middle Name</label>
                <input type='text' placeholder='Enter Middle Name' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='middlename'  value={values.middlename} onChange={handleChanges}/>
            </div>
            <div className='mb-4'>
                <label htmlFor='firstname' className='block text-gray-700 text-xl font-bold'>First Name</label>
                <input type='text' placeholder='Enter First Name' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='firstname'  value={values.firstname} onChange={handleChanges}/>
            </div> 
            
            <div className='mb-4'>
                <label htmlFor='statecode' className='block text-gray-700 text-xl font-bold'>State Code</label>
                <input type='text' placeholder='Enter State Code (e.g; RV/20A/1234)' className='w-full px-3 py-2 border text-sm lg:text-xl border-gray-400 rounded-md' required
                name='statecode'  value={values.statecode} onChange={handleChanges}/>
            </div>
           
            <div className='mb-4 w-[250px]'>
                <label htmlFor='gender' className='block font-bold text-gray-700 text-xl'>Gender</label>
                <select
                    type='text' 
                    name="gender"
                    onChange={handleChanges}
                    value={values.gender}
                    className='w-full text-xl focus:bg-green-100  border   border-gray-400 rounded-md'
                    title="Please put in your state!"
                    required
                >
                    <option className='text-gray-700 text-xl '>Male</option>
                    <option className='text-gray-700 text-xl '>Female </option>
                    
                </select>
            </div>
            <div className=' w-[250px] mb-4'>
                <label htmlFor='cdsgroup' className='block font-bold text-gray-700 text-xl'>CDs Group</label>
                <select
                    type='text' 
                    name="cdsgroup"
                    onChange={handleChanges} value={values.cdsgroup}
                    className='w-full text-xl focus:bg-green-100  border   border-gray-400 rounded-md'
                    title="Please put in your CDs Group!"
                    required
                >
                    <option className='text-gray-700 text-xl '>Charity</option>
                    <option className='text-gray-700 text-xl '>NAFDAC</option>
                    <option className='text-gray-700 text-xl '>Sanitation</option>
                    <option className='text-gray-700 text-xl '>SDGs</option>
                   
                </select>
            </div>
            
            
            <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-xl font-bold'>Email</label>
                <input type='email' placeholder='Enter Email' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='email'  value={values.email} onChange={handleChanges}/>
            </div>
        
            <div className='mb-8'>
                <label htmlFor='phone' className='block text-gray-700 text-xl font-bold'>Phone Number</label>
                <input type='number' placeholder='Enter Phone Number' className='w-full px-3 py-2 border border-gray-400 rounded-md text-sm lg:text-xl' required
                name='phone' value={values.phone} onChange={handleChanges}/>
            </div>

            <div className='mt-12 flex'>
                <button className='w-[40%] justify-end bg-green-600 text-white font-bold text-2xl rounded-3xl hover:scale-85 duration-300 py-2 mb-6 shadow-xl'>Updated</button>
                <Link to={`/admin`} className='bg-yellow-600 p-2 py-3 ml-100 rounded-full font-bold text-lg text-white'>Back</Link>
            </div>
            
        </form>
        
      </div>
    </div>
  )
}

export default Update
