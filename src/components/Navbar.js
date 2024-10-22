import React, { useState } from 'react';
import { BiEditAlt, BiSearch, BiBell, BiMenu, BiX } from 'react-icons/bi';
import { MdOutlineSchool } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-black bg-opacity-50 px-4 py-2 flex items-center">
      {/* Logo - Always visible */}
      <div className="flex items-center">
        <a href="/">
          <img src="assets/logo.webp" alt="Logo" className="h-11" />
        </a>
      </div>

      {/* Only show this border in desktop view */}
      <div className="border-l-2 border-white h-9 mx-9 hidden md:block"></div>

      {/* Desktop View - Select Goal and City (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-4 mr-5">
        <div className="flex flex-col">
          <div className="flex flex-row font-bold items-center text-blue-500 space-x-1">
            <MdOutlineSchool className="h-4 w-4" />
            <p className="flex items-center text-xs">
              Select goal & <CiLocationOn className="h-4 w-4" /> city
            </p>
          </div>
          <select className="bg-transparent text-white rounded py-1 mt-1 text-sm">
            <option value="" className='text-black'>Select Goal</option>
            <option value="goal1" className='text-black'>Goal 1</option>
            <option value="goal2" className='text-black'>Goal 2</option>
          </select>
        </div>
      </div>

      {/* Desktop View - Search bar and icons (hidden on mobile) */}
      <div className="hidden xl:flex items-center space-x-4 mx-9">
        <div className="relative">
          <input
            type="text"
            className="bg-gray-100 border border-gray-300 rounded py-2 px-3 w-96 focus:outline-none"
            placeholder="Search..."
          />
          <BiSearch className="absolute top-2 right-3 h-5 w-5 text-gray-500" />
        </div>
      </div>

      {/* Desktop Icons (hidden on mobile) */}
      <div className='hidden md:flex flex-row justify-end ml-auto'>
        <div className="flex space-x-4 items-center">
          <div className="flex flex-col mx-6">
            <div className="flex flex-row items-center text-black space-x-1">
              <BiEditAlt className="h-5 w-5 text-white" />
              <p className="flex items-center text-white">Write a review</p>
            </div>
            <button className="py-1 px-2 text-white text-xs bg-blue-500 rounded-md">
              Get up to 500*
            </button>
          </div>

          <div className="border-l-2 border-white h-9"></div>

          <div className="flex items-center space-x-2 mx-6">
            <HiOutlineSquares2X2 className="h-6 w-6 text-white" title="Explore" />
            <button className="text-white">Explore</button>
          </div>

          <button className="text-gray-800 mx-6">
            <BiBell className="h-6 w-6 text-white" title="Notifications" />
          </button>
          
          <button className="text-gray-800">
            <BiMenu className="h-6 w-6 text-white" title="Menu" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
          {isMenuOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile View - Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          {/* Search bar */}
          <div className="px-4 py-2">
            <div className="relative w-full">
              <input
                type="text"
                className="bg-gray-100 border border-gray-300 rounded py-2 px-3 w-full focus:outline-none"
                placeholder="Search..."
              />
              <BiSearch className="absolute top-2 right-3 h-5 w-5 text-gray-500" />
            </div>
          </div>

          {/* Select Goal and City */}
          <div className="flex flex-col px-4 py-2">
            <div className="flex flex-row items-center text-blue-500 space-x-1">
              <MdOutlineSchool className="h-5 w-5" />
              <p className="flex items-center">
                Select goal & <CiLocationOn className="h-5 w-5" /> city
              </p>
            </div>
            <select className="bg-gray-100 border border-gray-300 rounded py-2 px-3 mt-2 w-full">
              <option value="">Select Goal</option>
              <option value="goal1">Goal 1</option>
              <option value="goal2">Goal 2</option>
            </select>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 px-4 py-2">
            <div className="flex items-center space-x-2 mr-4">
              <HiOutlineSquares2X2 className="h-6 w-6" title="Explore" />
              <button className="text-black">Explore</button>
            </div>

            <button className="text-gray-800 mr-4">
              <BiBell className="h-6 w-6" title="Notifications" />
            </button>

            <button className="text-gray-800">
              <BiMenu className="h-6 w-6" title="Menu" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
