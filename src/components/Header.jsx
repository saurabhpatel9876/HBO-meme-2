"use client"

// components/Header.js
import Link from 'next/link';
import { useState } from 'react';
import logo from "../assets/logo.jpg"
import Image from 'next/image'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" p-1 bg-gray-300 m-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or brand */}
        <Link className="text-black text-lg font-bold" href="/">
        {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
        <Image
        className=""
      src={logo}
      alt="Picture of the author"
      width={400}
      height={400}
    />
        <span className="text-xl tracking-tight">Honorable Bitcoin Overlord(HBO)</span>
        </Link>

        {/* Responsive toggle button */}
        <button
          className=" text-2xl font-bold lg:hidden  text-black focus:outline-none hover:bg-gray-800 hover:text-white rounded-xl p-1"
          onClick={toggleNavbar}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        {/* Navbar links for larger screens */}
        <div className="hidden lg:flex space-x-4  text-black">
        <Link  className=" font-extrabold text-2xl block text-black mb-2 hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/">
              Home
            </Link>
          <Link className="font-extrabold text-2xl block text-black mb-2 hover:bg-gray-600 hover:text-white rounded-xl p-1 " href="/About">
            About HBO
          </Link>
          <Link className="font-extrabold text-2xl block text-black mb-2 hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/HBOMore">
            More about HBO
          </Link>
          {/* <Link className="text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/">
           Services
          </Link>
          <Link className="text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/">
           Pricing
          </Link>
          <Link className="text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/">
           Contact Us
          </Link>
          <button className="block text-white bg-black rounded-xl p-1 hover:bg-gray-600" >
            Login
            </button> */}
        </div>

        {/* Responsive Navbar links */}
        {isOpen && (
          
          <div className="lg:hidden relative top-16 left-0 right-0  p-4 bg-black  font-extrabold text-2xl text-black ">
            <Link  className=" block text-white mb-2 hover:bg-gray-600 hover:text-white rounded-xl p-1 font-extrabold text-2xl" href="/">
              Home
            </Link>
            <Link  className=" block text-white mb-2 hover:bg-gray-600 hover:text-white rounded-xl p-1 font-extrabold text-2xl" href="/About">
              About HBO
            </Link>
            <Link className="block text-white mb-2 hover:bg-gray-600 hover:text-white rounded-xl p-1 font-extrabold text-2xl" href="/HBOMore">
            More about HBO
            </Link>
            {/* <Link className="block text-white hover:bg-gray-600 hover:text-white rounded-xl p-1 font-extrabold text-2xl" href="/">
            Services
            </Link>
            <Link className="block text-white hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/">
             Pricing 
            </Link>
            <Link className="block text-white hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/">
             Contact Us
            </Link>
            <button className="block text-white bg-black rounded-xl p-1 hover:bg-gray-700" >
            Login
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
