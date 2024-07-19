
import React, { useState } from 'react';
import './style.css';

const UserDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    gotra: '',
    noGotra: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='main-puja-container'>
        <div className="puja-form-container">
      <h1>Sri Mandir Puja Seva</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First member name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Second member name</label>
          <input
            type="text"
            name="secondName"
            value={formData.secondName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gotra</label>
          <input
            type="text"
            name="gotra"
            value={formData.gotra}
            onChange={handleChange}
            disabled={formData.noGotra}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="noGotra"
            checked={formData.noGotra}
            onChange={handleChange}
          />
          <label>I do not know my gotra</label>
        </div>
        <button type="submit">Proceed to book</button>
      </form>
    </div>
    <div className="right-side-content">
      <h2>Saturday Shani Shingnapur Special Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek for Prevention of Misfortunes and Adversities</h2>
      <p className="partner-puja">Partner Puja</p>
      <p className="price">$101</p>
      <div className="temple-info">
        <p>Shree Shanidev Temple, Shani...</p>
        <p>20 July IST, Saturday, Ashadha...</p>
      </div>
    </div>
    </div>
  );
};

export default UserDetails;
