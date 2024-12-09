// import React from 'react'

// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import Image from 'next/image';

// const Customer = () => {
//   return (
//     <div>
//     <div>
//         <ul className='flex gap-5 mt-5'>
//      <li className='text-4xl font-extrabold text-center p-4 ml-16'>OUR HAPPY CUSTOMERS </li>
//      <li className='mt-7 ml-[700px]'> <FaArrowLeft /> </li>
//       <li className='mt-7'><FaArrowRight /></li>
//       </ul>
//      </div>
//       <div>
//      <ul className='flex gap-10 ml-24'>
//         <li>
//         <Image src={require("../../../public/comment 1.png")}
//         alt=''
//         width={400}
//         height={240}/>
//         </li>

//         <li>
//         <Image src={require("../../../public/comment 2.png")}
//         alt=''
//         width={400}
//         height={240}/>
//         </li>

//         <li>
//         <Image src={require("../../../public/comment 3.png")}
//         alt=''
//         width={400}
//         height={240}/>
//         </li>
//       </ul>
//       </div>
      
      
    
//     </div>

//   )
// }

// export default Customer


import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Customer = () => {
  return (
    <div>
      {/* Title and arrows section */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center px-4 mt-5">
        <h1 className="text-4xl font-extrabold text-center sm:text-left ml-96 p-4 sm:p-0">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-5 items-center mt-4 sm:mt-0">
          <FaArrowLeft className="cursor-pointer text-2xl" />
          <FaArrowRight className="cursor-pointer text-2xl" />
        </div>
      </div>

      {/* Images section */}
      <div className="mt-8">
        <ul className="flex flex-wrap justify-center gap-8 px-4 sm:px-16">
          <li className="w-full sm:w-1/3 lg:w-1/4">
            <Image
              src={require("../../../public/comment 1.png")}
              alt="Customer Feedback 1"
              width={400}
              height={240}
              className="w-full h-auto"
            />
          </li>

          <li className="w-full sm:w-1/3 lg:w-1/4">
            <Image
              src={require("../../../public/comment 2.png")}
              alt="Customer Feedback 2"
              width={400}
              height={240}
              className="w-full h-auto"
            />
          </li>

          <li className="w-full sm:w-1/3 lg:w-1/4">
            <Image
              src={require("../../../public/comment 3.png")}
              alt="Customer Feedback 3"
              width={400}
              height={240}
              className="w-full h-auto"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Customer;
