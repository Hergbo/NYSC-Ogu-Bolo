import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Admin() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("would you like to Delete?");
        if(confirm) {
            axios.delete('http://localhost:3000/users/' + id)
            .then(res => {
               location.reload();
            }).catch(err => console.log(err));
        }
    }
  return (
    <div className='bg-gray-900 h-screen'>
        <h1 className='bg-gray-800 text-white font-bold text-7xl p-12 text-center '>WELCOME ADMIN 😎</h1>
        <div className=' flex justify-between ml-[0px] p-24 bg-gray-700 ' >
            <div className='absolute'>
                <h1 className='text-6xl font-bold text-white w-full'>Signed-in Users</h1>
            </div>
            <div className=' relative ml-[1150px]'>
             <Link to="/register" className='bg-green-800 p-4 text-white text-3xl rounded-2xl shadow-black shadow-sm'>Users</Link>
            </div>
        </div>
        <div className='p-2 '>
            <div className=' '>
                <div className='ml-8 mt-4 text-xl mb-12'>
                    <div className='grid grid-cols-11  text-blue-700 font-bold'>
                        <h1>S/N</h1>
                        <h1 className='-ml-24'>UserID</h1>
                        <h1 className='-ml-24'>SURNAME</h1>
                        <h1 className='-ml-24'>MIDDLE NAME</h1>
                        <h1 className='-ml-24'>FIRST NAME</h1>
                        <h1 className='-ml-24'>STATE CODE</h1>
                        <h1 className='-ml-24'>GENDER</h1>
                        <h1 className='-ml-24'>CDS GROUP</h1>
                        <h1 className='-ml-40'>EMAIL</h1>
                        <h1>PHONE</h1>
                        <h1>ACTION</h1>
                    </div>
                </div>
                
                <div className=' ml-9 mt-4 '>
                    {
                        data.map((d, index) => (
                            <div key={d.index} className=' grid grid-cols-11 text-white font-medium'>
                                <div className='mt-2'>{index +1}</div>
                                <div className='mt-2 -ml-24'>{d.id}</div>
                                <div className='mt-2 -ml-24'>{d.surname}</div>
                                <div className='mt-2  -ml-24'>{d.middlename}</div>
                                <div className='mt-2  -ml-24'>{d.firstname}</div>
                                <div className='mt-2  -ml-24'>{d.statecode}</div>
                                <div className='mt-2  -ml-24'>{d.gender}</div>
                                <div className='mt-2  -ml-24'>{d.cdsgroup}</div>
                                <div className='mt-2 -ml-40'>{d.email}      </div>
                                <div className='mt-2'>{d.phone}</div>
                                <div className='-ml-12'>
                                    <Link to={`/update/${d.id}`} className='bg-yellow-600 p-3 rounded-md '>Edit</Link>
                                    <Link to={`/read/${d.id}`} className='bg-blue-600 p-3 rounded-md ml-4 '>Read</Link>
                                    <button onClick={ e => handleDelete(d.id)} className='bg-red-600 p-2 ml-4 rounded mb-4'>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Admin
