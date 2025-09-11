import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import { Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:slug" element={<NewsDetail />} /> 
      <Route path="/get-involved" element={<GetInvolved />} /> 
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
