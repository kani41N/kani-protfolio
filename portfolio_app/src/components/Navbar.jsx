import React, { useState } from 'react';
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-gray-700 top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <a href='#' className='text-2xl md:text-5xl text-white font-semibold'>LOGO</a>
       
        <div className={`menu md:w-auto ${navbarOpen ? 'flex md:justify-center' : 'hidden md:block'}`} id='navbar'>
          <ul className="flex flex-col p-4 md:flex-row md:space-x-8 mt-0">
            <li className='mb-4 md:mb-0'>
              <a href='#' className='block py-2 pl-3 pr-4 text-gray-300 sm:text-xl rounded md:p-0 hover:text-pink-500'>About</a>
            </li>
            <li className='mb-4 md:mb-0'>
              <a href='#' className='block py-2 pl-3 pr-4 text-gray-300 sm:text-xl rounded md:p-0 hover:text-pink-500'>Project</a>
            </li>
            <li>
              <a href='#' className='block py-2 pl-3 pr-4 text-gray-300 sm:text-xl rounded md:p-0 hover:text-pink-500'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} 
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white '>
              <RiMenu4Line size={20}/>
            </button>) 
          : (
            <button onClick={() => setNavbarOpen(false)} 
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white '>
              <IoMdClose size={20}/>
            </button>)}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
