import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Routes 
import HomePage from './components/views/landingPage';
import Page1 from './components/views/page1';
import Page2 from './components/views/page2';
import Page3 from './components/views/page3';



function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/Page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
