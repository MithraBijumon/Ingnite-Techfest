import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex  items-center justify-around min-h-screen text-white">
      <div className="flex flex-col m-10">
        <h1 className="text-9xl font-bold mb-4">
          iGNiTE
        </h1>
        <h3 className="text-2xl">tagline</h3>
      </div>
      <img src="/assets/placeholder.png" alt="Ignite Techfest Logo" className='m-10 h-80' />
      </div>
    </>

  );
}
