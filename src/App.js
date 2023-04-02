import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/navbar/AboutUs';
import OurProjects from './components/navbar//OurProjects';
import ContactUs from './components/navbar/ContactUs';
import SignIn from './components/navbar/SignIn';

function App() {
  return (
    <> 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
