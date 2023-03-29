import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import ArtistProfile from './ArtistProfile'
import EventsManagement from './EventsManagement' 
import TicketingSystem from './TicketingSystem';
import DigitalArtGallery from './DigitalArtGallery';
import Marketplace from './Marketplace';
import Login from './Login';
import Signup from './Signup'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/artist-profile" element={<ArtistProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/events-management" element={<EventsManagement />} />
          <Route path="/ticketing-system" element={<TicketingSystem />} />
          <Route path="/digital-art-gallery" element={<DigitalArtGallery/>} />
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
