
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function FooterB() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-black">SHOP.CO</h2>
            <p className="text-sm">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
        
            <ul className="flex gap-4">
              <li><CiTwitter /></li>
              <li><FaFacebook /></li>
              <li><IoLogoInstagram /></li>
              <li><FaGithub /></li>
            </ul>
            </div>
          </div>

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-black uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:underline">About</a></li>
                <li><a href="#" className="text-sm hover:underline">Features</a></li>
                <li><a href="#" className="text-sm hover:underline">Works</a></li>
                <li><a href="#" className="text-sm hover:underline">Career</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black uppercase">Help</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:underline">Customer Support</a></li>
                <li><a href="#" className="text-sm hover:underline">Delivery Details</a></li>
                <li><a href="#" className="text-sm hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black uppercase">FAQ</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:underline">Account</a></li>
                <li><a href="#" className="text-sm hover:underline">Manage Deliveries</a></li>
                <li><a href="#" className="text-sm hover:underline">Orders</a></li>
                <li><a href="#" className="text-sm hover:underline">Payments</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black uppercase">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:underline">Free eBooks</a></li>
                <li><a href="#" className="text-sm hover:underline">Development Tutorials</a></li>
                <li><a href="#" className="text-sm hover:underline">How to - Blog</a></li>
                <li><a href="#" className="text-sm hover:underline">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="mt-12 border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex space-x-4">
              <Image src={require("../../../public/Badge.png")} alt="Visa" height={30.03} width={46.61}/>
              <Image src={require("../../../public/Badge (1).png")} alt="MasterCard" height={30.03} width={46.61}/>
              <Image src={require("../../../public/Badge (2).png")} alt="PayPal" height={30.03} width={46.61}/>
              <Image src={require("../../../public/Badge (4).png")} alt="Google Pay" height={30.03} width={46.61}/>
              <Image src={require("../../../public/Badge (5).png")} alt="Google Pay" height={30.03} width={46.61}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


            
