import React from 'react';
// import {   Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/herosection/Herosection';
import AboutSection from '../components/aboutus/AboutUs';
import CourseSection from '../components/course-section/Course-section';
import TestimonialsSection from '../components/testimonial/TestimonialsSection';
import FeatureSection from '../components/feature/FeatureSection';
import FacultySection from "../components/faculty/FacultySection";
import PricingSection from "../components/pricing/PricingSection";
import FAQsection from "../components/FAQs/FAQsSection";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
     
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <CourseSection/>
      <TestimonialsSection/>
      <FeatureSection/>
      <FacultySection/>
      <PricingSection/>
      <FAQsection/>
      {/* <Routes>
        <Route path="/navbar" element={<Navbar/>} />
        <Route  path="/herosection" element={<HeroSection/>} />
        <Route path="/about" element={<AboutSection/>} />
        <Route path="/courses" element={<CourseSection/>} />
        <Route path="/testimonials" element={<TestimonialsSection/>} />
        <Route path="/features" element={<FeatureSection/>} />
        <Route path="/faculty" element={<FacultySection/>} />
        <Route path="/pricing" element={<PricingSection/>} />
        <Route path="/faqs" element={<FAQsection/>} />
      </Routes> */}
      <Footer />
      
    </div>
  );
}

export default Home;
