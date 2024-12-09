import React from 'react'
import { Input } from '@/components/ui/input';
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center rounded-3xl bg-black mx-4 sm:mx-8 p-4 sm:p-6 lg:p-8'>
      <div className='text-center sm:text-left sm:w-1/2 mb-8 sm:mb-0'>
        <h1 className='bg-black rounded-3xl text-white text-3xl sm:text-4xl px-4 sm:px-8 pt-4 sm:pt-8 pb-4 sm:pb-6'>
          STAY UPTO DATE ABOUT
        </h1>
        <h1 className='bg-black rounded-3xl text-white text-3xl sm:text-4xl px-4 sm:px-8 pb-4 sm:pb-6'>
          OUR LATEST OFFERS
        </h1>
      </div>

      <div className='w-full sm:w-1/2'>
        <ul className='space-y-4'>
          <li className='relative'>
            <Input 
              placeholder="Enter your email address" 
              className="bg-[#F5F5F5] rounded-3xl text-center pl-12 pr-16 w-full max-w-xs sm:max-w-sm mx-auto relative" 
            />
            <CgMail className='absolute left-36 top-1/2 transform -translate-y-1/2 text-gray-600'/>
          </li>
          <li>
            <Input 
              placeholder="Subscribe to Newsletter" 
              className="bg-[#F5F5F5] rounded-3xl text-gray-900 text-center w-full max-w-xs sm:max-w-sm mx-auto" 
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;




