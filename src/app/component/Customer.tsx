import React from 'react'

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const Customer = () => {
  return (
    <div>
    <div>
        <ul className='flex gap-5 mt-5'>
     <li className='text-4xl font-extrabold text-center p-4 ml-16'>OUR HAPPY CUSTOMERS </li>
     <li className='mt-7 ml-[700px]'> <FaArrowLeft /> </li>
      <li className='mt-7'><FaArrowRight /></li>
      </ul>
     </div>
      <div>
     <ul className='flex gap-10 ml-24'>
        <li>
        <Image src={require("../../../public/comment 1.png")}
        alt=''
        width={400}
        height={240}/>
        </li>

        <li>
        <Image src={require("../../../public/comment 2.png")}
        alt=''
        width={400}
        height={240}/>
        </li>

        <li>
        <Image src={require("../../../public/comment 3.png")}
        alt=''
        width={400}
        height={240}/>
        </li>
      </ul>
      </div>
      
      
    
    </div>

  )
}

export default Customer
