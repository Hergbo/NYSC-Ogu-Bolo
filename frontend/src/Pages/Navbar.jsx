import React, { useEffect, useState } from 'react'
import Logo from "../assets/Img/logo.png"



const Navbar = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => { 
          setCurrentDateTime(new Date());
          }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    
        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
    
        return `${dayName}, ${monthName} ${day}, ${year}`;
    };

    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2,'0');
        const seconds = date.getSeconds().toString().padStart(2,'0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        hours = hours % 12;
        hours = hours ? hours : 12;
    
        return `${hours}:${minutes}:${seconds} ${ampm}`
    };
  
 return (
    <div>
        <div className='relative bg-white shadow-md shadow-gray-600 h-36 md:h-48 lg:h-64'>
            <div className='container p-4'>
                <img src={Logo} alt=""  className='w-10 md:w-18 lg:w-24 items-center ml-[140px] md:ml-[440px] lg:ml-[645px]'/>
            </div>
            <div className='text-center '>
                <h1 className='font-extrabold lg:text-2xl'>NYSC, RIVERS STATE</h1>
                <p className='font-bold lg:text-2xl'>Ogu/Bolo Local Govt. Area</p>
            </div>

            <div className='flex flex-col lg:flex text-end font-medium -mt-32 lg:-mt-48 text-[7px] md:text-[14px] lg:text-[14px] p-3'>
                    <p>{formatDate(currentDateTime)}</p>
                    <p>{formatTime(currentDateTime)}</p>
            </div>
            
            <div>
                
            </div>
        </div>
    </div>
 )
}
export default Navbar