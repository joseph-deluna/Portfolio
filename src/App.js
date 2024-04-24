import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Assuming you have a global CSS file


import Jose from './links/Jose';
import TheDreamerStudio from './links/TheDreamerStudio';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jose />} />
          <Route path="/thedreamerstudio" element={<TheDreamerStudio />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
