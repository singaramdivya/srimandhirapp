import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom'
import './style.css'

const PackageSelection = () => {
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
        <div className='full-section'>
        <div className="puja-page">
          <div className="left-column">
            <Slider {...settings}>
              <div className="slide">
                <img src='./slide1.png' alt="Slide 1" />
                <div className="slide-content">
                  <div className="slide-logo">Sri Mandir Puja Seva</div>
                  <p>Proud to have served 200,000+ devotees globally</p>
                </div>
              </div>
              <div className="slide">
                <img src='./slide2.png' alt="Slide 2" />
                <div className="slide-content">
                  <div className="slide-logo">Sri Mandir Puja Seva</div>
                  <p>Proud to have served 200,000+ devotees globally</p>
                </div>
              </div>
              <div className="slide">
                <img src='./slide3.png' alt="Slide 3" />
                <div className="slide-content">
                  <div className="slide-logo">Sri Mandir Puja Seva</div>
                  <p>Proud to have served 200,000+ devotees globally</p>
                </div>
              </div>
            </Slider>
          </div>
          <div className="right-column">
            <h2>Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</h2>
            <p>For Prevention of Misfortunes and Adversities</p>
            <p>
              <strong>Location:</strong> Shree Shanidev Temple, Shani Shingnapur, Maharashtra
            </p>
            <p>
              <strong>Date:</strong> 20 July IST, Saturday, Ashadha Shukla Chaturdashi
            </p>
            <div className="countdown">
              <span>0 Day 14 Hours 2 Mins 28 Secs</span>
            </div>
            <p>
              Till now <strong>2,00,000+ Devotees</strong> have participated in Pujas conducted by Sri Mandir Puja Seva.
            </p>
            <Link to='/user-details'><button className="puja-package-button">Select puja package</button></Link>
          </div>
          </div>
          <div className='second-section'>
          <section className="puja-details">
        <h3>Puja Details</h3>
        <p>Description of the puja details...</p>
      </section>

      <section className="puja-benefits">
        <h3>Puja Benefits</h3>
        <ul>
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>
      </section>

      <section className="puja-process">
        <h3>Puja Process</h3>
        <ul>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ul>
      </section>

      <section className="temple-details">
        <h3>Temple Details</h3>
        <img src={`${process.env.PUBLIC_URL}/temple.jpg`} alt="Temple" />
        <p>Description of the temple...</p>
      </section>

      <section className="puja-packages">
        <h3>Puja Packages</h3>
        <div className="package">
          <h4>Basic Package</h4>
          <p>Pandit ji will call out your name and gotra during the puja sankalp.<br/>

Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.<br/>

Upon completion, a videoof your puja and offering will be shared with you on your registered Email ID or can be found in your booking history within 3-4 days.</p>
          <Link to='/user-details'><button className="puja-package-button">Select puja package</button></Link>
        </div>
        <div className="package">
          <h4>Premium Package</h4>
          <p>Pandit ji will call out your name and gotra during the puja sankalp.<br/>

Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.<br/>

Upon completion, a video of your puja and offering will be shared with you on your registered Email ID or can be found in your booking history within 3-4 days.</p>
          <Link to='/user-details'><button className="puja-package-button">Select puja package</button></Link>
        </div>
      </section>

      <section className="testimonials">
        <h3>What Devotees Say</h3>
        <blockquote>"Testimonial 1"</blockquote>
        <blockquote>"Testimonial 2"</blockquote>
        <blockquote>"Testimonial 3"</blockquote>
      </section>

      <section className="faqs">
        <h3>Frequently Asked Questions</h3>
        <details>
          <summary>Question 1?</summary>
          <p>Answer to question 1...</p>
        </details>
        <details>
          <summary>Question 2?</summary>
          <p>Answer to question 2...</p>
        </details>
      </section>
          </div>
          <footer className="footer">
        <p>© 2024 Sri Mandir Puja Seva. All rights reserved.</p>
      </footer>
        
        </div>
      );
    };

export default PackageSelection;

