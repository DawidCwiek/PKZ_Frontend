import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '250px',
  height: '250px',
  margin: '-270px 0 0 200px',
};

// eslint-disable-next-line react/prefer-stateless-function
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 51.761344,
          lng: 19.454731,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCybjqk8Wi_IYJCmrH8W-k7lI-H3TbPZOg',
})(MapContainer);
