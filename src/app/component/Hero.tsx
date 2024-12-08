import React from 'react'
import Image from 'next/image'

      
const Hero = () => {
    return (
    <div>
        <div className=''>
     <Image className='w-full relative'
        src={require("../../../public/Rectangle 2.png")}
        alt=''
        height={1440}
        width={663}/>
        </div>
        <div className='bottom-20 absolute'>
        
            <h1 className='font-extrabold text-7xl p-5 pr-[550px] pl-16 font-[#Integral CF]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='text-gray-500 pl-16'>Browse through our diverse range of meticulously crafted garments, designed </p> 
              <p className='text-gray-500 pl-16'>to bring out your individuality and cater to your sense of style.</p>
            <button className='bg-black text-white rounded-3xl ml-16 mt-6 p-3 pr-10 pl-10'>Shop Now</button>
      
        </div>
        <div>
          <ul className='bg-black text-white flex gap-28 pl-20 pt-5 pb-5'>
         <li>
          <Image          
          src={require("../../../public/Group.png")}
          alt=''
          width={166.48}
          height={33.16}/>
         </li>

         <li>
          <Image
          src={require("../../../public/zara-logo-1 1.png")}
          alt=''
          width={91}
          height={38}/>
         </li>

         <li>
          <Image
          src={require("../../../public/gucci-logo-1 1.png")}
          alt=''
          width={156}
          height={36}/>
         </li>

         <li>
          <Image
          src={require("../../../public/prada-logo-1 1.png")}
          alt=''
          width={194}
          height={32}/>
         </li>

         <li>
          <Image
          src={require("../../../public/Group (1).png")}
          alt=''
          width={206.79}
          height={33.35}/>
         </li>
            

          </ul>
        </div>
    
    </div>
  )
}
export default Hero


