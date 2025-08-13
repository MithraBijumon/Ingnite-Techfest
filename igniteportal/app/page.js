import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex  items-center justify-around min-h-screen text-white">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-9xl font-bold">
          iGNiTE
        </h1>
        <h3 className="text-2xl">tagline</h3>
        <button className="relative inline-flex items-center justify-center p-[2px] text-[19px] mt-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-2 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Get Started!!
          </span>
        </button>
      </div>
      <img src="/assets/placeholder.png" alt="Ignite Techfest Logo" className='m-10 h-80' />
    </div>
    </>

  );
}
