import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { allNewsData } from '../data/newsData'; // Import the data
import { FaArrowRight } from 'react-icons/fa';

const News = () => {
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
            <h1 className="text-5xl md:text-6xl font-extrabold">News & Updates</h1>
            <p className="mt-4 text-lg">
              Home / <span className="font-semibold">News</span>
            </p>
          </div>
        </section>

        {/* News Grid Section */}
        <AnimatedSection className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allNewsData.map((article) => (
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
            </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default News;