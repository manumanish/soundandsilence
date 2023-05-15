import React, { useEffect, useState } from 'react';
import './App.css';

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log('Form submitted:', Object.fromEntries(formData));

  const logData = 'This is a log entry.';
  fetch('/api/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ logData }),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Log saved successfully');
      } else {
        console.error('Failed to save log');
      }
    })
    .catch((error) => {
      console.error('Error occurred while saving log:', error);
    });
};


const App = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowMenuBar(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className={`video-section ${showMenuBar ? 'scroll-down' : ''}`}>
        <video className="background-video" autoPlay loop muted>
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`menu-bar ${showMenuBar ? 'visible' : ''}`}>
          <h1>S & S</h1>
        </div>
      </div>
      <div className="form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" required />
    </div>
    <div className="form-group">
      <label htmlFor="address">Address</label>
      <textarea id="address" name="address" rows="4" required />
    </div>
    <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
