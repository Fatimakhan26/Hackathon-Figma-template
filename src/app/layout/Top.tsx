import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Top = () => {
  return (
    <div className='w-full bg-black hidden md:flex items-center justify-between p-2'>
        <div className='max-w-7xl mx-auto flex items-center justify-center'>
            <p className='text-white font-[14px]'>Sign up and get 20% off to your first order. 
                <span className='font-bold underline ml-2'>Sign Up Now</span>
            </p>
        </div>
        <p  className='text-white flex items-center gap-2 pr-28'>
            <RxCross2 /> 
            </p>
    </div>
  )
}

export default Top