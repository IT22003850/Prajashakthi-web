import React from 'react';

// Import icons from the react-icons library
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  // Navigation links data for easier mapping
  const navLinks = [
    { name: 'Home', href: '#', active: true, hasDropdown: false },
    { name: 'About', href: '#', active: false, hasDropdown: false },
    { name: 'News', href: '#', active: false, hasDropdown: false },
    { name: 'Contact Us', href: '#', active: false, hasDropdown: false },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#932E40] text-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 text-sm">
          {/* Language Selection */}
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:underline">සිංහල</a>
            <span>|</span>
            <a href="#" className="hover:underline">தமிழ்</a>
            <span>|</span>
            <a href="#" className="hover:underline font-semibold">English</a>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span>Follow Us:</span>
              <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram /></a>
              <a href="#" aria-label="Linkedin" className="hover:opacity-80"><FaLinkedin /></a>
              <a href="#" aria-label="X" className="hover:opacity-80"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="logo.jpg" alt="Presidential Secretariat Logo" className="h-16" />
          </div>

          {/* Right side: Navigation Links and Buttons */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <ul className="flex items-center space-x-8 font-medium text-amber-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`flex items-center space-x-1 transition-colors duration-200 ${
                      link.active ? 'text-amber-800 font-bold' : 'hover:text-amber-800'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <MdKeyboardArrowDown />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="bg-amber-700 text-white font-semibold px-5 py-2 rounded-md hover:bg-amber-800 transition-colors duration-200"
              >
                Get Involved
              </a>
              <a
                href="#"
                className="bg-[#932E40] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#7f2837] transition-colors duration-200"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;