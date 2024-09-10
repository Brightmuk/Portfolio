import './css/App.css';
import Clock from './components/Clock';
import React, { useRef, useEffect, useState } from 'react';
import "./fonts/DS-DIGI.TTF";
import PastComponent from './components/PastComponent';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Future from './components/FutureComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Privacy from './Privacy';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
