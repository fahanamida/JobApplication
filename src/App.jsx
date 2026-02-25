import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AddJob from './Pages/AddJob';
import JobList from './Pages/JobList';
import EditJob from './Pages/EditJob';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;