
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 


const Footer = () => {
  return (
    <footer className=" bottom-0 w-full bg-zinc-900 text-zinc-200 py-8">
      <div className="container mx-auto px-5 text-center">
        {/* Logo and College Name */}
        <div className="mb-4">
          <img src="/AcademyLogo3.png" alt=" Logo" className="h-40 mx-auto mb-0" />
          <h2 className="text-lg font-bold text-white">
            klasse.de Akademie
          </h2>
          <p className="text-sm text-zinc-400">
           Learn German. Build Your Career. Explore Globe.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://facebook.com" 
            className="text-zinc-200 hover:text-orange-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            className="text-zinc-200 hover:text-orange-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="https://instagram.com" 
            className="text-zinc-200 hover:text-orange-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="text-zinc-200 hover:text-orange-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()}klasse.de Akademie. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
