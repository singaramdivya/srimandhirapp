import React from 'react';
import Slider from 'react-slick';
import './style.css';

const PujaList = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
      return (
        <div className="slideshow">
          <Slider {...settings}>
            <div className="slide">
              <img src='./slide1.png' alt="Slide 1" />
              <div className="slide-content">
                <h1>2,00,000 +</h1>
                <p>Happy Devotees</p>
              </div>
            </div>
            <div className="slide">
              <img src='./slide2.png' alt="Slide 2" />
              <div className="slide-content">
                <h1>2,00,000 +</h1>
                <p>Happy Devotees</p>
              </div>
            </div>
            <div className="slide">
              <img src='./slide3.png' alt="Slide 3" />
              <div className="slide-content">
                <h1>2,00,000 +</h1>
                <p>Happy Devotees</p>
              </div>
            </div>
          </Slider>
          <div className="upcoming-pujas">
            <h2>Upcoming Pujas on Sri Mandir</h2>
          </div>
          <div>
    
    <div className="puja-list">
        <div className="puja-item">
          <img src="./shani.jpg" alt="Saturday Shani Shinganapur Special" />
          <div className="puja-details">
            <h2>Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</h2>
            <p>For Prevention of Misfortunes and Adversities</p>
            <p><i className="location-icon"></i>Shree Shandev Temple, Shani Shinganapur, Maharashtra</p>
            <p><i className="date-icon"></i>20 July IST, Saturday, Ashadha Shukla Chaturdashi</p>
            <a href="/package-selection" className="book-puja-button">Particapate</a>
          </div>
        </div>
        <div className="puja-item">
          <img src="./mahakali.png" alt="Divya Mahakali Tantrokta Havan" />
          <div className="puja-details">
            <h2>Divya Mahakali Tantrokta Havan</h2>
            <p>For Courage and Protection from Obstacles</p>
            <p><i className="location-icon"></i>Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal</p>
            <p><i className="date-icon"></i>20 July IST, Saturday, Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)</p>
            <a href="/package-selection" className="book-puja-button">Particapate</a>
          </div>
        </div>
        <div className="puja-item">
          <img src="./bagalamukhi.jpg" alt="Maa Bagalamukhi Tantra Yukta Havan" />
          <div className="puja-details">
            <h2>Maa Bagalamukhi Tantra Yukta Havan</h2>
            <p>For Victory in Court Cases and Victory over Enemies</p>
            <p><i className="location-icon"></i>Maa Bagalamukhi Temple, Haridwar, Uttarakhand</p>
            <p><i className="date-icon"></i>21 July IST, Sunday, Ashadha Shukla Chaturdashi</p>
            <a href="/package-selection" className="book-puja-button">Particapate</a>
          </div>
        </div>
      </div>
      </div>
        </div>
      );
  
  
    };

export default PujaList;
