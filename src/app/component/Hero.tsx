// import React from 'react'
// import Image from 'next/image'

      
// const Hero = () => {
//     return (
//     <div>
//         <div className=''>
//      <Image className='w-full relative'
//         src={require("../../../public/Rectangle 2.png")}
//         alt=''
//         height={1440}
//         width={663}/>
//         </div>
//         <div className='bottom-20 absolute'>
        
//             <h1 className='font-extrabold text-7xl p-5 pr-[550px] pl-16 font-[#Integral CF]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
//             <p className='text-gray-500 pl-16'>Browse through our diverse range of meticulously crafted garments, designed </p> 
//               <p className='text-gray-500 pl-16'>to bring out your individuality and cater to your sense of style.</p>
//             <button className='bg-black text-white rounded-3xl ml-16 mt-6 p-3 pr-10 pl-10'>Shop Now</button>
      
//         </div>
//         <div>
//           <ul className='bg-black text-white flex gap-28 pl-20 pt-5 pb-5'>
//          <li>
//           <Image          
//           src={require("../../../public/Group.png")}
//           alt=''
//           width={166.48}
//           height={33.16}/>
//          </li>

//          <li>
//           <Image
//           src={require("../../../public/zara-logo-1 1.png")}
//           alt=''
//           width={91}
//           height={38}/>
//          </li>

//          <li>
//           <Image
//           src={require("../../../public/gucci-logo-1 1.png")}
//           alt=''
//           width={156}
//           height={36}/>
//          </li>

//          <li>
//           <Image
//           src={require("../../../public/prada-logo-1 1.png")}
//           alt=''
//           width={194}
//           height={32}/>
//          </li>

//          <li>
//           <Image
//           src={require("../../../public/Group (1).png")}
//           alt=''
//           width={206.79}
//           height={33.35}/>
//          </li>
            

//           </ul>
//         </div>
    
//     </div>
//   )
// }
// export default Hero



import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div>
        <Image
          className="w-full"
          src={require("../../../public/Rectangle 2.png")}
          alt="Hero Background"
          height={1440}
          width={663}
          layout="responsive"
        />
      </div>

      {/* Hero Text Content */}
      <div className="absolute bottom-10 left-5 md:bottom-52 md:left-8 text-left">
        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-7xl leading-tight text-black max-w-[90%] md:max-w-[60%]">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-gray-500 mt-4 text-sm md:text-base lg:text-lg max-w-[90%] md:max-w-[60%]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black text-white rounded-3xl mt-6 py-3 px-8 md:px-10">
          Shop Now
        </button>
      </div>

      {/* Brand Logos Section */}
      <div className="bg-black text-white flex justify-center items-center flex-wrap gap-10 md:gap-16 lg:gap-28 py-5">
        <Image
          src={require("../../../public/Group.png")}
          alt="Brand Logo 1"
          width={120}
          height={24}
        />
        <Image
          src={require("../../../public/zara-logo-1 1.png")}
          alt="Zara Logo"
          width={80}
          height={32}
        />
        <Image
          src={require("../../../public/gucci-logo-1 1.png")}
          alt="Gucci Logo"
          width={130}
          height={30}
        />
        <Image
          src={require("../../../public/prada-logo-1 1.png")}
          alt="Prada Logo"
          width={160}
          height={28}
        />
        <Image
          src={require("../../../public/Group (1).png")}
          alt="Brand Logo 2"
          width={170}
          height={28}
        />
      </div>
    </div>
  );
};

export default Hero;
