import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { allNewsData } from '../data/newsData';

// Import icons
import {
  FaSearchLocation, FaFileAlt, FaHandsHelping, FaCogs, FaDesktop, FaArrowRight,
  FaUsers, FaCarrot, FaUserGraduate, FaShippingFast, FaShieldAlt, FaIndustry,
  FaChalkboardTeacher, FaClipboardCheck, FaFlask, FaFileContract
} from 'react-icons/fa';

// --- DUMMY DATA SOURCES ---
const infoCards = [
    { icon: <FaSearchLocation size={48} />, title: 'Find Your CDC', description: 'Discover and connect with your Community Development Council' },
    { icon: <FaFileAlt size={48} />, title: 'Explore Proposals', description: 'Discover local development plans and priorities submitted by your CDC.' },
    { icon: <FaHandsHelping size={48} />, title: 'Get involved', description: 'Submit ideas, volunteer, or support your CDC\'s initiatives.' },
];
const focusAreas = [
    { num: '01', icon: <FaUsers size={32} />, title: 'Social Environment', description: 'Safe, inclusive, and supportive village environment.' },
    { num: '02', icon: <FaCarrot size={32} />, title: 'Food Security', description: 'Strengthening resilient food systems. Ensure every family has access to quality food.' },
    { num: '03', icon: <FaUserGraduate size={32} />, title: 'Human Resource Development', description: 'Expanding access to education, skills, and health services.' },
    { num: '04', icon: <FaShippingFast size={32} />, title: 'Supply Chain Development', description: 'Connecting localities to the world through strong infrastructure.' },
    { num: '05', icon: <FaShieldAlt size={32} />, title: 'Protection', description: 'Invest in care industry. Fight value for caring culture.' },
    { num: '06', icon: <FaIndustry size={32} />, title: 'Production Economy', description: 'Grow industries, grow together.' },
];
const partnerCards = [
    { icon: <FaChalkboardTeacher size={28} />, title: 'Training & Development', description: 'Building capacity of communities, government officials, and stakeholders to lead inclusive local progress.' },
    { icon: <FaClipboardCheck size={28} />, title: 'Evaluation', description: 'Assessing progress and impact to ensure accountability, learning, and continuous improvement.' },
    { icon: <FaFlask size={28} />, title: 'Research', description: 'Generating insights to guide decision-making and strengthen community development initiatives.' },
    { icon: <FaFileContract size={28} />, title: 'Circulars and Guidelines', description: 'Official circulars, policies, and guidelines in one place. Stay updated with latest procedures.' },
];

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = () => {
      setTimeout(() => {
        setArticles(allNewsData.slice(0, 3));
        setIsLoading(false);
      }, 1500);
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-orange-100 pt-20 pb-32 lg:pt-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-200 opacity-50"></div>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 relative">
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
                    <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4 animate-fade-in-up">Growth & Development</p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#932E40] mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        Empowering Communities,<br />Transforming The Nation
                    </h1>
                    <button className="bg-[#932E40] text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-[#7f2837] transform hover:scale-105 transition-all duration-300 text-lg animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        Be empowered
                    </button>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <img src="/home_img_1.avif" alt="Empowering Communities Illustration" className="max-w-full h-auto object-cover rounded-2xl shadow-2xl" />
                </div>
            </div>
        </section>

        {/* Three Info Cards Section */}
        <AnimatedSection className="relative -mt-24 z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {infoCards.map((card, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-5 text-[#932E40]">{card.icon}</div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500 mb-2">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

        {/* About Us Section */}
        <AnimatedSection className="py-28 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 items-center">
                    <div className="relative w-full max-w-lg mx-auto">
                        <div className="absolute -top-8 -right-8 w-full h-full rounded-full bg-gradient-to-br from-red-100 to-amber-100"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#932E40] to-red-500 shadow-lg"></div>
                        <div className="relative w-full pb-[100%] rounded-full overflow-hidden shadow-2xl">
                          <img 
                            src="/home_img_2.avif" 
                            alt="Community members working together" 
                            className="absolute inset-0 w-full h-full object-cover" 
                          />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#932E40] to-red-700 text-white px-8 py-5 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                            <p className="text-4xl font-extrabold">14008</p>
                            <p className="text-xs uppercase tracking-widest font-semibold">CDCs</p>
                        </div>
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">About Us</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5 leading-tight">What is Prajashakthi?</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            "Prajashakthi is a government-led national movement that integrates all ministries and communities to eradicate poverty through inclusive, lifecycle-based and participatory development."
                            <Link to="/about" className="text-[#932E40] font-bold inline-flex items-center ml-2 group">
                                Read more <FaArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </p>
                        <div className="space-y-8">
                            {[
                                { icon: <FaCogs size={24} />, title: "Open to All", desc: "Encourages collective action" },
                                { icon: <FaDesktop size={24} />, title: "Development Approach", desc: "Lifecycle-based programs with measurable outcomes" }
                            ].map(feature => (
                                <div key={feature.title} className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 p-4 bg-red-50 border-2 border-red-100 rounded-full text-[#932E40]">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                                        <p className="text-gray-600 mt-1">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>

        {/* Our Focus Section */}
        <AnimatedSection className="py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-red-100 text-[#932E40] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">Our Focus</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 max-w-3xl mx-auto leading-tight">We cover every aspect of community development needs.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {focusAreas.map((area) => (
                <div key={area.num} className="flex items-center space-x-5 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 border-2 border-red-200 rounded-lg flex items-center justify-center bg-white text-[#932E40]">{area.icon}</div>
                    <span className="absolute -right-3 -top-3 bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">{area.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{area.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Be a Partner Section */}
        <AnimatedSection className="relative py-28">
            <img src="/partner-bg.jpg" alt="Community background" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 text-center text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-4">Be a Partner</p>
                <h2 className="text-5xl md:text-6xl font-extrabold">Together, we make a difference</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
                    {partnerCards.map((card, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-left flex items-center space-x-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                            <div className="flex-shrink-0 bg-gradient-to-br from-orange-100 to-amber-200 p-4 rounded-full text-[#932E40]">{card.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="text-gray-200 mt-1 text-sm">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
        
        {/* Latest News & Articles Section */}
        <AnimatedSection className="py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-[#932E40] uppercase tracking-widest">News & Updates</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">Latest News & Articles</h2>
                </div>
                
                {isLoading ? (
                  <div className="text-center text-gray-500"><p>Loading latest news...</p></div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {articles.map((article) => (
                          <Link key={article.id} to={`/news/${article.slug}`} className="block bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300">
                              <div className="overflow-hidden">
                                <img src={article.featuredImage} alt={article.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                              </div>
                              <div className="p-6">
                                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">{article.date}</p>
                                  <h3 className="text-lg font-bold text-gray-800 mb-4 h-16 group-hover:text-[#932E40] transition-colors duration-200">{article.title}</h3>
                                  <span className="text-sm font-bold text-[#932E40] inline-flex items-center">
                                      READ MORE <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                  </span>
                              </div>
                          </Link>
                      ))}
                  </div>
                )}
            </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Home;