import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

// Import icons for the page
import { FaQuoteLeft, FaUsers, FaLeaf, FaUsersCog, FaLandmark } from 'react-icons/fa';

// Data for the timeline section
const timelineItems = [
  {
    title: "Project Identification",
    description: "The development proposals identified by the Community Development Council should be referred to the Divisional Coordinating Committee, and actions should be taken to prepare the proposals selected according to the feasibility as formal development project proposals."
  },
  {
    title: "Coordination & Approval",
    description: "All the development activities implemented within authorized area of the Divisional Secretary should be discussed at the Divisional Coordinating Committees while the development projects implemented within authorized area of the District Secretary should be discussed at the District Coordinating Committees and implemented upon common consent."
  },
  {
    title: "Ministerial Support",
    description: "Ministries should prepare a rational plan on the manner of allocation of funds received to such ministries, provincial, district and divisional wise. Accordingly, actions should be taken to implement the proposals submitted by each Community Development Council."
  }
];

// Data for the leadership section
const leadershipCards = [
  {
    icon: <FaUsersCog size={40} />,
    title: "Steering Committee",
    description: "Co-ordination of the overall development programme and facilitation of the development stakeholders will be handled by the Prajashakthi Steering Committee."
  },
  {
    icon: <FaLandmark size={40} />,
    title: "National Policy Council",
    description: "Policy compilation and leadership will be provided by the Prajashakthi National Policy Council."
  }
];

const About = () => {
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
            <h1 className="text-5xl md:text-6xl font-extrabold">About Us</h1>
            <p className="mt-4 text-lg">
              Home / <span className="font-semibold">About Us</span>
            </p>
          </div>
        </section>

        {/* What is Prajashakthi Section */}
        <AnimatedSection className="py-24 bg-amber-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">What is Prajashakthi</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              'Prajashakthi' is a national movement implemented to eradicate poverty. All the stakeholders engaged in the task of eradicating poverty should be able to join it. Accordingly, there is room within the 'Prajashakthi' National Movement to plan the formulation and implementation of programmes through identified development approaches, with the participation of all stakeholders.
            </p>
            <div className="relative bg-gray-50 border-l-4 border-[#932E40] p-8 rounded-r-lg text-left max-w-3xl mx-auto">
              <FaQuoteLeft className="absolute -top-4 -left-4 text-6xl text-gray-200" />
              <p className="text-xl italic text-gray-700">
                A community-driven approach to sustainable development and poverty eradication across Sri Lanka.
              </p>
              <FaQuoteLeft className="absolute -bottom-4 -right-4 text-6xl text-gray-200 transform rotate-180" />
            </div>
          </div>
        </AnimatedSection>

        {/* People-Centric Approach Section */}
        <AnimatedSection className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">People-Centric Approach</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our core philosophy revolves around empowering communities to drive their own development.
              </p>
            </div>
            <div className="max-w-5xl mx-auto mt-12 bg-[#932E40] text-white p-8 rounded-xl shadow-lg">
              <p className="text-lg leading-relaxed">
                This Programme consists of people-centric initiatives, where development needs are independently identified and prioritized by the people themselves, and implemented with robust public participation. To facilitate this, a dedicated Community Development Council will be established, ensuring active involvement from the rural community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center">
                <div className="bg-red-100 p-4 rounded-full mb-4 text-[#932E40]"><FaUsers size={32} /></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Community Participation</h3>
                <p className="text-gray-600">Ensuring active involvement of local communities in identifying needs, proposing solutions, and implementing development programs for sustainable impact. Their voice is central to every initiative.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center">
                <div className="bg-red-100 p-4 rounded-full mb-4 text-[#932E40]"><FaLeaf size={32} /></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Resource Optimization</h3>
                <p className="text-gray-600">Strategic and optimal utilization of natural and public resources available locally for the preparation and execution of impactful development proposals, minimizing waste and maximizing benefit.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Community Development Council Section */}
        <AnimatedSection className="py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#932E40]">Community Development Council</h2>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-[#932E40] pl-4">Role & Responsibility</h3>
                  <p className="text-gray-600 mb-4">The Community Development Council should identify the development proposals under the development approaches introduced and the Public Officers should provide the necessary assistance in that regard.</p>
                  <p className="text-gray-600">It is the responsibility of the Community Development Council to implement all development programmes with the public participation.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-[#932E40] pl-4">Project Implementation</h3>
                  <p className="text-gray-600 mb-4">The Community Development Councils should enter into an agreement with the relevant public institution (Divisional Secretary, Pradeshiya Sabha) to implement the approved projects.</p>
                  <p className="text-gray-600">The Divisional Secretary should ensure that all the provisions allocated for the projects have been fully spent on the respective projects.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Implementation Structure (Timeline) */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Implementation Structure</h2>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-4 top-1 -ml-2 w-4 h-4 bg-[#932E40] rounded-full ring-8 ring-white"></div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Leadership Structure Section */}
        <AnimatedSection className="py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#932E40]">Leadership Structure</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadershipCards.map((card, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#932E40] text-center flex flex-col items-center">
                  <div className="text-[#932E40] mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
      </main>
      <Footer />
    </div>
  );
};

export default About;