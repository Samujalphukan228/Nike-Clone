import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Woman from './pages/Woman';
import Kids from './pages/Kids';
import Nav from './components/Nav';

function App() {
  return (
    <div className="h-screen  overflow-x-hidden relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App; // ✅ Make sure this line exists!
