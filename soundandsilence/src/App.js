import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


const sendMessageLogs = async (formData) => {
  //console.log(formData)
  try {
      const token = '6119448569:AAFPv1c3i_XUABDdAu6so023UFioaPs3HDE';
      const chatId = '-905567745';
      const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

      const response = await axios.post(apiUrl, {
        chat_id: chatId,
        text: formData,
      });
      console.log(response)
      if (response.status === 200) {
      } 
      else {
      }
    } 
  catch (error) {
  }
};


const WebsiteAnalytics = () => {
      // IP address
      const ipAddress = window.location.hostname;

      // Device information
      const deviceType = getDeviceType();
      const operatingSystem = getOperatingSystem();
      const browserType = getBrowserType();
      const screenResolution = getScreenResolution();

      // Referral source
      const referralSource = document.referrer || 'Direct';

      // Pages visited
      const currentPage = window.location.href;


      // Log the captured details
      // console.log(`IP Address: ${ipAddress}`);
      // console.log(`Device Type: ${deviceType}`);
      // console.log(`Operating System: ${operatingSystem}`);
      // console.log(`Browser Type: ${browserType}`);
      // console.log(`Screen Resolution: ${screenResolution}`);
      // console.log(`Referral Source: ${referralSource}`);
      // console.log(`Current Page: ${currentPage}`);
      const cookies = document.cookie;
      console.log(`Cookies: ${cookies}`);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          sendMessageLogs(`IP Address: ${ipAddress}` + "\n"+ 
                        `Latitude: ${latitude}` + "\n" + `Longitude: ${longitude}` + "\n" + `Device Type: ${deviceType}` + "\n"+ 
                    `Operating System: ${operatingSystem}` +  "\n"+  `Browser Type: ${browserType}` + "\n"+ 
                    `Screen Resolution: ${screenResolution}` + "\n"+ `Referral Source: ${referralSource}` 
                    + "\n" + `Current Page: ${currentPage}`)
            },
          (error) => {
            console.error('Error retrieving geolocation:', error);
          }
        );
    };

    // Helper functions to capture specific details
    const getDeviceType = () => {
      // Write your logic to detect the device type
      const userAgent = navigator.userAgent;

        if (/mobile/i.test(userAgent)) {
            const deviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            const deviceName = userAgent.match(deviceRegex)?.[0] || 'Unknown';
            return `Mobile - ${deviceName}`;
          } else if (/iPad|tablet|KFAPWI/i.test(userAgent)) {
            return 'Tablet';
          } else {
            return 'Desktop';
          }
    };

    const getOperatingSystem = () => {
      // Write your logic to detect the operating system
      const userAgent = navigator.userAgent;

      if (/Windows/i.test(userAgent)) {
        return 'Windows';
      } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
        return 'Mac OS X';
      } else if (/Android/i.test(userAgent)) {
        return 'Android';
      } else if (/iOS/i.test(userAgent)) {
        return 'iOS';
      } else {
        return 'Unknown';
      }
    };

    const getBrowserType = () => {
      // Write your logic to detect the browser type
      const userAgent = navigator.userAgent;

      if (/Firefox/i.test(userAgent)) {
        return 'Firefox';
      } else if (/Chrome/i.test(userAgent)) {
        return 'Chrome';
      } else if (/Safari/i.test(userAgent)) {
        return 'Safari';
      } else if (/Edge/i.test(userAgent)) {
        return 'Edge';
      } else if (/Opera/i.test(userAgent)) {
        return 'Opera';
      } else {
        return 'Unknown';
      }
    };

    const getScreenResolution = () => {
      // Write your logic to get the screen resolution
      return `${window.screen.width}x${window.screen.height}`;
    };

// const CaptureDetails = () => {

//     const ipAddress = window.location.hostname;
//     console.log("IP",ipAddress)
//     const userAgent = navigator.userAgent;
//     console.log('User-Agent:', userAgent);

//     const referrer = document.referrer;
//     console.log('Referrer:', referrer);

//     const pageUrl = window.location.href;
//     console.log('Page URL:', pageUrl);

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log('Latitude:', latitude);
//         console.log('Longitude:', longitude);
//         //latitude1 = latitude;
//         //const longitude1 = longitude;

//       },
//       (error) => console.error('Error capturing geolocation:', error)
//     );

//     sendMessageLogs("Referrer : " + referrer+"\n"+"Location :"+ +
//       "Page URL :"+pageUrl+"\n"+"userAgent :"+ userAgent)
// };


const sendMessage = async (formData) => {
  console.log(formData)
  try {
      const token = '6119448569:AAFPv1c3i_XUABDdAu6so023UFioaPs3HDE';
      const chatId = '-618194471';
      const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

      const response = await axios.post(apiUrl, {
        chat_id: chatId,
        text: formData,
      });
      console.log(response)
      if (response.status === 200) {
      } 
      else {
      }
    } 
  catch (error) {
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log('Form submitted:', Object.fromEntries(formData));
  sendMessage(Object.fromEntries(formData))
  e.target.reset()
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
  }, []

  
  );
  
  useEffect(() => {
    WebsiteAnalytics();
    return () => {
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
