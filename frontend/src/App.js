import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import SignInForm from './components/signin/SignIn';
import SignUpForm from './components/signup/SignUp';
import HeroSection from './components/herosection/Herosection';
import AboutSection from './components/aboutus/AboutUs';
import CourseSection from './components/course-section/Course-section';
import TestimonialsSection from './components/testimonial/TestimonialsSection';
import FeatureSection from './components/feature/FeatureSection';
import FacultySection from "./components/faculty/FacultySection";
import PricingSection from "./components/pricing/PricingSection";
import FAQsection from "./components/FAQs/FAQsSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/signin" element={<SignInForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route  path="/herosection" element={<HeroSection/>} />
        <Route path="/about" element={<AboutSection/>} />
        <Route path="/courses" element={<CourseSection/>} />
        <Route path="/testimonials" element={<TestimonialsSection/>} />
        <Route path="/features" element={<FeatureSection/>} />
        <Route path="/faculty" element={<FacultySection/>} />
        <Route path="/pricing" element={<PricingSection/>} />
        <Route path="/faqs" element={<FAQsection/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
       
        </Router>
    </>
  );
}

export default App;
