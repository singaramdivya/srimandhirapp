import React from 'react';
import { useState } from 'react';
import './style.css';

const Home = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const toggleProfileMenu = () => {
      setShowProfileMenu(!showProfileMenu);
    };
    return(
    <div className="home-container">
    <header className="header">
        <img src="./logo.png" alt="Sri Mandir" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/puja">Puja</a></li>
            <li><a href="/chadhava">Chadhava</a></li>
          </ul>
        </nav>
        <div className="profile-container">
          <img 
            src="./profile.png" 
            alt="Profile" 
            className="profile-icon" 
            onClick={toggleProfileMenu} 
          />
          {showProfileMenu && (
            <div className="profile-menu">
              <a href="/login">Login / Create an account</a>
              <div className="profile-details">
                <a href="/profile">My profile</a>
                <a href="/pujabookings">My Puja Bookings</a>
                <a href="/chadhava-bookings">My Chadhava Bookings</a>
                <a href="/book-puja">Book a Puja</a>
                <a href="/book-chadhava">Book a Chadhava</a>
              </div>
              <div className="explore-services">
                <a href="/">Home</a>
                <a href="/puja-seva">Puja Seva</a>
                <a href="/chadhava-seva">Chadhava Seva</a>
              </div>
            </div>
          )}
        </div>
      </header>
    <main>
    <div className="banner">
          <div className="main-section">
          <h2>WORLD'S LARGEST APP FOR HINDU DEVOTEES</h2>
          <h1>Pray daily with <span className="highlight">Sri Mandir</span>.<br/> One App for all your devotional needs.</h1>
          <div className="app-buttons">
            <a href="https://play.google.com" className="app-button">
              <img src="./google--play.png" alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" className="app-button">
              <img src="./app-store.png" alt="App Store" />
            </a>
          </div>
        </div>
        <div className='image-section'>
        <img src="./main-image.jpg" alt="temple image" />
        </div>
    </div>
      <div className="banner2">
        <h1>Book Pujas in your and your family's name at 1000+ renowned temples in India.</h1>
        <p>You will also receive a video of the Puja along with divine blessings.</p>
        <a href="/puja" className="view-all-link">View All Puja →</a>
      </div>
      <div className="puja-list">
        <div className="puja-item">
          <img src="./shani.jpg" alt="Saturday Shani Shinganapur Special" />
          <div className="puja-details">
            <h2>Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</h2>
            <p>For Prevention of Misfortunes and Adversities</p>
            <p><i className="location-icon"></i>Shree Shandev Temple, Shani Shinganapur, Maharashtra</p>
            <p><i className="date-icon"></i>20 July IST, Saturday, Ashadha Shukla Chaturdashi</p>
            <a href="/puja/shani" className="book-puja-button">Book Puja</a>
          </div>
        </div>
        <div className="puja-item">
          <img src="./mahakali.png" alt="Divya Mahakali Tantrokta Havan" />
          <div className="puja-details">
            <h2>Divya Mahakali Tantrokta Havan</h2>
            <p>For Courage and Protection from Obstacles</p>
            <p><i className="location-icon"></i>Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal</p>
            <p><i className="date-icon"></i>20 July IST, Saturday, Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)</p>
            <a href="/puja/mahakali" className="book-puja-button">Book Puja</a>
          </div>
        </div>
        <div className="puja-item">
          <img src="./bagalamukhi.jpg" alt="Maa Bagalamukhi Tantra Yukta Havan" />
          <div className="puja-details">
            <h2>Maa Bagalamukhi Tantra Yukta Havan</h2>
            <p>For Victory in Court Cases and Victory over Enemies</p>
            <p><i className="location-icon"></i>Maa Bagalamukhi Temple, Haridwar, Uttarakhand</p>
            <p><i className="date-icon"></i>21 July IST, Sunday, Ashadha Shukla Chaturdashi</p>
            <a href="/puja/bagalamukhi" className="book-puja-button">Book Puja</a>
          </div>
        </div>
      </div>
    </main>
  </div>

    )
};

export default Home
