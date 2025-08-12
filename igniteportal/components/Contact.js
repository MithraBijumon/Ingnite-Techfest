import React from 'react';

// Data for the team members
const teamMembers = [
  { 
    name: "Aarav", 
    role: "Convener", 
    email: "aarav@example.com", 
    photo: "https://placehold.co/128x128/EFEFEF/333333?text=AP",
    insta: "xyz_aarav",
    whatsapp: "919876543210" // Use country code + number
  },
  { 
    name: "Mon" ,
    role: "Operations", 
    email: "monu@example.com", 
    photo: "https://placehold.co/128x128/EFEFEF/333333?text=MS",
    insta: "meera_sharma_xyz",
    whatsapp: "919876543211"
  },
  { 
    name: "Ishaan ", 
    role: "Sponsorships", 
    email: "ishaan@example.com", 
    photo: "https://placehold.co/128x128/EFEFEF/333333?text=IV",
    insta: "ishaan_v_xyz",
    whatsapp: "919876543212"
  },
];

// This is the React component for a single contact card
const ContactCard = ({ member }) => {
  return (
    // The main container for a card with a white border and padding
    <div className="border border-white p-6 w-72 text-center rounded-lg">
      
      {/* Placeholder for the photo */}
      <div className="w-32 h-32 border-2 border-gray-600 rounded-full mx-auto mb-4 bg-gray-700/50 overflow-hidden">
        {/* The <img> tag is now active, showing a placeholder image */}
        <img src={member.photo} alt={`Photo of ${member.name}`} className="w-full h-full object-cover" />
      </div>
      
      <h3 className="text-2xl font-semibold">{member.name}</h3>
      <p className="text-gray-400 mb-4">{member.role}</p>
      
      {/* Container for the social links */}
      <div className="flex flex-col items-center gap-2">
        <a href={`mailto:${member.email}`} className="text-white hover:underline">Email</a>
        <a href={`https://instagram.com/${member.insta}`} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Instagram</a>
        <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">WhatsApp</a>
      </div>
    </div>
  );
};

// This is the main Contact section component
const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>
        
        {/* This container uses flexbox to arrange the cards */}
        <div className="flex justify-center gap-8 flex-wrap">
          {teamMembers.map((member) => (
            <ContactCard key={member.email} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default ContactSection