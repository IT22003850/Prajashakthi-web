import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
        <div className="max-w-md">
          <h1 className="text-9xl font-extrabold bg-gradient-to-r from-[#932E40] to-red-500 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="mt-4 text-4xl font-bold text-gray-800">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sorry, we couldn't find the page you’re looking for. It might have
            been moved, deleted, or maybe you just mistyped the URL.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-[#932E40] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#7f2837] transform hover:scale-105 transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default NotFound;
