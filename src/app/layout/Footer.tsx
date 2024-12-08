// import React from 'react'
import { CgMail } from "react-icons/cg";
// import { LuSendHorizontal } from "react-icons/lu";
// import { LuFacebook } from "react-icons/lu";
// import { CiTwitter } from "react-icons/ci";
// import { FaInstagram } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";
// import { SlSocialLinkedin } from "react-icons/sl";
import { Input } from '@/components/ui/input';


// const Footer = () => {
//   return (
//     <div>
//       <div className='bg-black rounded-3xl'>
//         <ul className=''>
//         <h1 className='bg-black text-white text-6xl pl-16 pt-10'>STAY UPTO DATE ABOUT </h1>
//         <h1 className='bg-black text-white text-6xl pl-16'>OUR LATEST OFFERS</h1>
//         </ul>
//         <ul className='flex flex-col pl-[800px] pr-80 pb-10'>
//         <div className='relative p-2 -mt-10'>
//           <Input placeholder="Enter your email address" className="bg-[#F5F5F5] rounded-3xl text-center"/>
//           <CgMail className='absolute left-8 top-4'/>
//         </div>
//           <Input placeholder="Subscribe to Newsletter" className="bg-[#F5F5F5] rounded-3xl text-gray-900 text-center"/>
//           </ul>
//         </div>
//         <div className='w-[1349px] h-[440px] pt-[10%] bg-white flex justify-evenly'>
//         <div>
//             <h2 className='h-[24px] w-[118px] font-[700] text-white text-[24px]'>SHOP.CO</h2>
//             <p className='text-[16px] font-normal w-[260px] h-[24px] text-white'>We have clothes that suits your style and which 
//             you’re proud to wear. From women to men.</p>
//         </div>
//         <div>
//             <h2 className='w-[81px] h-[28px] text-[20px] text-white font-[500] mb-4'>Company</h2>
//             <p className='w-[175px] h-[48px] text-[16px] font-normal text-white mb-3'>About</p>
//             <p className='w-[175px] h-[48px] text-[16px] font-normal text-white'>Career</p>
//             <p className='w-[175px] h-[48px] text-[16px] font-normal text-white'>Work</p>
//             <p className='w-[175px] h-[48px] text-[16px] font-normal text-white'>Features</p>
//         </div>

//         <div>
//         <h2 className='w-[85px] h-[28px] text-[20px] text-white font-[500] mb-4'>Help</h2>
//         <p className='w-[94px] h-[48px] text-[16px] font-normal text-white'>Customer Support</p>
//         <p className='w-[123px] h-[48px] text-[16px] font-normal text-white'>Delivery Details</p>
//         <p className='w-[35px] h-[48px] text-[16px] font-normal text-white'>Terms & Conditions</p>
//         <p className='w-[61px] h-[48px] text-[16px] font-normal text-white'>Privacy Policy</p>
       
//         </div>

//         <div>
//         <h2 className='w-[101px] h-[28px] text-[20px] text-white font-[500] mb-4'>FAQ</h2>
//         <p className='w-[109px] h-[48px] text-[16px] font-normal text-white'>Account</p>
//         <p className='w-[105px] h-[48px] text-[16px] font-normal text-white'>Manage Deliveries</p>
//         <p className='w-[32px] h-[48px] text-[16px] font-normal text-white'>Orders</p>
//         <p className='w-[66px] h-[48px] text-[16px] font-normal text-white'>Payments</p>

//         </div>
//         <div>
//         <h2 className='w-[101px] h-[28px] text-[20px] text-white font-[500] mb-4'>RESOURCES</h2>
//         <p className='w-[109px] h-[48px] text-[16px] font-normal text-white'>Free eBooks</p>
//         <p className='w-[105px] h-[48px] text-[16px] font-normal text-white'>Development Tutorial</p>
//         <p className='w-[32px] h-[48px] text-[16px] font-normal text-white'>How to - Blog</p>
//         <p className='w-[66px] h-[48px] text-[16px] font-normal text-white'>Youtube Playlist</p>

//         </div>

//         </div>
//         <div className='flex gap-[24px] w-[168px] h-[24px] text-white mt-3'>
//         <CiTwitter  className='w-[24px] h-[24px]'/>
//         <LuFacebook className='w-[24px] h-[24px]' />
//         <FaInstagram className='w-[24px] h-[24px]' />
//         <FaGithub className='w-[24px] h-[24px]' />

       
//         </div>
//     </div>
    

//   )
// }

// export default Footer

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
       <div className='bg-black rounded-3xl'>
         <ul className=''>
         <h1 className='bg-black text-white text-6xl pl-16 pt-10'>STAY UPTO DATE ABOUT </h1>
         <h1 className='bg-black text-white text-6xl pl-16'>OUR LATEST OFFERS</h1>
         </ul>
         <ul className='flex flex-col pl-[800px] pr-80 pb-5'>
         <div className='relative p-2'>
           <Input placeholder="Enter your email address" className="bg-[#F5F5F5] rounded-3xl text-center pl-9"/>
           <CgMail className='absolute left-8 top-4'/>
        </div>
          <Input placeholder="Subscribe to Newsletter" className="bg-[#F5F5F5] rounded-3xl text-gray-900 text-center"/>
          </ul>
  </div>

      {/* Footer Links Section */}
      <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* About Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-bold mb-2">SHOP.CO</h3>
          <p className="text-sm mr-52">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Twitter" className="hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-gray-800">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="mr-44">
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">About</a></li>
            <li><a href="#" className="hover:text-gray-800">Features</a></li>
            <li><a href="#" className="hover:text-gray-800">Works</a></li>
            <li><a href="#" className="hover:text-gray-800">Career</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Customer Support</a></li>
            <li><a href="#" className="hover:text-gray-800">Delivery Details</a></li>
            <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">FAQ</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Account</a></li>
            <li><a href="#" className="hover:text-gray-800">Manage Deliveries</a></li>
            <li><a href="#" className="hover:text-gray-800">Orders</a></li>
            <li><a href="#" className="hover:text-gray-800">Payments</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Free eBooks</a></li>
            <li><a href="#" className="hover:text-gray-800">Development Tutorials</a></li>
            <li><a href="#" className="hover:text-gray-800">How-to Blog</a></li>
            <li><a href="#" className="hover:text-gray-800">YouTube Playlist</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom
      <div className="border-t py-4 px-6 text-sm text-center flex flex-col md:flex-row justify-between items-center">
        <span>Shop.co © 2000-2023, All Rights Reserved</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <img src="/visa.png" alt="Visa" className="h-5" />
          <img src="/paypal.png" alt="PayPal" className="h-5" />
          <img src="/applepay.png" alt="Apple Pay" className="h-5" />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

            
