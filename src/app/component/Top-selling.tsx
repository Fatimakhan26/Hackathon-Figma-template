// import React from 'react'
// import Image from 'next/image'
// const TopS = () => {
//   return (
//     <div>
//       <div>
//         <p className='text-center font-extrabold text-4xl p-3'>TOP SELLING</p>
//         <ul className='flex gap-16 pl-16 p-4'>
//             <li>
//                 <Image
//                 src={require("../../../public/top.png")}
//                 alt=''
//                 width={295}
//                 height={298}/>
//                 <h1>VERTICAL STRIPED SHIRT</h1>
//                 <Image
//                 src={require("../../../public/star.png")}
//                 alt=''
//                 height={19}
//                 width={160.7}/>
//                   <h1 className='flex'>
//                   <h2 className='text-xl font-semibold'>$212</h2>
//                 <span className="text-gray-500 line-through ml-2 text-xl">$232</span>
//                 <span className='text-red-500 ml-10'>-20% </span>
//                 </h1>
                
//             </li>

//             <li>
//                 <Image
//                 src={require("../../../public/top 1.png")}
//                 alt=''
//                 width={295}
//                 height={298}/>
//                 <h1>COURAGE GRAPHIC T-SHIRT</h1>
//                 <Image
//                 src={require("../../../public/star2.png")}
//                 alt=''
//                 height={19}
//                 width={137.9}/>
//                 <h1 className='text-xl font-semibold'>$145</h1>
              
//             </li>

//             <li>
//                 <Image
//                 src={require("../../../public/top 2.png")}
//                 alt=''
//                 width={295}
//                 height={298}/>
//                 <h1>LOOSE FIT BERMUDA SHORTS</h1>
//                 <Image
//                 src={require("../../../public/star3.png")}
//                 alt=''
//                 height={19}
//                 width={113.09}/>
//                 <h1 className='text-xl font-semibold'>$180</h1>
//             </li>

//             <li>
//                 <Image
//                 src={require("../../../public/top 3.png")}
//                 alt=''
//                 width={295}
//                 height={298}/>
//                 <h1>FADED SKINNY JEANS</h1>
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
//         <button className='border-2 border-gray-300 rounded-full p-2 pl-16 pr-16 text-center ml-[650px]'>View All</button>
//       </div>
//     </div>
//   )
// }

// export default TopS



import React from 'react';
import Image from 'next/image';

const TopS = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      {/* Section Title */}
      <h1 className="text-center font-extrabold text-3xl md:text-4xl mb-8">
        TOP SELLING
      </h1>

      {/* Product List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {/* Product 1 */}
        <li className="text-center">
          <Image
            src={require("../../../public/top.png")}
            alt="Vertical Striped Shirt"
            width={295}
            height={298}
            className="mx-auto"
          />
          <h2 className="font-semibold text-lg mt-4">VERTICAL STRIPED SHIRT</h2>
          <Image
            src={require("../../../public/star.png")}
            alt="Rating: 5 stars"
            width={160.7}
            height={19}
            className="mx-auto mt-2"
          />
          <div className="flex items-center justify-center mt-2">
            <p className="text-xl font-semibold">$212</p>
            <span className="text-gray-500 line-through ml-2 text-xl">$232</span>
            <span className="text-red-500 ml-4">-20%</span>
          </div>
        </li>

        {/* Product 2 */}
        <li className="text-center">
          <Image
            src={require("../../../public/top 1.png")}
            alt="Courage Graphic T-Shirt"
            width={295}
            height={298}
            className="mx-auto"
          />
          <h2 className="font-semibold text-lg mt-4">COURAGE GRAPHIC T-SHIRT</h2>
          <Image
            src={require("../../../public/star2.png")}
            alt="Rating: 4 stars"
            width={137.9}
            height={19}
            className="mx-auto mt-2"
          />
          <p className="text-xl font-semibold mt-2">$145</p>
        </li>

        {/* Product 3 */}
        <li className="text-center">
          <Image
            src={require("../../../public/top 2.png")}
            alt="Loose Fit Bermuda Shorts"
            width={295}
            height={298}
            className="mx-auto"
          />
          <h2 className="font-semibold text-lg mt-4">LOOSE FIT BERMUDA SHORTS</h2>
          <Image
            src={require("../../../public/star3.png")}
            alt="Rating: 3 stars"
            width={113.09}
            height={19}
            className="mx-auto mt-2"
          />
          <p className="text-xl font-semibold mt-2">$180</p>
        </li>

        {/* Product 4 */}
        <li className="text-center">
          <Image
            src={require("../../../public/top 3.png")}
            alt="Faded Skinny Jeans"
            width={295}
            height={298}
            className="mx-auto"
          />
          <h2 className="font-semibold text-lg mt-4">FADED SKINNY JEANS</h2>
          <Image
            src={require("../../../public/Frame 35.png")}
            alt="Rating: 5 stars"
            width={150}
            height={19}
            className="mx-auto mt-2"
          />
          <div className="flex items-center justify-center mt-2">
            <p className="text-xl font-semibold">$130</p>
            <span className="text-gray-500 line-through ml-2 text-xl">$160</span>
            <span className="text-red-500 ml-4">-20%</span>
          </div>
        </li>
      </ul>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="border-2 border-gray-300 rounded-full px-12 py-2 hover:bg-gray-200 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopS;