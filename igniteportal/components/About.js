import React from "react";

export default function Incentive() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white mb-12">About</h1>

        {/* Subtle warm background box */}
        <div className="bg-gradient-to-br from-orange-100/80 via-amber-100/70 to-yellow-50/80
                        rounded-2xl shadow-md shadow-orange-900/20 p-8 max-w-3xl border border-orange-200/50">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Ignite Techfest is an annual celebration of technology, creativity, and innovation.  
            Our mission is to bring together brilliant minds, inspire collaboration, and spark 
            ideas that have the power to change the world. From cutting-edge competitions to 
            insightful workshops, Ignite is where passion meets opportunity.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Whether you’re a developer, designer, entrepreneur, or simply a tech enthusiast, 
            Ignite Techfest offers you a platform to learn, showcase, and grow.  
            Together, we aim to foster a community that thrives on curiosity and invention.
          </p>
        </div>
      </div>
    </section>
  );
}

