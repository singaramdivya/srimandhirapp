import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import PujaBooking from './components/PujaBooking';
import PujaList from './components/PujaList';
import PackageSelection from './components/PackageSelection';
import UserDetails from './components/UserDetails';
import BookingConfirmation from './components/BookingConfirmation';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/pujabookings" element={<PujaBooking/>} />
      <Route path="/puja-list" element={<PujaList/>} />
      <Route path="/package-selection" element={<PackageSelection/>} />
      <Route path="/user-details" element={<UserDetails/>} />
      <Route path="/booking-confirmation" element={<BookingConfirmation/>} />
    </Routes>
  </Router>
);

export default App;
