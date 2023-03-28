
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
