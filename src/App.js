import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import OurProjects from './components/OurProjects';
import ContactUs from './components/ContactUs';
import Courses from './components/Courses'
import StudentForum from './components/StudentForum';
import SignIn from './components/navbar/SignIn';
import StudentSignUp from './components/navbar/StudentSignUp';
import TeacherSignUp from './components/navbar/TeacherSignUp';
import StudentLandingPage from './components/StudentLandingPage';

function App() {

  const [userData, setUserData] = useState()
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/studentLandingPage" element={<StudentLandingPage />} />
          {signIn ? (
            <>
              <Route path="/courses" element={<Courses/>} />
              <Route path="/forum" element={<StudentForum/>} />
            </>
          ) : (
            <>
            <Route path="/courses" element={<SignIn setUserData={setUserData} userData={userData} setSignIn={setSignIn} />} />
            <Route path="/forum" element={<SignIn setUserData={setUserData} userData={userData} setSignIn={setSignIn} />} />
            </>
          )}
          <Route path="/signin" element={<SignIn setUserData={setUserData} userData={userData} setSignIn={setSignIn} />} />
          <Route path="/student_signup" element={<StudentSignUp />} />
          <Route path="/teacher_signup" element={<TeacherSignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
