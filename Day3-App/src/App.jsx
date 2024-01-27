//import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import Homepage from './Components/Homepage';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/Homepage" element={<Homepage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;