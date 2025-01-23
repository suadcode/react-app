import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, useMediaQuery } from '@mui/material';
import LocationOn from '@mui/icons-material/LocationOn';
import useStyles from './styles.js';

const Map = ({ coords, setCoords, setBounds, setChildClicked }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY || '' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {/* لا يوجد استخدام لـ places أو weatherData بعد الآن */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
