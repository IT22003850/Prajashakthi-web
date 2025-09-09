import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-orange-100 py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left Content Area */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10 pr-0 lg:pr-8">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-widest mb-4">
                Growth & Development
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#932E40] mb-8">
                Empowering Communities,<br />Transforming The Nation
              </h1>
              <button className="bg-[#932E40] text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-[#7f2837] transition-colors duration-300 text-lg">
                Be empowered
              </button>
            </div>

            {/* Right Image Area */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
              {/* Ensure this path is correct for your project setup */}
              <img
                src="/home_img_1.avif"
                alt="Empowering Communities Illustration"
                className="max-w-full h-dvh object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Other Content Section */}
        <section className="py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold">More Content Here</h2>
            <p className="text-gray-600 mt-4">
              This is where the rest of your home page will go.
            </p>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;