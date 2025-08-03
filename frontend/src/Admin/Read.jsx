
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Read() {
    const [data, setData] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
        .then(res => {console.log (res.data); setData(res.data)})
        .catch(err => console.log(err));
    }, [])

  return (
    <div className=''>
        <div className='flex justify-center items-center mt-12 lg:mt-8 h-screen'>
            <div className='shadow-xl p-6 md:p-20 lg:p-32 w-[320px] md:w-[550px] lg:w-[500px]  bg-gray-100'>
                <h2 className='font-extrabold mb-8 text-3xl md:text-3xl lg:text-5xl text-green-600 text-center'>Detail of User</h2>
                <div className='text-xl font-extrabold '>
                    <div className='mb-3 flex mt-3 justify-between'>
                        <h1>Surname : </h1>
                        <h1 className='absolute ml-48'>{data.surname}</h1>
                    </div>
                    <div className='mb-3 flex mt-3 justify-between'>
                        <h1>Middle Name : </h1>
                        <h1 className='absolute ml-48'>{data.middlename}</h1>
                    </div>
                    <div className='mb-3 flex mt-3 justify-between'>
                        <h1>First Name : </h1>
                        <h1 className='absolute ml-48'>{data.firstname}</h1>
                    </div>
                    <div className='mb-3 flex mt-3 justify-between'>
                        <h1>State Code : </h1>
                        <h1 className='absolute ml-48'>{data.statecode}</h1>
                    </div>
                    <div className='mb-3 flex mt-3 justify-between'>
                        <h1>Gender : </h1>
                        <h1 className='absolute ml-48'>{data.gender}</h1>
                    </div>
                    <div className='mb-3 flex mt-3 justify-between'>
                        <h1>CDS Group : </h1>
                        <h1 className='absolute ml-48'>{data.cdsgroup}</h1>
                    </div>
                    <div className='mb-3 flex mt-3 justify-between'>
                        <h1>Email : </h1>
                        <h1 className='absolute ml-48'>{data.email}</h1>
                    </div>
                    <div className='mb-3 flex mt-3 justify-between'>
                        <h1>Phone Number : </h1>
                        <h1 className='absolute ml-48'>{data.phone}</h1>
                    </div>
                </div>
            
                <div className='mt-4 ml-[300px] text-white font-bold '>
                    <Link to={`/update/${id}`} className='bg-yellow-600 p-3 rounded-md'>Edit</Link>
                    <Link to={`/admin`} className='bg-red-600 p-3 ml-4 rounded mb-4'>Back</Link>
                </div>
                
            </div>
        </div>
    </div>
   
  )
}

export default Read
