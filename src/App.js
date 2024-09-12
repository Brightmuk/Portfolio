import './css/App.css';
import React from 'react';
import "./fonts/DS-DIGI.TTF";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Privacy from './Privacy';
import NotFound from './NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
