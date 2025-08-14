import React from 'react'

const navbar = () => {
  return (
    <div className="fixed top-0 w-screen h-18 z-10 flex items-center justify-between ">
      <img src="/assets/logo.png" alt="Ignite Techfest Logo" className='invert h-15 m-8' />

      <div className="flex items-center justify-center gap-7 me-10 text-[19px]">
        <a href="#about" className="text-white hover:text-gray-300">About</a>
        <a href="#incentive" className="text-white hover:text-gray-300">Incentives</a>
        <a href="#Collabration" className="text-white hover:text-gray-300">Collabrations</a>
        <a href="#contact" className="text-white hover:text-gray-300">Contact us</a>
       <button className="relative inline-flex items-center  justify-center p-0.5 text-[19px] mx-auto overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 text-yellow-200 hover:text-shadow-none dark:hover:text-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Register Now!!
            </span>
          </button>
      </div>
    </div>


  )
}

export default navbar
