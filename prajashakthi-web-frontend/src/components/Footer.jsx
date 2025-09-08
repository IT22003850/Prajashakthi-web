import React from 'react';

// Import necessary icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
    // Data for the footer links to keep the JSX clean
    const socialLinks = [
        { icon: <FaFacebookF />, name: 'Facebook', href: '#' },
        { icon: <FaTwitter />, name: 'X / Twitter', href: '#' },
        { icon: <FaInstagram />, name: 'Instagram', href: '#' },
        { icon: <FaLinkedin />, name: 'LinkedIn', href: '#' },
    ];

    const infoLinks = [
        { name: 'Notice', href: '#' },
        { name: 'Right to information', href: '#' },
        { name: 'Gazettes', href: '#' },
        { name: 'Circulars', href: '#' },
    ];

    const resourceLinks = [
        { name: 'Get Involved', href: '#' },
        { name: 'News', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookies Policy', href: '#' },
        { name: 'Terms and Conditions', href: '#' },
    ];

    const quickLinks = [
        { name: 'Presidential Secretariat', href: '#' },
        { name: 'President Media Division', href: '#' },
        { name: 'Ministry of Rural Development, Social Security and Community Empowerment', href: '#' },
        { name: 'Clean Sri Lanka', href: '#' },
    ];

    // Simple scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-[#932E40] text-gray-300 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Social Media */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 border-b-2 border-blue-500 pb-2 inline-block">Join us on Social Media</h3>
                        <ul className="space-y-4 mt-2">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="flex items-center space-x-3 group">
                                        <span className="bg-white/90 text-[#003366] rounded-full p-2 group-hover:bg-white transition-colors">
                                            {link.icon}
                                        </span>
                                        <span className="group-hover:text-white transition-colors">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Information */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 border-b-2 border-blue-500 pb-2 inline-block">Information</h3>
                        <ul className="space-y-3 mt-2">
                            {infoLinks.map((link) => (
                                <li key={link.name} className="flex items-start">
                                    <span className="mr-2 mt-1 text-blue-400">▪</span>
                                    <a href={link.href} className="hover:text-white hover:underline">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 border-b-2 border-blue-500 pb-2 inline-block">Resources</h3>
                        <ul className="space-y-3 mt-2">
                            {resourceLinks.map((link) => (
                                <li key={link.name} className="flex items-start">
                                    <span className="mr-2 mt-1 text-blue-400">▪</span>
                                    <a href={link.href} className="hover:text-white hover:underline">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 border-b-2 border-blue-500 pb-2 inline-block">Quick links</h3>
                        <ul className="space-y-3 mt-2">
                            {quickLinks.map((link) => (
                                <li key={link.name} className="flex items-start">
                                    <span className="mr-2 mt-1 text-blue-400">▪</span>
                                    <a href={link.href} className="hover:text-white hover:underline">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-white">
                    <p>Copyright © 2025 by Prajashakthi Secretariat. All rights reserved.</p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 bg-white/90 text-[#003366] rounded-full p-3 hover:bg-white shadow-lg transition-all duration-300"
                aria-label="Scroll to top"
            >
                <FaChevronUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;