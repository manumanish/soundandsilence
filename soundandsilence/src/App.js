import React from 'react';
import './App.css';

console.log(process.env.PUBLIC_URL)
const App = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/video1.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add your other page content here */}
    </div>
  );
};

export default App;
