import React, { useState, useEffect, useRef } from 'react';

// Import icons from the react-icons library
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  // State to manage the visibility of the profile dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Ref to detect clicks outside the dropdown
  const profileMenuRef = useRef(null);

  // Navigation links data for easier mapping
  const navLinks = [
    { name: 'Home', href: '#', active: true, hasDropdown: false },
    { name: 'About', href: '#', active: false, hasDropdown: false },
    { name: 'News', href: '#', active: false, hasDropdown: false },
    { name: 'Contact Us', href: '#', active: false, hasDropdown: false },
  ];
  
  // Effect to handle clicks outside the profile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


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

          {/* Right side: Navigation Links, Buttons, and Profile Icon */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8 font-medium text-amber-700">
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
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="#"
                className="bg-[#932E40] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#7f2837] transition-colors duration-200"
              >
                Join Us
              </a>
            </div>
            
            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>

            {/* Profile Icon and Dropdown */}
            <div className="relative" ref={profileMenuRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-amber-800"
              >
                <FaUserCircle size={28} />
                <MdKeyboardArrowDown className={`transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <div className="border-t my-1"></div>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;