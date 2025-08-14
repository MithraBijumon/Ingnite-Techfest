"use client";
import React, { useState } from "react";


const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden sm:flex flex-col gap-4 fixed right-0 top-[50vh] p-3 bg-[#6a666661] rounded-bl-2xl rounded-tl-2xl text-white">
        <SocialLinks />
      </div>

      {/* Mobile Floating Button */}
      <div className="sm:hidden fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-3 rounded-full bg-[#6a666661] text-white shadow-lg"
        >
          {/* Simple burger / close icon */}
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Drawer */}
        {open && (
          <div className="absolute bottom-16 right-0 bg-[#6a666661] p-4 rounded-xl flex flex-col gap-4 text-white">
            <SocialLinks />
          </div>
        )}
      </div>
    </>
  );
};

const SocialLinks = () => (
  <>
    {/* WhatsApp */}
    <a href="https://wa.me/###########" aria-label="WhatsApp" className="hover:text-green-400">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M20.52 3.48A11 11 0 0 0 2.84 18.09L2 22l3.98-1.05A11 11 0 1 0 20.52 3.48ZM12 20.5a8.5 8.5 0 0 1-4.2-1.14l-.3-.18-2.48.66.66-2.44-.19-.31A8.5 8.5 0 1 1 12 20.5Zm4.2-6.04c-.24-.12-1.43-.7-1.66-.78-.22-.08-.36-.12-.5.08-.15.2-.57.73-.7.88-.13.15-.26.17-.49.06-.23-.11-.95-.35-1.8-1.1-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.11-.46.11-.11.23-.26.34-.39.11-.13.15-.22.22-.37.07-.15.03-.28-.02-.39-.06-.11-.5-1.2-.68-1.64-.18-.43-.36-.37-.5-.38-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.29-.21.23-.78.77-.78 1.89 0 1.12.8 2.2.9 2.35.11.15 1.55 2.45 3.76 3.43.53.23.94.37 1.25.48.53.17 1.01.15 1.39.09.43-.06 1.3-.55 1.49-1.04.18-.49.18-.95.12-1.04-.06-.09-.2-.15-.43-.26Z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a href="https://instagram.com/yourhandle" aria-label="Instagram" className="hover:text-pink-400">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Z"/>
        <circle cx="12" cy="12" r="3.5"/>
        <circle cx="17.5" cy="6.5" r="1.25"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/yourhandle" aria-label="LinkedIn" className="hover:text-blue-400">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0ZM7.034 20.452H3.94V9h3.094v11.452ZM5.487 7.433A1.79 1.79 0 1 1 5.49 3.855a1.79 1.79 0 0 1-.003 3.578ZM20.452 20.452h-3.092v-5.566c0-1.328-.027-3.037-1.854-3.037-1.854 0-2.136 1.447-2.136 2.94v5.663H10.18V9h2.968v1.561h.042c.414-.784 1.427-1.611 3.096-1.611 3.31 0 4.166 2.179 4.166 5.013v6.489Z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a href="https://youtube.com/@yourhandle" aria-label="YouTube" className="hover:text-red-500">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M23.5 6.2a3.2 3.2 0 0 0-2.26-2.27C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.24.43A3.2 3.2 0 0 0 .5 6.2 38.7 38.7 0 0 0 0 12a38.7 38.7 0 0 0 .5 5.8 3.2 3.2 0 0 0 2.26 2.27C4.6 20.5 12 20.5 12 20.5s7.4 0 9.24-.43A3.2 3.2 0 0 0 23.5 17.8c.33-1.92.5-3.9.5-5.8s-.17-3.88-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"/>
      </svg>
    </a>
  </>
);

export default Sidebar;
