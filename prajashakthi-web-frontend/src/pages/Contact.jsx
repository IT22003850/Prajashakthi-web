import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

// You can use a specific icon for reCAPTCHA if you wish
import { FaShieldAlt } from 'react-icons/fa';

const Contact = () => {
  // State to manage the form inputs (controlled components)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // A single handler to update the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server or email service
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    // Reset form after submission
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 text-center text-white">
          <div className="absolute inset-0">
            <img src="/about-hero-bg.jpg" alt="Cityscape Illustration" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold">Contact Us</h1>
            <p className="mt-4 text-lg">
              Home / <span className="font-semibold">Contact Us</span>
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left Column: Image */}
                <div className="hidden lg:block">
                  <img 
                    src="/contact-photo.jpg" 
                    alt="Community meeting" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Right Column: Form */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">We'd love to hear from you. Please fill out the form below.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#932E40]">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          required
                          className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#932E40] focus:border-[#932E40]"
                        />
                      </div>
                      {/* Phone Input */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#932E40]">Phone *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          required
                          className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#932E40] focus:border-[#932E40]"
                        />
                      </div>
                    </div>
                    
                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#932E40]">Email address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#932E40] focus:border-[#932E40]"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#932E40]">Your message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#932E40] focus:border-[#932E40]"
                      ></textarea>
                    </div>

                    {/* reCAPTCHA Placeholder */}
                    <div className="p-4 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <input type="checkbox" className="h-6 w-6 border-gray-300 rounded" required />
                            <label className="text-gray-700">I'm not a robot</label>
                        </div>
                        <div className="text-center">
                            <FaShieldAlt className="text-blue-600 mx-auto" size={28}/>
                            <p className="text-xs text-gray-500 mt-1">reCAPTCHA</p>
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#932E40] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#7f2837] transform hover:scale-105 transition-all duration-300"
                      >
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;