import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/edit-job" element={<EditJob />} />
      </Routes>
    </Router>
  );
}

export default App;
