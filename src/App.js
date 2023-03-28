import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <> 
    {/* <div className="App"> */}
    <Router>
      
      <Navbar />
      {/* use routes instead of switch */}
      <Routes>
        <Route path="/" exact />
      </Routes>
      </Router>
      {/* </div> */}
    </>
  );
}

export default App;
