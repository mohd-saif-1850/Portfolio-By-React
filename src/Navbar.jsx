import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', to: '#home' },
    { name: 'About', to: '#about' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' },
    { name: 'Contact', to: '#contact' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -30% 0px',
        threshold: 0.3,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

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
            href="https://www.facebook.com/share/1btZkKMBCm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1877F2] transition"
          >
            <FaFacebook size={20} />
          </a>
        </div>

        <ul className="flex gap-6 text-white text-sm sm:text-base font-medium">
          {navItems.map(({ name, to }) => {
            const sectionId = to.replace('#', '');
            return (
              <HashLink
                key={to}
                smooth
                to={to}
                className={`transition hover:text-yellow-400 ${
                  activeSection === sectionId ? 'text-yellow-400' : ''
                }`}
              >
                {name}
              </HashLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
