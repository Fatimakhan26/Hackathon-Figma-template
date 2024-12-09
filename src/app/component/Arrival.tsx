// import React from 'react'
// import Image from 'next/image'
// const Arrival = () => {
//   return (
//     <div>
//       <p className='font-extrabold text-4xl text-center p-3'>NEW ARRIVALS</p>
//       <div>
//         <ul className='flex gap-16 pl-16 p-4'>
//             <li>
//                 <Image
//                 src={require("../../../public/Frame 32.png")}
//                 alt=''
//                 width={295}
//                 height={298}/>
//                 <h1>T-SHIRT WITH TAPE DETAILS</h1>
//                 <Image
//                 src={require("../../../public/Frame 35.png")}
//                 alt=''
//                 height={19}
//                 width={150}/>
//                 <h1 className='text-xl font-semibold'>$120</h1>
//             </li>

//             <li>
//                 <Image
//                 src={require("../../../public/Frame 33.png")}
//                 alt=''
//                 width={295}
//                 height={298}/>
//                 <h1>SKINNY FIT JEANS</h1>
//                 <Image
//                 src={require("../../../public/Frame 39.png")}
//                 alt=''
//                 height={19}
//                 width={126.2}/>
//                 <h1 className='flex'>
//                   <h2 className='text-xl font-semibold'>$240</h2>
//                 <span className="text-gray-500 line-through ml-2 text-xl">$260</span>
//                 <span className='text-red-500 ml-10'>-20% </span>
//                 </h1>
//             </li>

//             <li>
//                 <Image
//                 src={require("../../../public/Frame 34.png")}
//                 alt=''
//                 width={295}
//                 height={298}/>
//                 <h1>CHECKERED SHIRT</h1>
//                 <Image
//                 src={require("../../../public/Frame 35.png")}
//                 alt=''
//                 height={19}
//                 width={150}/>
//                 <h1 className='text-xl font-semibold'>$180</h1>
//             </li>

//             <li>
//                 <Image
//                 src={require("../../../public/Frame 38.png")}
//                 alt=''
//                 width={295}
//                 height={298}/>
//                 <h1>SLEEVE STRIPED T-SHIRT</h1>
//                 <Image
//                 src={require("../../../public/Frame 35.png")}
//                 alt=''
//                 height={19}
//                 width={150}/>
//                 <h1 className='flex'>
//                   <h2 className='text-xl font-semibold'>$130</h2>
//                 <span className="text-gray-500 line-through ml-2 text-xl">$160</span>
//                 <span className='text-red-500 ml-10'>-20% </span>
//                 </h1>
//             </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Arrival





import React from 'react'
import Image from 'next/image'

const Arrival = () => {
  return (
    <div>
      <p className='font-extrabold text-4xl text-center p-3'>NEW ARRIVALS</p>
      <div>
        <ul className='flex flex-wrap gap-8 justify-center sm:justify-start pl-4 sm:pl-4 p-4'>
          {/* Item 1 */}
          <li className='flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 max-w-[295px]'>
            <Image
              src={require("../../../public/Frame 32.png")}
              alt='T-Shirt with Tape Details'
              width={295}
              height={298}
              className="mb-4"
            />
            <h1 className='text-center text-xl sm:text-2xl'>T-SHIRT WITH TAPE DETAILS</h1>
            <Image
              src={require("../../../public/Frame 35.png")}
              alt='Price Tag'
              width={150}
              height={19}
              className="mb-2"
            />
            <h1 className='text-xl font-semibold'>$120</h1>
          </li>

          {/* Item 2 */}
          <li className='flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 max-w-[295px]'>
            <Image
              src={require("../../../public/Frame 33.png")}
              alt='Skinny Fit Jeans'
              width={295}
              height={298}
              className="mb-4"
            />
            <h1 className='text-center text-xl sm:text-2xl'>SKINNY FIT JEANS</h1>
            <Image
              src={require("../../../public/Frame 39.png")}
              alt='Price Tag'
              width={126.2}
              height={19}
              className="mb-2"
            />
            <h1 className='flex justify-center items-center'>
              <h2 className='text-xl font-semibold'>$240</h2>
              <span className="text-gray-500 line-through ml-2 text-xl">$260</span>
              <span className='text-red-500 ml-4'>-20%</span>
            </h1>
          </li>

          {/* Item 3 */}
          <li className='flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 max-w-[295px]'>
            <Image
              src={require("../../../public/Frame 34.png")}
              alt='Checkered Shirt'
              width={295}
              height={298}
              className="mb-4"
            />
            <h1 className='text-center text-xl sm:text-2xl'>CHECKERED SHIRT</h1>
            <Image
              src={require("../../../public/Frame 35.png")}
              alt='Price Tag'
              width={150}
              height={19}
              className="mb-2"
            />
            <h1 className='text-xl font-semibold'>$180</h1>
          </li>

          {/* Item 4 */}
          <li className='flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 max-w-[295px]'>
            <Image
              src={require("../../../public/Frame 38.png")}
              alt='Sleeve Striped T-Shirt'
              width={295}
              height={298}
              className="mb-4"
            />
            <h1 className='text-center text-xl sm:text-2xl'>SLEEVE STRIPED T-SHIRT</h1>
            <Image
              src={require("../../../public/Frame 35.png")}
              alt='Price Tag'
              width={150}
              height={19}
              className="mb-2"
            />
            <h1 className='flex justify-center items-center'>
              <h2 className='text-xl font-semibold'>$130</h2>
              <span className="text-gray-500 line-through ml-2 text-xl">$160</span>
              <span className='text-red-500 ml-4'>-20%</span>
            </h1>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Arrival
