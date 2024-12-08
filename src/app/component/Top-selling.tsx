import React from 'react'
import Image from 'next/image'
const TopS = () => {
  return (
    <div>
      <div>
        <p className='text-center font-extrabold text-4xl p-3'>TOP SELLING</p>
        <ul className='flex gap-16 pl-16 p-4'>
            <li>
                <Image
                src={require("../../../public/top.png")}
                alt=''
                width={295}
                height={298}/>
                <h1>VERTICAL STRIPED SHIRT</h1>
                <Image
                src={require("../../../public/star.png")}
                alt=''
                height={19}
                width={160.7}/>
                  <h1 className='flex'>
                  <h2 className='text-xl font-semibold'>$212</h2>
                <span className="text-gray-500 line-through ml-2 text-xl">$232</span>
                <span className='text-red-500 ml-10'>-20% </span>
                </h1>
                
            </li>

            <li>
                <Image
                src={require("../../../public/top 1.png")}
                alt=''
                width={295}
                height={298}/>
                <h1>COURAGE GRAPHIC T-SHIRT</h1>
                <Image
                src={require("../../../public/star2.png")}
                alt=''
                height={19}
                width={137.9}/>
                <h1 className='text-xl font-semibold'>$145</h1>
              
            </li>

            <li>
                <Image
                src={require("../../../public/top 2.png")}
                alt=''
                width={295}
                height={298}/>
                <h1>LOOSE FIT BERMUDA SHORTS</h1>
                <Image
                src={require("../../../public/star3.png")}
                alt=''
                height={19}
                width={113.09}/>
                <h1 className='text-xl font-semibold'>$180</h1>
            </li>

            <li>
                <Image
                src={require("../../../public/top 3.png")}
                alt=''
                width={295}
                height={298}/>
                <h1>FADED SKINNY JEANS</h1>
                <Image
                src={require("../../../public/Frame 35.png")}
                alt=''
                height={19}
                width={150}/>
                <h1 className='flex'>
                  <h2 className='text-xl font-semibold'>$130</h2>
                <span className="text-gray-500 line-through ml-2 text-xl">$160</span>
                <span className='text-red-500 ml-10'>-20% </span>
                </h1>
            </li>
         
        </ul>
        <button className='border-2 border-gray-300 rounded-full p-2 pl-16 pr-16 text-center ml-[650px]'>View All</button>
      </div>
    </div>
  )
}

export default TopS