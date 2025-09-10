import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'; // 1. Import NavLink instead of Link for active styles

// Import icons
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileMenuRef = useRef(null);

  // 2. Simplified navLinks data for routing. The 'active' property is no longer needed.
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Contact Us', path: '/contact' },
  ];
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#932E40] text-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 text-sm">
          {/* ... (Top bar content is unchanged) ... */}
           <div className="flex items-center space-x-2">
            <a href="#" className="hover:underline">සිංහල</a>
            <span>|</span>
            <a href="#" className="hover:underline">தமிழ்</a>
            <span>|</span>
            <a href="#" className="hover:underline font-semibold">English</a>
          </div>
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
            <img src="/logo.jpg" alt="Presidential Secretariat Logo" className="h-16" />
          </div>

          {/* Right side: Navigation Links, Buttons, and Profile Icon */}
          <div className="flex items-center space-x-8">
            {/* 3. Navigation Links UPDATED to use NavLink */}
            <ul className="hidden md:flex items-center space-x-8 font-medium text-amber-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `transition-colors duration-200 ${isActive ? 'text-amber-800 font-bold' : 'hover:text-amber-800'}`
                    }
                  >
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* ... (Rest of the header is unchanged) ... */}
            <div className="hidden sm:flex items-center space-x-4">
              <a href="#" className="bg-[#932E40] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#7f2837] transition-colors duration-200">
                Join Us
              </a>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>
            <div className="relative" ref={profileMenuRef}>
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-2 text-gray-600 hover:text-amber-800">
                <FaUserCircle size={28} />
                <MdKeyboardArrowDown className={`transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
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