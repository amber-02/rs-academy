import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <> 
    {/* <div className="App"> */}
    <Router>
      
      <Navbar />
      {/* use routes instead of switch */}
      <HomePage />
      <Routes>
        <Route path="/" exact />
      </Routes>
      </Router>
      {/* </div> */}
    </>
  );
}

export default App;
