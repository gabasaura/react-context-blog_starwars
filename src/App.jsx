import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import PersonProfile from './pages/people';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<PersonProfile />} />
          </Routes>
          <Footer />
      </Router>
  );
};

export default App;