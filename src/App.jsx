import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AppContextProvider from './store/AppContext';
import PeopleProfile from './pages/people';
import PlanetProfile from './pages/planets';
import VehicleProfile from './pages/vehicles';

const App = () => {
    return (
        <AppContextProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/people/:uid" element={<PeopleProfile />} />
                    <Route path="/planets/:uid" element={<PlanetProfile />} />
                    <Route path="/vehicles/:uid" element={<VehicleProfile />} />
                </Routes>
                <Footer />
            </Router>
        </AppContextProvider>
    );
};

export default App;