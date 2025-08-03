import React from 'react'
import Success from "../../assets/Img/success.png"

const Popup = ({ isOpen, onClose}) => {
    if(!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-2xl'>
      <div className='bg-gray-100 p-8 w-[300px] '>
        <img src={Success} alt="" className='absolute w-120 -mt-62 -ml-2 '/>
        <div className='mt-40 mb-12'>
            <h1 className='text-4xl font-bold mb-6'>Sign-in Successful!!!</h1>
            <p className='text-2xl font-semibold'>You have Signed-in for Today's CDs</p>
        </div>
        
        <button onClick={onClose} className='bg-green-700 w-24 p-4 text-white font-bold text-2xl rounded-4xl hover:scale-75 duration-300'>ok</button>
      </div>
    </div>
  )
}

export default Popup
