//import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import Homepage from './Components/Homepage';
import Nursing from './Components/Nursing';
import Personalcare from './Components/Personalcare';
import Medication from './Components/Medication';
import Physicaltherapy from './Components/Physicaltherapy';
import Companion from './Components/Companion';
import Booking from './Components/Booking';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import View from './Components/View';
import Delete from './Components/Delete';
import Update from './Components/Update';
import Services from './Components/Services';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Login/>} />   
          <Route path="/Homepage" element={<Homepage/>} />
          <Route path="/Nursing" element={<Nursing/>} />
          <Route path="/Personalcare" element={<Personalcare/>} />
          <Route path="/Medication" element={<Medication/>} />
          <Route path="/Physicaltherapy" element={<Physicaltherapy/>} />
          <Route path="/Companion" element={<Companion/>} />
          <Route path="/Booking" element={<Booking/>} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/View" element={<View/>} />
          <Route path="/Delete" element={<Delete/>} />
          <Route path="/Update" element={<Update/>} />
          <Route path="/Services" element={<Services/>} />
          
          
        </Routes>
      </Router>
    </div>
  );
};

export default App