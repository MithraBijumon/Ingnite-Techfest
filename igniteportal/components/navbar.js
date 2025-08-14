"use client"
import React from 'react'
import { useState } from "react";


const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`sm:fixed  top-0 w-screen  ${isOpen ? "h-auto" : "h-18"} z-10 flex flex-col sm:flex-row items-center justify-between `}>
      <div className='flex'>
      <div className="sm:hidden flex items-center justify-end">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
      </div>
      <img src="/assets/logo.png" alt="Ignite Techfest Logo" className='invert h-15 m-8' />
      </div>

      <div className="sm:flex items-center justify-center gap-7 me-10 text-[19px] hidden">
        <a href="#about" className="text-white hover:text-[#ffff33] hover:[text-shadow:0_0_5px_#ffff33,0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33] transition duration-300">About</a>
        <a href="#incentive" className="text-white hover:text-[#ffff33] hover:[text-shadow:0_0_5px_#ffff33,0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33] transition duration-300">Incentives</a>
        <a href="#Collabration" className="text-white hover:text-[#ffff33] hover:[text-shadow:0_0_5px_#ffff33,0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33] transition duration-300">Collabrations</a>
        <a href="#contact" className="text-white hover:text-[#ffff33] hover:[text-shadow:0_0_5px_#ffff33,0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33] transition duration-300">Contact us</a>
       <button className="relative inline-flex items-center  justify-center p-0.5 text-[19px] mx-auto overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 text-yellow-200 hover:text-shadow-none dark:hover:text-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Register Now!!
            </span>
          </button>
      </div>



      {/* Mobile Menu Button */}
      

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 mt-4 mb-7 overflow-clip">
          <a href="#about" className="text-white hover:text-[#ffff33] hover:[text-shadow:0_0_5px_#ffff33,0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33] transition duration-300">About</a>
          <a href="#incentive" className="text-white hover:text-[#ffff33] hover:[text-shadow:0_0_5px_#ffff33,0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33] transition duration-300">Incentives</a>
          <a href="#Collabration" className="text-white hover:text-[#ffff33] hover:[text-shadow:0_0_5px_#ffff33,0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33] transition duration-300">Collabrations</a>
          <a href="#contact" className="text-white hover:text-[#ffff33] hover:[text-shadow:0_0_5px_#ffff33,0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33] transition duration-300">Contact us</a>
        </div>
      )}
    </div>


  )
}

export default navbar
