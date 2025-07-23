import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg py-3 px-6 border-b border-zinc-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/mohd-saif-1850-web-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0A66C2] transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://wa.me/8218532681"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://www.instagram.com/mohd_saif_1850"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/1btZkKMBCm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1877F2] transition"
          >
            <FaFacebook size={20} />
          </a>
        </div>

        
        <ul className="flex gap-6 text-white text-sm sm:text-base font-medium">
          <HashLink smooth to="#" className="hover:text-yellow-400 transition">
            Home
          </HashLink>
          <HashLink smooth to="#about" className="hover:text-yellow-400 transition">
            About
          </HashLink>
          <HashLink smooth to="#skills" className="hover:text-yellow-400 transition">
            Skills
          </HashLink>
          <HashLink smooth to="#projects" className="hover:text-yellow-400 transition">
            Projects
          </HashLink>
          <HashLink smooth to="#contact" className="hover:text-yellow-400 transition">
            Contact
          </HashLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
