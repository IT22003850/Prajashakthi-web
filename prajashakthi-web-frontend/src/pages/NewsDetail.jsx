import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { allNewsData } from '../data/newsData';
import NotFound from './NotFound'; // Import your 404 page

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaCalendarAlt } from 'react-icons/fa';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = allNewsData.find((a) => a.slug === slug);
  const recentNews = allNewsData.filter((a) => a.slug !== slug).slice(0, 4);

  // If article doesn't exist, show the 404 page
  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 text-center text-white">
          <div className="absolute inset-0">
            <img src="/about-hero-bg.jpg" alt="Cityscape Illustration" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold">News Details</h1>
            <p className="mt-4 text-lg">
              Home / News / <span className="font-semibold">{article.title}</span>
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Left Column: Article Content */}
              <div className="lg:col-span-2">
                {/* Image Gallery */}
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  className="rounded-xl shadow-lg mb-8"
                >
                  {article.gallery.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt={`${article.title} gallery image ${index + 1}`} className="w-full h-96 object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Article Meta */}
                <div className="mb-6">
                  <p className="text-teal-600 font-semibold text-lg mb-2">{article.date}</p>
                  <p className="text-sm text-gray-500">By {article.author}</p>
                </div>

                {/* Article Title and Body */}
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">{article.title}</h1>
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                  {article.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Right Column: Recent News Sidebar */}
              <aside>
                <div className="sticky top-28 bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent News</h3>
                  <div className="space-y-6">
                    {recentNews.map((newsItem) => (
                      <Link key={newsItem.id} to={`/news/${newsItem.slug}`} className="flex items-center space-x-4 group">
                        <img src={newsItem.featuredImage} alt={newsItem.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-800 group-hover:text-[#932E40] transition-colors">{newsItem.title}</h4>
                          <p className="text-xs text-gray-500 mt-1 flex items-center"><FaCalendarAlt className="mr-2" /> {newsItem.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;