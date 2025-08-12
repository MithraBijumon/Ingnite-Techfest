import React from 'react'

const navbar = () => {
  return (
    <div class="absolute top-0 w-screen h-25 z-[-2] flex items-center justify-between">
      <img src="/assets/logo.png" alt="Ignite Techfest Logo" className='invert h-15 m-8' />

      <div class="flex items-center justify-center gap-7 me-10 text-[19px]">
        <a href="#about" class="text-white hover:text-gray-300">About</a>
        <a href="#events" class="text-white hover:text-gray-300">Incentives</a>
        <a href="#Collabration" class="text-white hover:text-gray-300">Collabrations</a>
        <a href="#contact" class="text-white hover:text-gray-300">Contact us</a>
      <button class="relative inline-flex items-center justify-center p-0.5 text-[19px]  me-7 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Register Now!!
        </span>
      </button>
      </div>
    </div>


  )
}

export default navbar
