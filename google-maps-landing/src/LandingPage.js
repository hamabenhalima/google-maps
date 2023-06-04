import React from 'react';
import { Container } from 'react-bootstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
  position: 'relative'
};

const LandingPage = (props) => {
  return (
    <Container>
      <h1>Welcome to My Maps App!</h1>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Initial map center coordinates
      />
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Replace with your actual API key
})(LandingPage);
