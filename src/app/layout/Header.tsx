

// import React from 'react'

// import Link from 'next/link'
// import { Input } from '@/components/ui/input'
// import { Heart, MenuIcon, Search, ShoppingCart } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
// import { IoIosArrowDropdown } from "react-icons/io";
// import Image from 'next/image'

// const Header = () => {
//   return (
//     <nav className='w-full mx-auto p-4'>
//     <div className="max-w-7xl mx-auto flex items-center justify-between">
//       <h1 className="text-2xl font-bold">SHOP.CO</h1>
//       <div className="hidden md:flex gap-7 text-gray-700">
//         <Link href={"#"} className='text-sm font-normal flex'>
//         Shop
//         <IoIosArrowDropdown className='mt-1' /> 
//         </Link>

//         <Link href={"#"} className='text-sm font-normal'>
//         On Sales
//         </Link>

//         <Link href={"#"} className='text-sm font-normal'>
//         New Arrivals
//         </Link>

//         <Link href={"#"} className='text-sm font-normal'>
//         Brands
//         </Link>
//       </div>
//       <div className="hidden md:flex gap-3">
//         <div className='relative'>
//           <Input placeholder="Search for Products..." className="bg-[#F5F5F5] pl-16 pr-60 -ml-6 mr-56 rounded-3xl"/>
//           <Search className='absolute left-2 top-1'/>
//         </div>
//         <Button variant={"outline"} size={"icon"} className='rounded-full'>
//           <ShoppingCart/>
//         </Button>
//         <Button variant={"outline"} size={"icon"} className='rounded-full'>
//          <Image src={require("../../../public/Frame (2).png")}
//          alt=''
//          height={24}
//          width={24}
//          />
//           </Button>
         
//       </div>
//       <Sheet>
//         <SheetTrigger className='flex md:hidden'>
//         <Button variant={"outline"} size={"icon"} className='rounded-full'>
//           <MenuIcon/>
//           </Button>
//         </SheetTrigger>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>SHOP.CO</SheetTitle>
//           </SheetHeader>
//           <div className="flex flex-col gap-6 mt-6">
//           <Link href={"#"} className='text-sm font-normal'>
//           Shop
//         </Link>

//         <Link href={"#"} className='text-sm font-normal'>
//         On Sales
//         </Link>

//         <Link href={"#"} className='text-sm font-normal'>
//         New Arrivals
//         </Link>

//         <Link href={"#"} className='text-sm font-normal'>
//         Brands
//         </Link>
//           </div>
//           <div className="mt-4">
//           <div className='relative'>
//           <Input placeholder="Search for Products" className="bg-[#F5F5F5] rounded"/>
//           <Search className='absolute right-2 top-2'/>
//         </div>
//         <div className='mt-4 space-x-2'>
//         <Button variant={"outline"} size={"icon"} className='rounded-full'>
//          <Image src={require("../../../public/Frame (2).png")}
//          alt=''
//          height={24}
//          width={24}
//          />
//           </Button>
//           <Button variant={"outline"} size={"icon"} className='rounded-full'>
//           <ShoppingCart/>
//         </Button>
//         </div>
//         </div>
//         </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   )
// }
// export default Header




import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Heart, MenuIcon, Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { IoIosArrowDropdown } from "react-icons/io";
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="w-full bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">SHOP.CO</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-7 text-gray-700">
          <Link href="#" className="text-sm font-normal flex items-center">
            Shop
            <IoIosArrowDropdown className="ml-1" />
          </Link>
          <Link href="#" className="text-sm font-normal">On Sales</Link>
          <Link href="#" className="text-sm font-normal">New Arrivals</Link>
          <Link href="#" className="text-sm font-normal">Brands</Link>
        </div>

        {/* Search and Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search Input */}
          <div className="relative w-[300px]">
            <Input
              placeholder="Search for Products..."
              className="bg-[#F5F5F5] pl-10 pr-4 rounded-full text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" />
          </div>

          {/* Action Buttons */}
          <Button variant="outline" size="icon" className="rounded-full">
            <ShoppingCart />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Image
              src={require("../../../public/Frame (2).png")}
              alt="User Icon"
              height={24}
              width={24}
            />
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant="outline" size="icon" className="rounded-full">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6">
              <Link href="#" className="text-sm font-normal">Shop</Link>
              <Link href="#" className="text-sm font-normal">On Sales</Link>
              <Link href="#" className="text-sm font-normal">New Arrivals</Link>
              <Link href="#" className="text-sm font-normal">Brands</Link>
            </div>
            <div className="mt-6">
              {/* Mobile Search */}
              <div className="relative">
                <Input
                  placeholder="Search for Products..."
                  className="bg-[#F5F5F5] rounded-full pl-10 pr-4 text-sm"
                />
                <Search className="absolute left-3 top-2.5 text-gray-500" />
              </div>
              {/* Action Buttons */}
              <div className="mt-4 flex space-x-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Image
                    src={require("../../../public/Frame (2).png")}
                    alt="User Icon"
                    height={24}
                    width={24}
                  />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ShoppingCart />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;