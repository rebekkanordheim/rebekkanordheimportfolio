import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects/Projects';
import HolidazeProject from './Components/Projects/Holidaze.jsx';
import Ecom from './Components/Projects/eCom.jsx';
import BidWaveProject from './Components/Projects/BidWave.jsx';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ paddingBottom: '3em' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/holidaze" element={<HolidazeProject />} />
          <Route path="/Ecom" element={<Ecom />} />
          <Route path="/bidwave" element={<BidWaveProject />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
