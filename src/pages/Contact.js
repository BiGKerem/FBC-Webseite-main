import React from "react";
import "../styles/Contact.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 48.19950466553227,
  lng: 16.34974005397774
};
function Contact() {

  return (
    <div className="contact" id="Contact">
      {/* <div className="leftSide">
       <LoadScript
          googleMapsApiKey="AIzaSyBwSOHVAKNFkyxHhNsOv27kEU9ct5ucd3Y"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
          >
      </GoogleMap>
    </LoadScript>
    
      </div > */}
      <div className="rightSide">

      </div>
    </div >
  );
}

export default Contact;
