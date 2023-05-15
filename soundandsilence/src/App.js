import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const video = document.getElementById('video');
    video.play().catch((error) => {
      // Handle the error here
      console.log('Video playback error: ', error);
    });
  }, []);

  return (
    <><h1> Hello </h1>
    <div className="background-video" id="video-container">
      <video autoPlay loop muted id="video">
        <source src="./soundandsilence/public/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add your other page content here */}
    </div></>
  );
};

export default App;
