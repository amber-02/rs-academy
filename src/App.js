import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import OurProjects from './components/OurProjects';
import ContactUs from './components/ContactUs';
import Courses from './components/Courses'
import StudentForum from './components/StudentForum';
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
        <Route path="/courses" element={<Courses />} />
        <Route path="/forum" element={<StudentForum />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
