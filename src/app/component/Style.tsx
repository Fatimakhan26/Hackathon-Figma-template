import React from 'react'
import Image from 'next/image'

const Style = () => {
  return (
    <div className='bg-gray-100 h-[866px] w-[1239px] mx-auto rounded-3xl mt-9'>
      <h1 className='font-extrabold text-4xl text-center pt-20 pb-16'>BROWSE BY DRESS STYLE</h1>
      <div>
        <ul className='ml-16 gap-4 flex pb-10'>
            <li>
                <Image
                src={require("../../../public/Frame 61.png")}
                alt=''
                width={407}
                height={289}/>
            </li>
            <li>
                <Image
                src={require("../../../public/Frame 62.png")}
                alt=''
                width={684}
                height={289}/>
            </li>


        </ul>

      </div>

      <div>
        <ul className='ml-16 gap-4 flex'>
            <li>
                <Image
                src={require("../../../public/Frame 64.png")}
                alt=''
                width={684}
                height={289}/>
            </li>
            <li>
                <Image
                src={require("../../../public/Frame 63.png")}
                alt=''
                width={407}
                height={289}/>
            </li>


        </ul>

      </div>
    </div>
  )
}

export default Style